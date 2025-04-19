import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector} from  'react-redux'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deleteProduct, getProject } from '../../actions/projectAction';
import { toast } from 'react-toastify';
import { clearProjectDeleted } from '../../slices/projectSlice';
import {MDBDataTable} from 'mdbreact';


export default function ProjectList() {

    const {projects,isProjectDeleted,error} =useSelector((state)=>state.projectState)
    const dispatch= useDispatch()

    const setProducts = () =>{
        const data={
            columns:[
                {
                    label:'ID',
                    field:'id',
                    sort:'asc'
                },
                {
                    label:'City',
                    field:'city',
                    sort:'asc'
                },
                {
                    label:'Price',
                    field:'price',
                    sort:'asc'
                },
                {
                    label:'Sqrt',
                    field:'sqrt',
                    sort:'asc'
                },
                {
                    label:'Action',
                    field:'action',
                    sort:'asc'
                }
            ],
            rows:[]
        }
        
        projects && projects.forEach(pro => {
            data.rows.push({
                id:pro._id,
                city:pro.city,
                price: `$${pro.price}`,
                sqrt:pro.sqrt,
                action:(
                    <Fragment>
                        <Link to={`/admin/project/${pro._id}`} >
                            <Button className="btn"><i className='fa fa-pencil'></i></Button>  </Link>

                        <Button
                        onClick={e=> deleteHandler(e,pro._id)}
                        className='btn btn-danger m-2'>
                            <i  className='fa fa-trash'></i>
                        </Button>
                        
                    </Fragment>
                )
            })
        });
        return data;
    }

    const deleteHandler=(e,id)=>{
        e.target.disabled =true;
        dispatch(deleteProduct(id))
        
    }

    useEffect(()=>{
        if (isProjectDeleted) {
            toast('Product deleted successfully',{
                type:'success',
                position:toast.POSITION.BOTTOM_CENTER,
                onOpen:()=> dispatch(clearProjectDeleted())
            })
            return;
        }
        dispatch(getProject)
    },[dispatch,error,isProjectDeleted])
    
    return(
        
        <div className="productList">
            <h2 className="project">Product List</h2>
          <Fragment>
                <MDBDataTable
                data={setProducts()}
                bordered
                striped
                hover
                className='px-3'
                scrollX             
                />
          </Fragment>
        
    </div>
    )
};
