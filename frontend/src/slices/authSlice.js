import { createSlice  } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        loading:true,
        isAuthenticated:false
    },
    reducers:{
        loginRequest(state,action){
            return {
                ...state,                
                loading:true
            }
        },
        loginSuccess(state,action){
            return{

                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        loginFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearError(state,action){
            return{
                ...state,
                error:null
            }
        },
        loadUserRequest(state,action){
            return {
                ...state,
                isAuthenticated:false,
                loading:true
                
            }
        },
        loadUserSuccess(state,action){
            return{

                loading:false,
                isAuthenticated:true,
                user:action.payload.user
                
            }
        },
        loadUserFail(state,action){
            return{
                ...state,
                loading:false                
            }
        },
        logOutSuccess(state,action){
            return{

                loading:false,
                isAuthenticated:false
            }
        },
        logOutFail(state,action){
            return{
                ...state,
                error:action.payload
            }
        }
    }
})


const {actions,reducer}  = authSlice;

export const {
loginRequest,
loginSuccess,
loginFail,
clearError,
loadUserRequest,
loadUserSuccess,
loadUserFail,
logOutFail,
logOutSuccess,
} = actions;


export default reducer;