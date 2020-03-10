/* eslint-disable no-unused-vars */
/* eslint-disable strict */
'use strict';
import React from 'react';
import Header from './component/header/header.js';
import Footer from './component/footer/footer.js';
import Category from './component/categories/catergories.js';
import Product from './component/products/products.js';

export default(props)=>{ //this the App compnent
  return(
    <>
      <Header/>
      <Category/>
      <Product/>
      <Footer/>
    </>
  );
};
