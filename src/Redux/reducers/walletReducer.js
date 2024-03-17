import {GET_ALL_WALLETS} from '../types'

const inial={
    wallet:[]
}

const walletReducer=(state=inial,action)=>{
    switch(action.type){
        case GET_ALL_WALLETS:
            return {
                ...state,
                wallet:action.payload,
            }
        default:
            return state;
    }
}

export default walletReducer