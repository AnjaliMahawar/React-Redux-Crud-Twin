import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployeesActionCreator } from '../actions/actionCreator'
//import { tableActionCreator } from '../actions/actionCreator'
import deleteMiddle from '../applyMiddleware/deleteMiddle'
import postMiddle from '../applyMiddleware/postMiddle'
import tableMiddle from '../applyMiddleware/tableMiddle'
import updateEmployeesMiddle from '../applyMiddleware/updateEmployeesMiddle'
import updateMiddle from '../applyMiddleware/updateMiddle'
//import updateMiddle from '../applyMiddleware/updateMiddle'

export default function Crud2() {
 const dispatch=useDispatch()
 const [updateData,setUpdateData] = useState()
 const [show, setShow] = useState(false);

 
 //getTableReducer
//const userList=useSelector(state=>state.userList)
 // const {loading,users,error}=userList
  var getTableReducer=useSelector(state=>state.getTableReducer.get_tbl_emp)
 
 // let state = useSelector((state) => state?.getTableReducer?.get_tbl_emp);
  let updateState = useSelector((state) => state.updateReducer.update_data);
  console.log("...",getTableReducer)
  console.log("...update",updateState)




  useEffect(()=>{
    getEmpData ()
 },[])
 
  const changeData = (e) => {
    const {name,value} = e.target
    // console.log(name,value);
    setUpdateData({
      ...updateData,
      [name]:value
    }) 
    
  }

  const getEmpData = () => {
    
    console.log("data")
 
   
    dispatch(tableMiddle());
   
  // var data=getTableReducer
  // console.log("data",data)
    //
  
  };
  const deleData=(e)=>{
    console.log("delete")
    console.log(e.target.value)
    let id=e.target.value
    dispatch(deleteMiddle(id));
   // dispatch(deleteMiddle(id));
   alert("record deleted successfully")
   window.location.reload()

  }
  const UpData=(e)=>{

    setShow(true);
  //const handleShow = () => setShow(true);
  setUpdateData(updateState)
    console.log("edit")
   
    let id=e.target.value
    dispatch(updateMiddle(id));

    
  

  }
  const update2=(e)=>{
    console.log("update2")
    var id =e.target.value
    console.log("update id",id)
    dispatch(updateEmployeesMiddle(id,updateData))
    window.location.reload()


  }
const PostData=(e)=>{
  e.preventDefault()
  console.log("post data")
  setUpdateData(updateState)
  dispatch(postMiddle(updateData))

}

  console.log("updatestat",updateState)

  return (
  <div>  
    <h1>crud</h1>

   
   { 
   <Form>
      <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" name='name' value={updateData?.name ?? ''} onChange={(e)=>{changeData(e)}}  placeholder="Enter your name" />
        </Form.Group>
      <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' value={updateData?.email ?? ""}onChange={(e)=>{changeData(e)}} placeholder="Enter email" />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicDob">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="text"  name='dob'value={updateData?.dob ?? ""} onChange={(e)=>{changeData(e)}} placeholder="enter your DOB" />
        </Form.Group> 
        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text"  name="position"  value={updateData?.position ?? ""} onChange={(e)=>{changeData(e)}} placeholder="enter your Position" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTechnologies">
          <Form.Label>technologies_known</Form.Label>
          <Form.Control type="text" name='technologies_known'  value={updateData?.technologies_known ?? ""} onChange={(e)=>{changeData(e)}} placeholder="enter technologies " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTechnologiesType">
          <Form.Label>technologie_type</Form.Label>
          <Form.Control type="text"  name='technologie_type' value={updateData?.technologie_type ?? ""} onChange={(e)=>{changeData(e)}} placeholder="enter technologie type" />
        </Form.Group>
     

      
      </Form>}
      {
       !show?
         <button  className="btn btn-primary btn-xl mb-5" onClick={(e) => { PostData(e);}}> Post_Data </button>  :
         <button  className="btn btn-primary btn-xl mb-5"value={updateState._id}  onClick={(e) => { update2(e);}}> Update_Data</button> 
          
        
      }
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>DOB</th>
          <th>Technologie Type</th>
          <th>Technologies Known</th>
          <th>Update/Delete</th>
        

        
        </tr>
      </thead>
      <tbody>
       
      {
            getTableReducer.map((cv,indx)=>(
               
                <tr key={cv._id}>
                
                    <td>{cv._id}</td>
              
                <td>{cv.name}</td>
                <td>{cv.email}</td>
                <td>{cv.position}</td>
                <td>{cv.technologie_type}</td>
                <td>{cv.technologies_known}</td>
                <td className="d-flex justify-content-center m-3">
                <Button onClick={deleData}  value={cv._id} variant="danger">Delete</Button>
                <Button onClick={UpData} variant="warning"  value={cv._id}>Edit</Button>     
                    </td>



                
            </tr>
            )
            
            )
         
        }
      
      </tbody>
    </Table>

       
    
        </div>
  
  )
}
