import { createSlice  } from "@reduxjs/toolkit";

const packageSlice = createSlice({
    name:'package',
    initialState:{
        loading:false
    },
    reducers:{
        loadPackageRequest(state,action){
            return {
                ...state,
                loading:true
                
            }
        },
        loadPackageSuccess(state,action){
            return{

                loading:false,
                packages:action.payload.package[0]
            }
        },
        loadPackageFail(state,action){
            return{
                ...state,
                loading:false                
            }
        },
        updatePackageRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updatePackageSuccess(state, action){
            return {
                ...state,
                loading: false,
                packages: action.payload.package[0],
                isPackageUpdated: true
            }
        },
        updatePackageFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        clearPackageUpdated(state, action) {
            return {
                ...state,
                isProductUpdated: false,
                
            }
        }
    }
})


const {actions,reducer}  = packageSlice;

export const {
    loadPackageFail,
    loadPackageRequest,
    loadPackageSuccess,
    updatePackageRequest,
    updatePackageSuccess,
    updatePackageFail,
    clearPackageUpdated
} = actions;



export default reducer;