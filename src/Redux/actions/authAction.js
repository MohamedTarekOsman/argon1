import { useInsertData } from "../../customHooks/useInsertData";
import { LOGIN_USER, SIGNUP_USER } from "../types";


// login user
export const loginUser=(data)=>async (dispatch)=>{
    try{
        const response=await useInsertData(`/auth/login`,data);
        dispatch({
            type:LOGIN_USER,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:LOGIN_USER,
            payload: e.response,
        })
    }
}

// signup user
export const signupUser=(data)=>async (dispatch)=>{
    try{
        const response=await useInsertData(`/auth/signup`,data);
        dispatch({
            type:SIGNUP_USER,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:SIGNUP_USER,
            payload: e.response,
        })
    }
}