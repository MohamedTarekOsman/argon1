import { useGetDataToken } from "../../customHooks/useGetData"
import { GET_ALL_NOTES, GET_ERROR } from "../types"

export const getAllNotes=()=>async(dispatch)=>{
    try{
        const response=await useGetDataToken('/publicnNotes')
        dispatch({
            type:GET_ALL_NOTES,
            payload:response
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}