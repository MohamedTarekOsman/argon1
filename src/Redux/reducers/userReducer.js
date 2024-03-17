import { GET_ALL_USERS} from '../types'

const inial={
    user:[]
}

const userReducer=(state=inial,action)=>{
    switch(action.type){
        case GET_ALL_USERS:
            return {
                ...state,
                user:action.payload,
            }
        default:
            return state;
    }
}

export default userReducer