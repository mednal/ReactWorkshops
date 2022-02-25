import styled from "styled-components";
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;

`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #DB7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation:  clignote 2s linear infinite;
  @keyframes clignote {  
  50% { opacity: 0.5; }
}
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color:white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;

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
const UButton = styled(Button)`
color: blue;
border-color: blue;
`;

export default function Product(props) {
/* useEffect(()=>{
  console.log("")
},[]) */

    const [product,setproduct] = useState(props.product);
    const [like,setLike] = useState(0);
    var addLikes = () => {
      setLike(like + 5)
    }
 /*    const  addLikes = () => {
        setLike({
          ...product,
          likes:Number(product.likes)+1,
        });
        setLike((u)=>u+1);
    }; */
 /*    useEffect(() => {
    }, []); */

    /*  const detail = () => {
          return <Redirect to="/ProductDetail"/>
      }*/

      
        return(
          like >= 4 ?(
            <ProductFrameBest>
            <ProductImageWrapperBest>
                <ProductImageBest src={product.img}/>
            </ProductImageWrapperBest>
            <ProductInfoWrapperBest> <span>
        <a href={"/ProductDetails/"+ product.name}
>{product.name}</a>        </span></ProductInfoWrapperBest>
            <ProductInfoWrapperBest>{product.price}</ProductInfoWrapperBest>
            <ProductInfoWrapperBest>Likes: {like} </ProductInfoWrapperBest>
            <Button onClick={addLikes}>Like</Button>
            <UButton onClick={addLikes}>Update</UButton>
        </ProductFrameBest>)
    
    : ( 
    

      <ProductFrame>

      <ProductImageWrapper>
          <ProductImage src={product.img} />
      </ProductImageWrapper>
      <ProductInfoWrapper>
         <span>
        <a href={"/ProductDetails/"+product.name}
>{product.name}</a>        </span> </ProductInfoWrapper>
      <ProductInfoWrapper>{product.price} </ProductInfoWrapper>
      <ProductInfoWrapper>Likes: {like} </ProductInfoWrapper>
      <Button onClick={addLikes}>Like</Button>
      <UButton onClick={addLikes}>Update</UButton>
  </ProductFrame>
    )
    );

}


