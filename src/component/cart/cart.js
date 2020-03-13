/* eslint-disable no-unused-vars */
/* eslint-disable strict */
'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { add , reset} from '../../store/cart-action.js';

const SimpleCart = (props) => {
  return (
    <div>
      <button onClick={() => add(props.products)}>Add to Cart</button>
      <span>cart items:{props.cart.counter}</span>
      <p>{props.product.name}</p>
      <button onClick={() => reset(props.cart)}>delete All</button>

    </div>

  );

};

const mapStateToProps = (state) => ({
  cart : state.cart.productSelected,
  product : state.products,
});

const mapDispatchToProps = {add , reset};

export default connect(mapStateToProps , mapDispatchToProps)(SimpleCart);