import axios from "axios";

export const getCampaigns = async () => {
  const { data } = await axios.get("/api/v1/campaigns/");
  return {
    type: "GET_CAMPAIGN_DATA",
    payload: data
  };
};
