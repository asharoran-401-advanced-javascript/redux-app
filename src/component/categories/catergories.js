/* eslint-disable no-unused-vars */


import React from 'react';
import { connect } from 'react-redux';
import {makeReq , reset} from '../../store/action.js';

const Category = (props) => {
  return(
    <section className="productResult">
      <ul>
        {
          props.productState.map( product => {
            return <li onClick={() => props.makeReq(product.name)} key={product.name}>
              <p>Product Info :</p>
              <span>{product.categoryAssocition}</span>
              <span>name :</span>
              <p> {product.name}</p>
              <span>description :</span>
              <p>{product.description}</p>
              <span>price :</span>
              <p>{product.price}</p>
              <span> inventory Count :</span>
              <p>{product.inventoryCount}</p>
            </li>;
          })

        }
      </ul>
      <div>
        <button onClick={props.reset}>Reset
        </button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  productState : state.action.products,
  categoryState : state.action.categories,
});

const mapDispatchToProps = { makeReq , reset};

export default connect(mapStateToProps , mapDispatchToProps)(Category);