import useDeleteData from "../../customHooks/useDeleteData"
import { useGetDataToken } from "../../customHooks/useGetData"
import { useInsertData } from "../../customHooks/useInsertData"
import { useUpdateData } from "../../customHooks/useUpdateData"
import { CREATE_TASK, DELETE_TASK, GET_ALL_TASKS, GET_ERROR, GET_ONE_TASK, UPDATE_TASK } from "../types"


//get all tasks
export const getAllTasks=()=>async (dispatch)=>{
    try{
        const response=await useGetDataToken(`/tasks`)
        dispatch({
            type:GET_ALL_TASKS,
            payload:response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//create task
export const createTask=(formData)=>async (dispatch)=>{
    try{
        const response=await useInsertData(`/tasks`,formData);
        dispatch({
            type:CREATE_TASK,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//get one task with id
export const getOneTask=(id)=>async (dispatch)=>{
    try{
        const response=await useGetDataToken(`/api/v1/tasks/${id}`);
        dispatch({
            type:GET_ONE_TASK,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//delete task with id
export const deleteTask=(id)=>async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/tasks/${id}`);
        dispatch({
            type:DELETE_TASK,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//update task with id
export const updateTask=(id,formdata)=>async (dispatch)=>{
    try{
        const response=await useUpdateData(`/api/v1/tasks/${id}`,formdata);
        dispatch({
            type:UPDATE_TASK,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}