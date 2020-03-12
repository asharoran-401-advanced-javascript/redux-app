/* eslint-disable no-unused-vars */


import React from 'react';
import { connect } from 'react-redux';
import {makeReq , reset} from '../../store/action.js';

const Category = (props) => {
  return(
    <div>
      <div>
        {props.categoryState.map(category => {
          return (
            <div onClick={() => props.makeReq(category.name)} key={category.name}>
              <p>{category.name}</p>
              <span>displayName :</span>
              <p> {category.displayName}</p>
              <span>description :</span>
              <p>{category.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={props.reset}>Reset
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productState : state.action.products,
  categoryState : state.action.categories,
});

const mapDispatchToProps = { makeReq , reset};

export default connect(mapStateToProps , mapDispatchToProps)(Category);