import { useGetDataToken } from "../../customHooks/useGetData"
import { GET_ALL_NOTIFICATIONS, GET_ERROR } from "../types"

export const getAllNotification=()=>async(dispatch)=>{
    try{
        const response=await useGetDataToken('/notification')
        dispatch({
            type:GET_ALL_NOTIFICATIONS,
            payload:response
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}