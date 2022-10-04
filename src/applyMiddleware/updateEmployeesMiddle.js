import axios from "axios"
import { updateEmployeesActionCreator } from "../actions/actionCreator"
//import { updateEmployeesActionCreator } from "../actions/actionCreator"
//import { updateEmployeesActionCreator } from "../action_creator/actionCreator"

export default function updateEmployeesMiddle(id,updateData) {
  var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyYWY0MzM5MWM1ZGM4YjlkZWVlNmYiLCJpYXQiOjE2NjQyNjYwODV9.JMkYZVXb_XDXk4-9s-2ksowfOkdGqewIHiYtnzkrZK8'
  return async(dispatch)=>{
  
    try {
        let updt_emp_data = await axios.patch("http://192.168.1.9:8020/api/employees/"+id,{
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

        console.log(updt_emp_data)

       await dispatch(updateEmployeesActionCreator(updt_emp_data))
    } catch (error) {
        console.log(error)
    }
  }
}