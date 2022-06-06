import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import campaignReducer from "./campaign";
import organizationReducer from "./organization";
import hashtagReducer from "./hashtag";

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }
  return combineReducers({
    campaign: campaignReducer,
    organization: organizationReducer,
    hashtag: hashtagReducer
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production"
});
