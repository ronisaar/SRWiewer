import * as actionType from '../actions/ActionType';
// Reducer
const initialState = {
    url: '',
    loading: false,
    error: false,
  };
  function Dogreducer  (state = initialState, action) {
    switch (action.type) {
      case actionType.REQUESTED_DOG:
        return {
          url: '',
          loading: true,
          error: false,
        };
      case actionType.REQUESTED_DOG_SUCCEEDED:
        return {
          url: action.payload.message,
          loading: false,
          error: false,
        };
      case actionType.REQUESTED_DOG_FAILED:
        return {
          url: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  }
  export default Dogreducer;
  