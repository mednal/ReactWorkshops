import logo from './logo.svg';
import React, { Suspense } from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';

import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';

//import { render } from '@testing-library/react';
import Products from './Components/Products';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
function App()  {
  return (
<>
<Header></Header>
<AppFrame className="App" >
<BrowserRouter basename="/" >
<Routes>
<Route
path="/"
exact
render={(props)=> <Home {...props}/>}
></Route>
<Route
path="/products"
render={(props)=> <Products {...props} />}
></Route>

<Route
path="/product/:name"
exact
render={(props)=><ProductDetails {...props}/>}
></Route>
<Route exact render={() => <p>Page not found!</p>}></Route>
</Routes>
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
