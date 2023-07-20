import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Products from './Products';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProductDetails from './ProductDetails';
import NavBar from './Nav-Bar';

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route index element ={<Login/>}/>
        <Route path='/Login' element ={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/ProductDetails/' element ={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
