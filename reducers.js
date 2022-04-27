import { HYDRATE } from "next-redux-wrapper";
import { bindActionCreators, combineReducers } from "redux";

const initialState = {
  data: {}
};

// COUNTER REDUCER
const campaignReducer = (state = [], action) => {
  switch (action.payload) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "GET_CAMPAIGN_DATA":
      return { ...state, data: { ...action.payload } };
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  campaignReducer
};

export default combineReducers(reducers);
