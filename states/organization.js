import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrganizationList = createAsyncThunk(
  "organizationList/fetchOrganizationList",
  async () => {
    const { data } = await axios.get(`/api/v1/organizations`);
    console.log("test");
    return data;
  }
);

export const organizationSlice = createSlice({
  name: "organization",
  initialState: { loading: false, organizationList: [] },
  reducers: {},
  extraReducers: {
    [fetchOrganizationList.pending]: (state, action) => {
      console.log("pending");
      state.loading = true;
    },
    [fetchOrganizationList.fulfilled]: (state, action) => {
      state.organizationList = [...action.payload];
      state.loading = false;
    }
  }
});

export default organizationSlice.reducer;
