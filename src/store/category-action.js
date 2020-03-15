/* eslint-disable strict */
'use strict';

//---------------------------- Initial State --------------------//
const initialState = [
  {name:'clothing' ,displayName: 'summer clothing', description:'nice clothing'},
  {name:'shoe' ,displayName: 'summer shoe', description:'nice shoe'},
  {name:'glasses' ,displayName: 'summer glasses', description:'nice glasses'}];

//--------------------------- Reducers ----------------------------//

export default (state = initialState , action) => {

  let {type , payload} = action;

  switch (type) {
  case 'SHOW':{
    console.log(state , 'sdfgh');
    let categories = state.map((catgory , index) => {
      console.log('payload ():' , payload);
      if(catgory.name === payload.name){
        return{
          name : catgory.name,
          displayName : catgory.displayName,
          description : catgory.description,
        };
      }
    });
    return categories;
  }

  case 'RESET':
    return initialState;

  default:
    return state;
  }
};

//------------------- Action Creater (to return action) ---------------------------//

export const showDetails = (name) => {
  return {
    type : 'SHOW',
    payload : name,
  };
};


export const reset = () => {
  return {
    type : 'RESET',
  };
};