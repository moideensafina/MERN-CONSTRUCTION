import axios from 'axios';
import { loadUserFail, loadUserRequest, loadUserSuccess, logOutFail, logOutSuccess, loginFail, loginRequest, loginSuccess } from '../slices/authSlice';


export const login =(email,password) =>async (dispatch)=>{
    try {
        dispatch(loginRequest())
        const {data} = await axios.post(`/api/v1/admin/login`,{email,password});
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }
}

export const loadUser =async (dispatch)=>{
    try {
        dispatch(loadUserRequest())
        const {data} = await axios.get(`/api/v1/myprofile`);
        dispatch(loadUserSuccess(data))

    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }
}

export const logOut =async (dispatch)=>{
    try {
        const {data} = await axios.get(`/api/v1/admin/logout`);
        dispatch(logOutSuccess(data))

    } catch (error) {
        dispatch(logOutFail(error.response.data.message))
    }
}