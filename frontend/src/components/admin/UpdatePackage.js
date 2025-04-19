import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePackage } from "../../actions/projectAction";
import { clearPackageUpdated } from "../../slices/packageSlice";
import { clearError } from "../../slices/projectSlice";
import { toast } from "react-toastify";

export default function UpdatePackage() {
    
    const [ budget,setBudget] = useState(0);
    const [ standard,setStandard] = useState(0);
    const [ premium,setPremium] = useState(0);
    const [ luxury,setLuxury] = useState(0);
    const {id:packageId} = useParams();

    const {loading,packages,isPackageUpdated,error} = useSelector(state=>state.packageState)


    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault();
              
        dispatch(updatePackage(packageId,budget,standard,premium,luxury))
    }

    useEffect(()=>{
        if (isPackageUpdated) {
            toast('Product created successfully',{
                type:'success',
                position:toast.POSITION.BOTTOM_CENTER,
                onOpen:()=> dispatch(clearPackageUpdated())
            })
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
    },[isPackageUpdated,error,dispatch])
    useEffect(()=>{
        if (packages) {
            setBudget(packages.budget);
            setStandard(packages.standard);
            setPremium(packages.premium);
            setLuxury(packages.luxury)
        }
    },[packages])
    return(
        <>
        
        <div className="login-container">
      <div className="wrapper">
        <div className="title"><span>Update Package</span></div>
        <form onSubmit={submitHandler}>
          <div className="row">
          <i className="updatePackage">Budget</i>
            <input type="text" className="updatePackageInput"
            onChange={e=>setBudget(e.target.value)}
            value={budget}
            />

          </div>
          <div className="row">
          <i className="updatePackage">Standard</i>
            <input type="text" className="updatePackageInput"
              onChange={e=>setStandard(e.target.value)}
              value={standard}
            />
          </div>
          <div className="row">
          <i className="updatePackage">Premium</i>
            <input type="text" className="updatePackageInput"
              onChange={e=>setPremium(e.target.value)}
              value={premium}
            />
          </div>
          <div className="row">
          <i className="updatePackage">Luxury</i>
            <input type="text" className="updatePackageInput"
              onChange={e=>setLuxury(e.target.value)}
              value={luxury}
            />
          </div>          
          <div className="row button">
            <input type="submit"  value="Submit"/>
          </div>
          <div className="signup-link">Admin Only Login</div>
        </form>
      </div>
    </div>
        </>
    )

};
