import {combineReducers, configureStore} from "@reduxjs/toolkit";
import projectReducer from './slices/projectSlice'
import authReducer from './slices/authSlice'
import packageReducer from './slices/packageSlice'




const reducer = combineReducers({
   projectState:projectReducer,
   authState:authReducer,
   packageState:packageReducer
})
const store= configureStore({
   reducer
})

export default store;
