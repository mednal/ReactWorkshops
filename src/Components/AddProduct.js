import React,{ useState} from "react";

export default function AddProduct(){


const [product , setproduit] = useState({
        title:"",
        description:"",
        image:"",
        price:"",
        likes:"0"
        
    });

    
     const handleChange =(event)=> {
        this.setState({value: event.target.value});
      }

     const handleSubmit=(event)=> {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      return <form onSubmit={(e) => {handleSubmit(e)}}>

      <div >
        <h1>ADD NEW PRODUCT</h1>  
        <label >title :</label>  
        <input type="text" name="TITLE" required onChange={(e) => {handleChange(e)}} />
        
        <label >description :</label> 
        <input type="text" name="DESCRIPTION"  required onChange={(e) => {handleChange(e)}}/>
        <input type="text" name="PRICE" required onChange={(e) => {handleChange(e)}}/>
        <input type="file" name="IMAGE" required onChange={(e) => {handleChange(e)}}/>
      
      
      <input type="submit" value="Envoyer" />
      </div>
      </form>;

}