import {
    FETCH_HISTORY,
    CREATE_HISTORY
  } from "../constants/actionTypes";
  
  import * as api from "../api";

  export const getHistory = () => async (dispatch) => {
    try {
      const { data } = await api.fetchHistory();
      dispatch({ type: FETCH_HISTORY, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createHistory = (history) => async (dispatch) => {
    try {
      const { data } = await api.createHistory(history);
      dispatch({ type: CREATE_HISTORY, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  