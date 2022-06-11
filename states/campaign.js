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
  reducers: {
    addCampaign: (state, action) => {
      state.campaignList.push(action.payload);
    },
    deleteCampaignById: (state, action) => {
      const campaignId = action.payload;
      const idx = state.campaignList.findIndex(
        item => item.id === parseInt(campaignId)
      );
      state.campaignList.splice(idx, 1);
    }
  },
  extraReducers: {
    [fetchCampaignList.fulfilled]: (state, action) => {
      state.campaignList = [...action.payload];
    }
  }
});

export const { addCampaign, deleteCampaignById } = campaignSlice.actions;
export default campaignSlice.reducer;
