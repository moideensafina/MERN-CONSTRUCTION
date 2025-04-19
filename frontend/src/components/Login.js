import { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../actions/userAction';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
    const [email,setEmail] = useState("");
        const [password,setPassword] =useState("");
        const dispatch = useDispatch();
        const navigate =  useNavigate();
        const location = useLocation()

        const {isAuthenticated} = useSelector(state=>state.authState)

        const redirect = location.search?'/'+location.search.split('=')[1]:'/';

        const submitHandler = (e) =>{
            e.preventDefault();
            dispatch(login(email,password))
        }

            useEffect(()=>{
                if (isAuthenticated) {
                    navigate(redirect);
                }
                 
            },[isAuthenticated,dispatch,navigate,redirect])
    return(
        <>
        
        <div className="login-container">
      <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form onSubmit={submitHandler}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Email" 
            value={email}
            onChange={e=> setEmail(e.target.value)}
            />

          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" 
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div className="row button">
            <input type="submit"  value="Login"/>
          </div>
          <div className="signup-link">Admin Only Login</div>
        </form>
      </div>
    </div>
        </>
    )
};
