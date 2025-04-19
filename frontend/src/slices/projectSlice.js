import { createSlice  } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name:'project',
    initialState:{
        loading:false,
        isProjectDeleted:false,
        isProductCreated:false
    },
    reducers:{
        projectRequest(state,action){
            return {
                loading:true
            }
        },
        projectSuccess(state,action){
            return{
                loading:false,
                projects:action.payload.projects
            }
        },
        projectFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        },
        singleProjectRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
        singleProjectSuccess(state,action){
            return{
                ...state,
                loading:false,
                project:action.payload.project
            }
        },
        singleProjectFail(state,action){
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
        deleteProjectRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
        deleteProjectSuccess(state,action){
            return{
                ...state,
                loading:false,
                isProjectDeleted:true
            }
        },
        deleteProjectFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearProjectDeleted(state,action){
            return{
                ...state,
                isProjectDeleted:false
            }
        },
        newProductRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
        newProductSuccess(state,action){
            return{
                ...state,
                loading:false,
                product:action.payload.product,
                isProductCreated:true
            }
        },
        newProductFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload,
                isProductCreated:false
            }
        },
        clearProductCreated(state,action){
            return{
                ...state,
                isProductCreated:false
            }
        },
        updateProductRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateProductSuccess(state, action){
            return {
                ...state,
                loading: false,
                product: action.payload.product,
                isProductUpdated: true
            }
        },
        updateProductFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearProductUpdated(state, action) {
            return {
                ...state,
                isProductUpdated: false
            }
        }
        
    }
})


const {actions,reducer}  = projectSlice;

export const {
    projectRequest,
    projectSuccess,
    projectFail,
    singleProjectRequest,
    singleProjectSuccess,
    singleProjectFail,
    clearError,
    deleteProjectRequest,
    deleteProjectSuccess,
    deleteProjectFail,
    clearProjectDeleted,
    newProductRequest,
    newProductSuccess,
    newProductFail,
    clearProductCreated,
    updateProductRequest,
    updateProductSuccess,
    updateProductFail,
    clearProductUpdated
} = actions;



export default reducer;