import { LOG_IN_USER, LOG_OUT_USER } from "./userTypes";

const initialState = {
    loggedIn:false
}

const userReducer = (state=initialState,action)=> {
    switch(action.type){
        case LOG_IN_USER:
            return{ 
                ...state,
                loggedIn:true
            }
        case LOG_OUT_USER:
            return{ 
                ...state,
                loggedIn:false
            }
        default:
            return state
    }

}

export default userReducer