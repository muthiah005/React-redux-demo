import { LOG_OUT_USER, LOG_IN_USER } from "./userTypes"

export const userLogin = () =>{
    console.debug("dispatched")
    return{
        type:LOG_IN_USER
    }
}

export const userLogout = () =>{
    console.debug("dispatched")
    return{
        type:LOG_OUT_USER
    }
}

