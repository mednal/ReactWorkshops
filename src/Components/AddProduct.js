import React,{ useState} from "react";
import { queryApi } from "../utils/queryApi";
import  useApi  from "../Hooks/useApi";
import styled from "styled-components";

export default function AddProduct(){


const [product , setproduit] = useState({
        title:"",
        description:"",
        image:"",
        price:"",
        likes:"0"
        
    });
  
    
     const handlenameChange =(event)=> {
        setproduit({title: event.target.value});
      }
       const handledescriptionChange =(event)=> {
        setproduit({description: event.target.value});
      }
       const handlePriceChange =(event)=> {
        setproduit({price: event.target.value});
      } 
       const handleImageChange =(event)=> {
        setproduit({image: event.target.value});
      }
       

     const handleSubmit=(event)=> {
        alert('A name was submitted: ' + product.value);
        event.preventDefault();
      }
      return <form onSubmit={(event) => {handleSubmit(event)}}>

      <div >
        <h1>ADD NEW PRODUCT</h1>  
        <label >title :</label>  
        <input type="text" name="TITLE" required onChange={(event) => {handlenameChange(event)}} />
        
        <label >description :</label> 
        <input type="text" name="DESCRIPTION"  required onChange={(event) => {handlePriceChange(event)}}/>
        <input type="text" name="PRICE" required onChange={(event) => {handledescriptionChange(event)}}/>
        <input type="file" name="IMAGE" required onChange={(event) => {handleImageChange(event)}}/>
      
      
        <input type="submit" value="Envoyer" />
      </div>
      </form>;

}