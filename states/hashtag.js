import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHashTagList = createAsyncThunk(
  "hashtag/fetchHashTagList",
  async () => {
    const { data } = await axios.get(`/api/v1/hashtags`);
    return data;
  }
);

export const fetchCampaignHashTagList = createAsyncThunk(
  "hashtag/fetchCampaignHashTagList",
  async () => {
    const { data } = await axios.get(`/api/v1/hashtags/campaign`);
    return data;
  }
);

export const fetchOrganizationHashTagList = createAsyncThunk(
  "hashtag/fetchOrganizationHashTagList",
  async () => {
    const { data } = await axios.get(`/api/v1/hashtags/organization`);
    return data;
  }
);

export const hashtagSlice = createSlice({
  name: "hashtag",
  initialState: {
    hashtagList: [],
    campaginHashtagList: [],
    organizationHashtagList: []
  },
  reducers: {},
  extraReducers: {
    [fetchHashTagList.fulfilled]: (state, action) => {
      state.hashtagList = [...action.payload];
    },
    [fetchCampaignHashTagList.fulfilled]: (state, action) => {
      state.campaginHashtagList = [...action.payload];
    },
    [fetchOrganizationHashTagList.fulfilled]: (state, action) => {
      state.organizationHashtagList = [...action.payload];
    }
  }
});

export default hashtagSlice.reducer;
