import logo from './logo.svg';
import React, { lazy,Suspense } from 'react';
import { BrowserRouter ,Route,Routes, useParams} from 'react-router-dom';

import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import AddProduct from './Components/AddProduct';

//import { render } from '@testing-library/react';
const Home = React.lazy(() => import("./Components/Home"));
const Products = React.lazy(() => import("./Components/Products"));
const ProductDetails = React.lazy(() => import("./Components/ProductDetails"));

               
function App()  {
  
  return (
<>
<Header></Header>
<AppFrame className="App" >
<BrowserRouter basename="/" >
<Suspense fallback={<div>Loading ... </div>}>
<Routes>

<Route path="/" element={<Home />} />
<Route path="/products" element={<Products  />} />
<Route path="/ProductDetails/:name" element={<ProductDetails  />} />
<Route path="/addproduct" element={<AddProduct  />} />


<Route exact render={() => <p>Page not found!</p>}></Route>
</Routes>
</Suspense>
</BrowserRouter>
</AppFrame>
</>

);
}
const AppFrame = styled.div`
text-align: center;
display: flex;
`;
export default App;
