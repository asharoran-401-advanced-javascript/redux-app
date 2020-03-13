/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';
import React from 'react';
import cart from '../../store/cart-action.js';

function Header(props){
  return(
    <header>
      <h1>
          E-Commerce Application (categories-products)
      </h1>
      <h3>Cart:</h3>
    </header>
  );
}

export default Header;