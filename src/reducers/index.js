// index.js

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import Dogreducer from './DogReducer';

const counterApp = combineReducers({
  counterReducer,Dogreducer
})

export default counterApp