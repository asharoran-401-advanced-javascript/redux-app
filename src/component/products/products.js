/* eslint-disable no-unused-vars */
import React from 'react';
import { connect} from 'react-redux';
// import { makeReq , reset} from '../../store/action.js';
import {showDetails , reset} from '../../store/product-action.js';
import {add } from '../../store/cart-action.js';

const Product = (props) => {
  return (
    <div>
      {
        props.productState.map( product => {
          return(
            <div>
              <p>{product.categoryAssocition}</p>
              <span>name :</span>
              <p> {product.name}</p>
              <span>description :</span>
              <p>{product.description}</p>
              <span>price :</span>
              <p>{product.price}</p>
              <span> inventory Count :</span>
              <p>{product.inventoryCount}</p>
              <button onClick={() => add(product)}>Add to Cart</button>
            </div>
          );
        })
      }


    </div>
  );
};

const mapStateToProps = state => ({
  categoryState : state.categories,
  productState : state.products,
  cart : state.productSelected,
});

const mapDispatchToProps =  { showDetails , add , reset};

export default connect(mapStateToProps , mapDispatchToProps)(Product);