import axios from "axios"
import swal from "sweetalert"
import { addEmployeesActionCreator } from "../actions/actionCreator"
//import { updateEmployeesActionCreator } from "../actions/actionCreator"
//import { updateEmployeesActionCreator } from "../action_creator/actionCreator"

export default function postMiddle(updateData) {
  var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyYWY0MzM5MWM1ZGM4YjlkZWVlNmYiLCJpYXQiOjE2NjQyNjYwODV9.JMkYZVXb_XDXk4-9s-2ksowfOkdGqewIHiYtnzkrZK8'
  return async(dispatch)=>{
  
    try {
        let post_emp_data = await axios.post("http://192.168.1.9:8020/api/employees/",{
            name:updateData.name,
            email:updateData.email,
            dob:updateData.dob,
            position:updateData.position,
            technologies_known:updateData.technologies_known,
            technologie_type:updateData.technologie_type,
        },{
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
       
              }
        })

        console.log(post_emp_data)
        if(post_emp_data.status ==201){
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: window.location.reload(),
              });

             
     
        }

       await dispatch(addEmployeesActionCreator(post_emp_data))
    } catch (error) {
        console.log(error)
    }
  }
}