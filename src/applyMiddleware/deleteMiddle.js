

import axios from 'axios';
import { employDelActionCreator } from '../actions/actionCreator';
//import { employDelActionCreator } from '../actions/actionCreator';
//import { employDelActionCreator } from '../action_creator/actionCreator';

export default function deleteMiddle(id) {
  return async(dispatch)=>{
    var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyYWY0MzM5MWM1ZGM4YjlkZWVlNmYiLCJpYXQiOjE2NjQyNjYwODV9.JMkYZVXb_XDXk4-9s-2ksowfOkdGqewIHiYtnzkrZK8'
    try {
        let del_data = await axios.delete('http://192.168.1.9:8020/api/employees/'+id,{
            headers:{
               // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
            }
        })
        // console.log(del_data);
        if(del_data.status ==200){
     
        }
        await dispatch(employDelActionCreator(del_data))
    } catch (error) {
        console.log(error)
    }
  }
}