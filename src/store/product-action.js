

// import action from "./action";

const initialState = [
  {categoryAssocition:'zara', name:'clothing',description:'cool clothing',price:100,inventoryCount:4},
  {categoryAssocition:'nike', name:'shoe',description:'cool shoe',price:200,inventoryCount:10},
  {categoryAssocition:'R&P', name:'glasses',description:'cool glasses',price:50,inventoryCount:3},
];

export default (state = initialState , action) =>{
  let {type , payload} = action;

  switch (type) {
  case 'SHOW':{
    console.log('|||||||' , state);
    return state.map( product => {
      if(product.name === payload.name){
        return {
          categoryAssocition : product.categoryAssocition,
          name : product.name,
          description : product.description,
          price : product.price,
          inventoryCount: product.inventoryCount,
        };
      }
    });
    // return products;
  }
  case 'RESET':
    return initialState;

  default:
    return state;
  }

};

export const showDetails = (name) => {
  return {
    type : 'SHOW',
    payload : name,
  };
};

export const reset = () => {
  return ({
    type : 'RESET',
  });
};