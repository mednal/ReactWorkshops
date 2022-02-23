import styled from "styled-components";
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

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
  animation: clignote 2s linear infinite;
  @keyframes clignote {
    50% {
      opacity: 0.5;
    }
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
  color: white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;

  & > span {
    text-align: center;
  }
`;





const UButton = styled(Button)`
color: blue;
border-color: blue;
`;

export default function Product(props) {
useEffect(()=>{
  console.log("")
},[])

    const [product, setProduct] = useState(props.product);
    const [like, setLike] = useState(0);

    const  addLikes = () => {
        setLike({
          ...product,
          likes:Number(product.likes)+1,
        });
        setLike((u)=>u+1);
    };
 /*    useEffect(() => {
    }, []); */

    /*  const detail = () => {
          return <Redirect to="/ProductDetail"/>
      }*/

      if (product.likes > 4){
        return( <ProductFrameBest>
            <ProductImageWrapperBest>
                <ProductImageBest src={product.image} />
            </ProductImageWrapperBest>
            <ProductInfoWrapperBest><Link to={`/ProductDetails/${product._id}`}>{product.title}</Link></ProductInfoWrapperBest>
            <ProductInfoWrapperBest>{product.price}</ProductInfoWrapperBest>
            <ProductInfoWrapperBest>Likes: {product.likes} </ProductInfoWrapperBest>
            <Button onClick={addLikes}>Like</Button>
            <UButton onClick={addLikes}>Update</UButton>
        </ProductFrameBest>)
    }
    else
    return (

        <ProductFrame>

            <ProductImageWrapper>
                <ProductImage src={product.image} />
            </ProductImageWrapper>
            <ProductInfoWrapper> <Link to={`/DetailProd/${product._id}`}>{product.title}</Link> </ProductInfoWrapper>
            <ProductInfoWrapper>{product.price} </ProductInfoWrapper>
            <ProductInfoWrapper>Likes: {product.likes} </ProductInfoWrapper>
            <Button onClick={addLikes}>Like</Button>
            {/* <UButton onClick={addLikes}>Update</UButton> */}
        </ProductFrame>
    );

}


