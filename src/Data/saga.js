import * as actionType from '../actions/ActionType';
import { takeEvery, takeLatest,put,call} from 'redux-saga/effects'
//import {connectToDB} from '../Data/dataHelper'

function* AddCounter(action) { 
  yield console.log(action.type);

  return yield put({
    type: actionType.ADD_COUNTER,
    payload: action.payload,
  });
  
 }


function* RemoveCounter(action) { 
  yield console.log(action.type);
  return yield put({
    type: actionType.REMOVE_COUNTER,
    payload: action.payload,
  });
 }

 function* fetchDogAsync() {
  try {
    yield put({
      type: actionType.REQUESTED_DOG,
      payload: '',
    });
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put({
      type: actionType.REQUESTED_DOG_SUCCEEDED,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: actionType.REQUESTED_DOG_FAILED,
      payload: '',
    });
  }
}

 

// use them in parallel
export default function* rootSaga() {
  yield takeEvery(actionType.ADD_COUNTER_REQUEST, AddCounter)
  yield takeLatest(actionType.REMOVE_COUNTER_REQUEST, RemoveCounter)
  yield takeEvery(actionType.FETCHED_DOG, fetchDogAsync);
}



