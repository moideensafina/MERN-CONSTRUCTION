import axios from 'axios' 
import { deleteProjectFail, deleteProjectRequest, deleteProjectSuccess, newProductFail, newProductRequest, newProductSuccess, projectFail, projectRequest, projectSuccess, singleProjectFail, singleProjectRequest, singleProjectSuccess, updateProductFail, updateProductRequest, updateProductSuccess } from '../slices/projectSlice'
import { loadPackageFail, loadPackageRequest, loadPackageSuccess, updatePackageFail, updatePackageRequest, updatePackageSuccess } from '../slices/packageSlice';

export const getProject = async(dispatch)=>{
    try {
        dispatch(projectRequest())
        const {data}=await axios.get('/api/v1/projects');
        dispatch(projectSuccess(data))
    } catch (error) {
        dispatch(projectFail(error.response.data.message))
    }
}
export const getSingleProject =id=> async(dispatch)=>{
    
    try {
        dispatch(singleProjectRequest())
        const {data} =  await axios.get(`/api/v1/project/${id}`)
        dispatch(singleProjectSuccess(data))
    
    } catch (error) {
        //handle error
        dispatch(singleProjectFail(error.response.data.message))
    }
    
    }

export const deleteProduct= id => async(dispatch)=>{
    
    try {
        dispatch(deleteProjectRequest())
        

    await axios.delete(`/api/v1/admin/project/${id}`)
        
        
        dispatch(deleteProjectSuccess())
    
    } catch (error) {
        //handle error
        dispatch(deleteProjectFail(error.response.data.message))
    }  
    }

    export const createNewProject= productData => async(dispatch)=>{
    
        try {
            dispatch(newProductRequest())
            const config = {
                headers:{
                    'Content-type':'multipart/form-data'
                }
            }

            const {data} =  await axios.post('/api/v1/admin/project/new',productData,config)
            
            
            dispatch(newProductSuccess(data))
        
        } catch (error) {
            //handle error
            dispatch(newProductFail(error.response.data.message))
        }  
        }
    

        export const updateProject  =  (id, productData) => async (dispatch) => {

            try {  
                dispatch(updateProductRequest()) 
              
                const { data }  =  await axios.put(`/api/v1/admin/project/${id}`, productData);
                dispatch(updateProductSuccess(data))
            } catch (error) {
                //handle error
                dispatch(updateProductFail(error.response.data.message))
            }   
        }

        export const loadPackage =async (dispatch)=>{
            try {
                dispatch(loadPackageRequest())
                const {data} = await axios.get(`/api/v1/package`);
                dispatch(loadPackageSuccess(data))
        
            } catch (error) {
                dispatch(loadPackageFail(error.response.data.message))
            }
        }

        export const updatePackage  =  (packageId,budget,standard,premium,luxury) => async (dispatch) => {

            try {  
                dispatch(updatePackageRequest())
                const { data }  =  await axios.put(`/api/v1/admin/package/update/${packageId}`, {budget,standard,premium,luxury});
                dispatch(updatePackageSuccess(data))
            } catch (error) {
                //handle error
                dispatch(updatePackageFail(error.response.data.message))
            }   
        }