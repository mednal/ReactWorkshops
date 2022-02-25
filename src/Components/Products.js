import React from "react";
import styled from "styled-components";
import  data from "../data/data.json";
import Product from "./Product";
//import  useApi from "../Hooks/useApi"
import {Link} from "react-router-dom";


const ProductsWrapper =styled.div`
text-align:center;
display:flex;
`

  export default function Products(){
    //const[products, err]= useApi("products");

return(

              
    <div>
      
    <ProductsWrapper>
      
        {data.map((product,index) =>(<Product product={product} key={index}></Product>))}
        
    </ProductsWrapper>
  
        
 </div>



);


}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

{/* <ProductsWrapper>
{
data.map((product,index)=>(
<Product  product={product} key ={index}  ></Product>

))

}
</ProductsWrapper> */}