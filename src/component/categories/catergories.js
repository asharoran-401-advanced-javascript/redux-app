/* eslint-disable no-unused-vars */


import React from 'react';
import { connect } from 'react-redux';
// import {makeReq , reset} from '../../store/action.js';
import {showDetails , reset} from '../../store/category-action.js';

const Category = (props) => {
  return(
    <div>
      <div>
        {props.categoryState.map(category => {
          return (
            <div onClick={() => props.showDetails(category.name)} key={category.name}>
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
  productState : state.products,
  categoryState : state.categories,
});

const mapDispatchToProps = { showDetails , reset};

export default connect(mapStateToProps , mapDispatchToProps)(Category);