import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Products from './Products';
import React from 'react';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Login/>
      <Products/>
    </div>
  );
}

export default App;
