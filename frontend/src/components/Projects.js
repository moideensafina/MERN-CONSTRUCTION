import { useDispatch, useSelector } from "react-redux"
import { getProject } from "../actions/projectAction"
import { Fragment, useEffect } from "react";
import Loader from "./layouts/Loader";

export default function Projects() {
    
    const dispatch = useDispatch()

    const {projects,loading} =useSelector((state)=>state.projectState)

    
    useEffect(()=>{
        dispatch(getProject)
    },[dispatch])

    return(
    <Fragment>
        {loading?<Loader/>:
        <Fragment>
        
        <section className="projects" >
                <div className="container">
                    <h2>Our Projects</h2>
                    <div className="projects-imgs column">
                        {projects && projects.map((pro)=>(
                            <div className="pro-img">
                                <img src={pro.image} alt="" srcset=""/>
                                <h4>{pro.sqrt} sqft ({pro.price} lac)</h4>
                                <p><i className="uil uil-location-point"></i>{pro.city},{pro.district}</p>
                            </div>                    
                        ))}
                    </div>
        
                </div>
            </section>
        </Fragment>
        }
    
    
    </Fragment>)
};

