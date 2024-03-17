import {LOGIN_USER, SIGNUP_USER} from '../types'

const inial={
    loginUser:[],
    signupUser:[]
}

const authReducer=(state=inial,action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                loginUser:action.payload,
            }
        case SIGNUP_USER:
        return {
            ...state,
            signupUser:action.payload,
        }
        default:
            return state;
    }
}

export default authReducer