import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampaignList = createAsyncThunk(
  "campaign/fetchCampaignList",
  async () => {
    const { data } = await axios.get(`/api/v1/campaigns`);
    return data;
  }
);

export const campaignSlice = createSlice({
  name: "campaign",
  initialState: { campaignList: [] },
  reducers: {},
  extraReducers: {
    [fetchCampaignList.fulfilled]: (state, action) => {
      state.campaignList = [...action.payload];
    }
  }
});

export default campaignSlice.reducer;
