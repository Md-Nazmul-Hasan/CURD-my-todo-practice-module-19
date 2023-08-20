import React from 'react'
import './css/Create-from.css'
import { useEffect, useState } from 'react'
import axios  from 'axios'
import {useNavigate,useParams} from "react-router-dom";
import Swal from "sweetalert2"

function CreateForm() {
  let navigate =useNavigate();
  let {id} = useParams();
  let [FormValue,SetFormValue] = useState({Img:"",ProductCode:"",ProductName:"",Qty:"",TotalPrice:"",UnitPrice:""});
  
  

  //Data fecth by id and show form.....
  useEffect(()=>{

    (async ()=>{
       let res=await axios.get("https://crud.teamrabbil.com/api/v1/ReadProductByID/"+id);
       SetFormValue(res.data['data'][0]);
        setIsProduct(true);
    })()

},[])



//Set data state using Form...

  const InputOnChange = (property,value) => {
    SetFormValue({...FormValue,[property]:value});
  }



//conditionally Create and Update when clicked button ...

  const onSubmit = async () => {
    let URL="https://crud.teamrabbil.com/api/v1/CreateProduct" 
      if(id){
        URL="https://crud.teamrabbil.com/api/v1/UpdateProduct/"+id;
        let res= await axios.post(URL, FormValue);
           if(res.status===200){
              Swal.fire("Update sucessfully");
               navigate('/');
            }
      }else{
        let res= await axios.post(URL, FormValue);
        if(res.status===200){
          
          Swal.fire("Create Successfully");
          navigate('/')
        }
      }
   }
     


  return (
    <div className='update-from'>
       
     <div className="table-content">
     <h3 className='text-center mb-5 text-success'>✈Create Data</h3> 
     <div className="row g-3">
       <div className="col-sm-5">
       <label for="exampleInputEmail1" class="form-label"><b>Product Name :</b></label>
          <input value={FormValue.ProductName} onChange={(e)=>{InputOnChange('ProductName',e.target.value)}} type="text" className="form-control"/>

          
       </div>
       <div className="col-sm-4">
       <label for="exampleInputEmail1" class="form-label"><b>Product Code:</b></label>
       <input value={FormValue.ProductCode} name='ProductCode' type="text" className="form-control" onChange={(e)=>{InputOnChange('ProductCode',e.target.value)}}/>
       </div>
       <div className="col-sm">
       <label for="exampleInputEmail1" class="form-label"><b>Image:</b></label>
       <input value={FormValue.Img} name='Img' type="text" className="form-control"  aria-label="Zip" onChange={(e)=>{InputOnChange('Img',e.target.value)}}/>
       </div>
         
      </div>

      <div className="row g-3 mt-2">
       <div className="col-sm-4">
          <label for="exampleInputEmail1" class="form-label"><b>Unit Price:</b></label>
          <input value={FormValue.UnitPrice} name='UnitPrice' type="text" className="form-control" onChange={(e)=>{InputOnChange('UnitPrice',e.target.value)}}/>
       </div>
       <div className="col-sm-4">
       <label for="exampleInputEmail1" class="form-label"><b>Qty:</b></label>
        <input value={FormValue.Qty} name='Qty' type="text" className="form-control"  onChange={(e)=>{InputOnChange('Qty',e.target.value)}}/>
       </div>
       <div className="col-sm-4">
       <label for="exampleInputEmail1" class="form-label"><b>Total Price:</b></label>
       <input value={FormValue.TotalPrice} name='TotalPrice' type="text" className="form-control"  onChange={(e)=>{InputOnChange('TotalPrice',e.target.value)}}/>
       </div>
      </div>
      <button onClick={onSubmit} className='btn btn-success my-3 px-5 py-2'><b>Submit</b></button>
      
     </div>
</div>
  )
}

export default CreateForm