import { useGetDataToken } from "../../customHooks/useGetData"
import { GET_ALL_WALLETS, GET_ERROR } from "../types"

export const getAllWallet=()=>async(dispatch)=>{
    try{
        const response=await useGetDataToken('/wallet')
        dispatch({
            type:GET_ALL_WALLETS,
            payload:response
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}