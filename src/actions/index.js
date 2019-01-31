// index.js

import * as actionType from './ActionType';

export const addCounter = (p) => ({
  type: actionType.ADD_COUNTER,
  payload: p
});

export const removeCounter = (p) => ({
  type: actionType.REMOVE_COUNTER,
  payload: p
});

export const addCounterRequest = (p) => ({
  type: actionType.ADD_COUNTER_REQUEST,
  payload: p
});

export const removeCounterRequest = (p) => ({
  type: actionType.REMOVE_COUNTER_REQUEST,
  payload: p
});


// Action Creators
export const requestDog = () => {
  return { type: actionType.REQUESTED_DOG }
};

export const requestDogSuccess = (data) => {
  return { type: actionType.REQUESTED_DOG_SUCCEEDED, url: data.message }
};

export const requestDogError = () => {
  return { type: actionType.REQUESTED_DOG_FAILED }
};

export const fetchDog = () => {
  return { type: actionType.FETCHED_DOG }
};
