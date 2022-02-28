import React,{ useState} from "react";
import { queryApi } from "../utils/queryApi";
import  useApi  from "../Hooks/useApi";
import styled from "styled-components";

export default function AddProduct(){


const [product , setproduit] = useState({
        title:"",
        description:"",
        image:""

        
    });
  
    
       
    const handletitleChange =(e)=>{
      setproduit({...product,title: e.target.value});
    }
  const handlepriceChange =(e)=>{
      setproduit({...product,price: e.target.value});
    }
  const handledescriptionChange =(e)=>{
      setproduit({...product,description: e.target.value});
    }
    const handleImageChange= (e)=> {
      setproduit({...product,image: e.target.files[0]});
    }

     const handleSubmit=(event)=> {
      alert('A form was submitted with Title :"' + product.title+
      '" ,description :"'+ product.description +'" and price :"' + product.price + '"');
      event.preventDefault();
    queryApi("product",product,"POST",true);
      }
      return  <form onSubmit={(e) => {handleSubmit(e)}}>

      <div >
        <h1>ADD NEW PRODUCT</h1>  
        <label >title :</label>  
        <input type="text" name="TITLE" required onChange={(event) => {handletitleChange(event)}} />
{/*         
        <label >Price :</label> 
        <input type="text" name="Price"  required onChange={(event) => {handlePriceChange(event)}}/> */}
        <label >description:</label>
        <input type="text" name="description" required onChange={(event) => {handledescriptionChange(event)}}/>
        <label >price:</label>
        <input type="text" name="description" required onChange={(event) => {handlepriceChange(event)}}/>
        <input type="file" name="IMAGE" required onChange={(event) => {handleImageChange(event)}}/>
      
      
        <input type="submit" value="Envoyer"/>
      </div>
      </form>
      

}