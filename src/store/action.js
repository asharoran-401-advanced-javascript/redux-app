/* eslint-disable strict */
'use strict';
// import React from 'react';
//================================= Initial State for Category & products =============================//

let initialState = {
  selectedCategory : '',
  categories : [
    {name:'clothing' ,displayName: 'summer clothing', description:'nice clothing'},
    {name:'shoe' ,displayName: 'summer shoe', description:'nice shoe'},
    {name:'glasses' ,displayName: 'summer glasses', description:'nice glasses'},
  ],
  products: [
    {categoryAssocition:'zara', name:'clothing',description:'cool clothing',price:100,inventoryCount:4},
    {categoryAssocition:'nike', name:'shoe',description:'cool shoe',price:200,inventoryCount:10},
    {categoryAssocition:'R&P', name:'glasses',description:'cool glasses',price:50,inventoryCount:3},
  ],

};

//=================================== Reducrer =====================================//

export default (state = initialState , action) =>{
  console.log('State' , state);
  let {type , payload} = action;

  switch (type) {
  case 'MAKEREQ':{
    let selectedCategory = payload;
    let categories = state.categories.map(category =>{
      if(category.name === payload){
        return {name : category.name ,
          displayName: category.displayName,
          description: category.description};
      }
      return categories;
    });

    let products = state.products.map( product => {
      if(product.name === payload){
        return{
          categoryAssocition: product.categoryAssocition,
          name: product.name,
          description: product.description,
          price : product.price,
          inventoryCount: product.inventoryCount,
        };
      }
      return product;
    });
    return {categories , products , selectedCategory}; //return object of two of them
  }
  case 'RESET':
    return initialState;
  default:
    return state;
  }
};

//================================= Action Creaters ==============================//

export const makeReq = (name) => { // return action(object of(type and payload))
  return {
    type: 'MAKEREQ',
    payload: name,
  };
};

export const reset = () => {
  return{
    type: 'RESET',
  };
};