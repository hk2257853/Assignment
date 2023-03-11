import {
    FETCH_HISTORY,
    CREATE_HISTORY
  } from "../constants/actionTypes";
  
  export default (history = [], action) => {
    switch (action.type) {
      case FETCH_HISTORY:
        return action.payload;
      case CREATE_HISTORY:
        return [...history, action.payload];
  
      default:
        return history;
    }
  };
  