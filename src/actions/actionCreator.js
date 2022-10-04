//import {  DELETEEMPLOYEES,  TABLEDATA, UPDATEEMPLOYEES } from "../Constants/constants"

import { DELETEEMPLOYEES, NEWUPDATEEMPLOYEES, TABLEDATA, UPDATEEMPLOYEES,ADDEMPLOYEES1 } from "../Constant/constant"








export const tableActionCreator = (get_tbl) => {
    return {
        type:TABLEDATA,
        payload:get_tbl.data
    }
}
export const tableAddActionCreator = (get_tbl) => {
    return {
        type:NEWUPDATEEMPLOYEES,
        payload:get_tbl.data
    }
}


export const employDelActionCreator = (del_data) => {
    
    return {
        type:DELETEEMPLOYEES,
        payload:del_data
    }
}

export const updateEmpActionCreator = (updt_data) => {
    return{
        type:UPDATEEMPLOYEES,
        payload:updt_data.data
    }
}

export const updateEmployeesActionCreator = (my_emp_updt) => {
    return{
        type:UPDATEEMPLOYEES,
        payload:my_emp_updt.data
    }
}

export const addEmployeesActionCreator = (my_emp_updt) => {
    return{
        type:ADDEMPLOYEES1,
        payload:my_emp_updt.data
    }
}
