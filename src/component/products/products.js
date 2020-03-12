/* eslint-disable no-unused-vars */
import React from 'react';
import { connect} from 'react-redux';
import { makeReq , reset} from '../../store/action.js';

const Product = (props) => {
  return (
  // <div>
  //   {
  //     props.productAction.products.map( product => {
  //       return(
  //         <div>
  //           <p>{product.categoryAssocition}</p>
  //           <span>name :</span>
  //           <p> {product.name}</p>
  //           <span>description :</span>
  //           <p>{product.description}</p>
  //           <span>price :</span>
  //           <p>{product.price}</p>
  //           <span> inventory Count :</span>
  //           <p>{product.inventoryCount}</p>
  //         </div>
  //       );
  //     })
  //   }


    <div>
      <ul className="CategoryList">
        {props.productAction.map(category => {
          return (
            <li onClick={() => props.makeReq(category.name)} key={category.name}>
              <span>{category.name}</span>
              <span>displayName :</span>
              <span> {category.displayName}</span>
              <span>description :</span>
              <span>{category.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
    // </div>
  );
};

const mapStateToProps = state => ({
  productAction : state.action.categories,
});

const mapDispatchToProps =  { makeReq , reset};

export default connect(mapStateToProps , mapDispatchToProps)(Product);