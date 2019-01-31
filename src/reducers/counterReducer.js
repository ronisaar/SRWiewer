// counterReducer.js
import * as actionType from '../actions/ActionType';

const initialState = {
  balance: 0
 }

 function counterReducer (state = initialState, action) {
 
  switch (action.type) {
    case actionType.ADD_COUNTER:
    console.log(actionType.ADD_COUNTER);
      return {...state ,balance: state.balance + action.payload};
    case actionType.REMOVE_COUNTER:
      console.log(actionType.REMOVE_COUNTER);
      return {...state ,balance: state.balance - action.payload};
    default:
      return state
  }
}

export default counterReducer;