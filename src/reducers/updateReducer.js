import { UPDATEEMPLOYEES } from "../Constant/constant"


//import { UPDATEEMPLOYEES } from "../Constants/constants";
const initialState = {
    update_data:[]
}
export const updateReducer =  (state=initialState,action) => {

    switch(action.type){
        case UPDATEEMPLOYEES:
            return{
                
                ...state,
                update_data:action.payload
            }
    }
    return state
}