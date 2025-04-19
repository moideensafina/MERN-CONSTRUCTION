import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError, clearProjectDeleted } from "../../slices/projectSlice";
import {  createNewProject } from "../../actions/projectAction";
import { useEffect, useState } from "react";



export default function CreateProject() {

    const [ city,setCity] = useState("");
    const [ district,setDistrict] = useState("");
    const [ price,setPrice] = useState(0);
    const [ sqrt,setSqrt] = useState(0);
    const [ images,setImages] = useState("");
    const [ imagesPreview,setImagesPreview] = useState("/images/default_avatar.png");
    

    const {loading,isProductCreated,error} = useSelector(state=>state.projectState)

    const navigate = useNavigate()
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
        dispatch(createNewProject(formData))
    }

    useEffect(()=>{
        if (isProductCreated) {
            toast('Product created successfully',{
                type:'success',
                position:toast.POSITION.BOTTOM_CENTER,
                onOpen:()=> dispatch(clearProjectDeleted())
            })
            navigate('/admin/projects')
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
    },[isProductCreated,error,dispatch,navigate])
    return(
        <>
        
        <div className="login-container">
      <div className="wrapper">
        <div className="title"><span>Create Project</span></div>
        <form onSubmit={submitHandler}>
          <div className="row">
          <i className="fa-solid fa-location-arrow"></i>
            <input type="text" placeholder="City" 
            onChange={e=>setCity(e.target.value)}
            value={city}
            />

          </div>
          <div className="row">
          <i className="fa-solid fa-location-dot"></i>
            <input type="text" placeholder="District" 
              onChange={e=>setDistrict(e.target.value)}
              value={district}
            />
          </div>
          <div className="row">
          <i className="fa-solid fa-hand-holding-dollar"></i>
            <input type="text" placeholder="Price" 
              onChange={e=>setPrice(e.target.value)}

            />
          </div>
          <div className="row">
          <i className="fa-solid fa-ruler"></i>
            <input type="text" placeholder="Sqft" 
              onChange={e=>setSqrt(e.target.value)}
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
