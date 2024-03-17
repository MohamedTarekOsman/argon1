import {combineReducers} from 'redux'
import authReducer from './authReducer'
import taskReducer from './taskReducer'
import userReducer from './userReducer'
import walletReducer from './walletReducer'
import notificationReducer from './notificationReducer'
import noteReducer from './noteReducer'

export default combineReducers({
    authReducer:authReducer,
    taskReducer:taskReducer,
    userReducer:userReducer,
    walletReducer:walletReducer,
    notificationReducer:notificationReducer,
    noteReducer:noteReducer,
})