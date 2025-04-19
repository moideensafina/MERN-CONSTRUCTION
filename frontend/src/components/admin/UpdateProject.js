import {  useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError, clearProductUpdated } from "../../slices/projectSlice";
import {  getSingleProject, updateProject } from "../../actions/projectAction";
import { useEffect, useState } from "react";



export default function UpdateProject() {

    const [ city,setCity] = useState("");
    const [ district,setDistrict] = useState("");
    const [ price,setPrice] = useState(0);
    const [ sqrt,setSqrt] = useState(0);
    const [ images,setImages] = useState("");
    const [ imagesPreview,setImagesPreview] = useState("");
    const {id:projectId} = useParams();

    const {loading,isProductUpdated,error,project={}} = useSelector(state=>state.projectState)


    const dispatch = useDispatch()
    
    

    const onImagesChange =(e)=>{
      if (e.target.name=== 'project') {
        const reader = new FileReader();
        reader.onload=()=>{
          if (reader.readyState === 2) {
            
            setImagesPreview(reader.result);
            setImages(e.target.files[0])
          }
        }
        reader.readAsDataURL(e.target.files[0])
       }

    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('city',city);
        formData.append('district',district);
        formData.append('price',price);
        formData.append('sqrt',sqrt);
        formData.append('image',images)
        dispatch(updateProject(projectId,formData))
    }

    useEffect(()=>{
        if (isProductUpdated) {
            toast('Product created successfully',{
                type:'success',
                position:toast.POSITION.BOTTOM_CENTER,
                onOpen:()=> dispatch(clearProductUpdated())
            })
            setImages("")
            return;
        }
        if (error) {
            toast(error, {
               position: toast.POSITION.BOTTOM_CENTER,
               type:'error',
               onOpen:()=>{dispatch(clearError())}
             })
             return
        }
        dispatch(getSingleProject(projectId))
    },[isProductUpdated,error,dispatch,projectId])
    useEffect(()=>{
        if (project._id) {
            setCity(project.city);
            setDistrict(project.district);
            setPrice(project.price);
            setSqrt(project.sqrt)
            setImages(project.image)
            setImagesPreview(project.image)
        }
    },[project])
    return(
        <>
        
        <div className="login-container">
      <div className="wrapper">
        <div className="title"><span>Update Project</span></div>
        <form onSubmit={submitHandler}>
          <div className="row">
          <i className="updatePackage">City</i>
            <input type="text" className="updatePackageInput"
            onChange={e=>setCity(e.target.value)}
            value={city}
            />

          </div>
          <div className="row">
          <i className="updatePackage">District</i>
            <input type="text" className="updatePackageInput"
              onChange={e=>setDistrict(e.target.value)}
              placeholder={district}
              value={district}
            />
          </div>
          <div className="row">
          <i className="updatePackage">Price</i>
            <input type="text" className="updatePackageInput"
              onChange={e=>setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div className="row">
          <i className="updatePackage">Sqft</i>
            <input type="text" className="updatePackageInput"
              onChange={e=>setSqrt(e.target.value)}
              value={sqrt}
            />
          </div>
          <div className="row">
          <i className="fa-solid fa-image"></i>
            <input type="file"
            name="project"
              onChange={onImagesChange}
            />
            
                        <img 
                        className="mt-3 mr-2"
                        key={imagesPreview}
                        src={imagesPreview}
                        alt={imagesPreview}
                        width="55px"
                        height="52px"
                        />
          </div>
          <div className="row button">
            <input type="submit"  value="Submit"/>
          </div>
          
        </form>
      </div>
    </div>
        </>
    )
};
