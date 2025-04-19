import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/userAction";

export default function Header() {
    const[Toggle,showMenu]=useState(false);
    
    const {isAuthenticated} = useSelector(state=>state.authState)
    const dispatch = useDispatch();
    
    
    const logOutHandler = ()=>{
        dispatch(logOut)
        
    }
    const navLogOutHandler = ()=>{
        dispatch(logOut)
        showMenu(!Toggle)
    } 
    const {packages} =useSelector((state)=>state.packageState)
    return(
        
        <Fragment>
        <header className="header row container" id="home">
        <a href="/" className="logo"><img src="/images/logo.png" alt="logo" /></a>
        <div className="toggleMenu" ></div>
        <nav className="navigation row">
            <ul className="nav row">
                <li><a href="/">Home</a></li>
                {
                    !isAuthenticated &&
                    <li><a href="/about">About us</a></li>
                    
                }    
                    <li><a href="/projects">Project</a></li>
                
                {
                    !isAuthenticated &&
                    <li><a href="/service">Service</a></li>
                }
                {
                    !isAuthenticated &&
                    <li><a href="/contact">Contact</a></li>
                }
                {isAuthenticated &&
                <li><a href="/admin/projects">Project List</a></li>
                }
                {isAuthenticated &&
                <li><a href="/admin/project/create">Create Project</a></li>
                }
                {isAuthenticated && packages && packages._id &&     
                    <li ><a className='' href={`/admin/package/${packages._id}`} >Update Package</a></li>
                }
                {isAuthenticated &&
                <li onClick={logOutHandler} ><a className='red'>Logout</a></li>
                }
                
            </ul>
  
        </nav>
        
        <div  className={Toggle ? "active-menu":"menu"} id="menu" onClick={()=>showMenu(!Toggle)}>
            <svg width="60" height="35" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <title>Menu</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Menu">
                        <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24">
            
            </rect>
                        <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round">
            
            </line>
                        <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round">
            
            </line>
                        <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round">
            
            </line>
                    </g>
                </g>
            </svg>
        </div>
    </header>
    <div  className={Toggle ? "active-navbar navbar":"navbar"}>
                <a className="nav-list" onClick={()=>showMenu(!Toggle)} href="/" >Home</a>
                {
                    !isAuthenticated &&
                            <a className="nav-list" onClick={()=>showMenu(!Toggle)} href="/about">About us</a>
                }
                
                <a className="nav-list" onClick={()=>showMenu(!Toggle)} href="/projects">project</a>
                
                {
                    !isAuthenticated &&
                            <a  className="nav-list" onClick={()=>showMenu(!Toggle)} href="/service">service</a>
                }
                {
                    !isAuthenticated &&
                            <a className="nav-list" onClick={()=>showMenu(!Toggle)} href="/contact">contact</a>
                }
                {
                    isAuthenticated &&
                            <a className="nav-list" onClick={()=>showMenu(!Toggle)} href="/admin/projects">Project List</a>
                }
                {
                    isAuthenticated &&
                            <a className="nav-list" onClick={()=>showMenu(!Toggle)} href="/admin/project/create">Create Project</a>
                }
                {
                    isAuthenticated && packages && packages._id &&     
                            <a className="nav-list" onClick={()=>showMenu(!Toggle)} href={`/admin/package/${packages._id}`}>Update Package</a>
                }
                {isAuthenticated&&
                <a className="nav-list red" onClick={navLogOutHandler}>Logout</a>
                }
        </div>
        
        </Fragment>
    )
};
