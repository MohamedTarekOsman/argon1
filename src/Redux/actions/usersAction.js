import { useGetDataToken } from "../../customHooks/useGetData"
import { GET_ALL_USERS, GET_ERROR } from "../types"

//get all tasks
export const getAllUsers=()=>async (dispatch)=>{
    try{
        const response=await useGetDataToken(`/users`)
        dispatch({
            type:GET_ALL_USERS,
            payload:response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}