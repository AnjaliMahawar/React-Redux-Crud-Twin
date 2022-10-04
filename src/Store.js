

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// import { getTableReducer } from "../reducers/getTableReducer";
 import { deleteReducer } from "./reducers/deleteReducer";
import { updateReducer } from "./reducers/updateReducer";
 import { updateEmployeesReducer } from "./reducers/updateEmployeesReducer";
import { getTableReducer } from "./reducers/getTableReducer";
// // 
const rootRducer = combineReducers({
   
    getTableReducer,
    deleteReducer,
    updateReducer,
    updateEmployeesReducer
})
export const store = legacy_createStore(rootRducer,applyMiddleware(thunk))
//  console.log(store)