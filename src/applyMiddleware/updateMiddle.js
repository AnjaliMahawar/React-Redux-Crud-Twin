

import axios from "axios"
import { updateEmpActionCreator } from "../actions/actionCreator";
//import { updateEmpActionCreator } from "../actions/actionCreator";
//import { updateEmpActionCreator } from "../action_creator/actionCreator";

export default function updateMiddle(id) {
  var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyYWY0MzM5MWM1ZGM4YjlkZWVlNmYiLCJpYXQiOjE2NjQyNjYwODV9.JMkYZVXb_XDXk4-9s-2ksowfOkdGqewIHiYtnzkrZK8'
  return  async(dispatch)=>{
    try {
        let get_updt_data =await axios.get('http://192.168.1.9:8020/api/employees/'+id,{
          headers:{
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
          }
        });
        // console.log(get_updt_data.data)
        await dispatch(updateEmpActionCreator(get_updt_data))
    } catch (error) {
        console.log(error)
    }
  }
}