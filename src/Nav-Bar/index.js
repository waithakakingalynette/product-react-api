import React from 'react';
import'./style.css';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/addproduct">Add products</a>
        </li>
        <li>
          <a href="/productpage"></a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
