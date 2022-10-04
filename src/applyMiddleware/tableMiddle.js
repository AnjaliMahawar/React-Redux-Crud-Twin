import axios from 'axios';
import React from 'react';
import { tableActionCreator } from '../actions/actionCreator';
//import { tableActionCreator } from '../actions/actionCreator';
//import { tableActionCreator } from '../action_creator/actionCreator';

export default function tableMiddle() {
  return async (dispatch) => {
    var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyYWY0MzM5MWM1ZGM4YjlkZWVlNmYiLCJpYXQiOjE2NjQyNjYwODV9.JMkYZVXb_XDXk4-9s-2ksowfOkdGqewIHiYtnzkrZK8'
      try {
          const table = await axios.get('http://192.168.1.9:8020/api/employees',{
              headers:{
                'Accept': 'application/json',
               'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`,
                //'Host': 'api.producthunt.com'
              }
          })
          console.log(table)
          await dispatch(tableActionCreator(table))
      } catch (error) {
          console.log(error);
      }
  }
}

