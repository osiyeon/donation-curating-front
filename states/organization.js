import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrganizationList = createAsyncThunk(
  "organizationList/fetchOrganizationList",
  async () => {
    const { data } = await axios.get(`/api/v1/organizations`);
    return data;
  }
);

export const organizationSlice = createSlice({
  name: "organization",
  initialState: { loading: false, organizationList: [] },
  reducers: {
    addOrganization: (state, action) => {
      state.organizationList.push(action.payload);
    },
    deleteOrganizationById: (state, action) => {
      const orgId = action.payload;
      const idx = state.organizationList.findIndex(
        item => item.id === parseInt(orgId)
      );
      state.organizationList.splice(idx, 1);
    }
  },
  extraReducers: {
    [fetchOrganizationList.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchOrganizationList.fulfilled]: (state, action) => {
      state.organizationList = [...action.payload];
      state.loading = false;
    }
  }
});

export const { addOrganization, deleteOrganizationById } =
  organizationSlice.actions;
export default organizationSlice.reducer;
