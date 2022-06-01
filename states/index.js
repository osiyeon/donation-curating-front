import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";
import axios from "axios";

export const campaignListState = atom({
  key: "campaignListState",
  default: []
});

export const organizationList = atom({
  key: "organizationList",
  default: []
});

export const getCampaignListSelector = selector({
  key: "campaign/get",
  get: async ({ get }) => {
    try {
      const { data: campaignList } = await axios.get(`/api/v1/campaigns/`);
      console.log("get campaign");
      return campaignList;
    } catch (err) {
      console.log("error: ", err);
      throw err;
    }
  },
  set: ({ set }, newValue) => {
    console.log({ newValue });
    set(campaignListState, newValue);
  }
});

export const getOrganizationListSelector = selector({
  key: "organization/get",
  get: async ({ get }) => {
    try {
      console.log("get");
      const { data: organizationList } = await axios.get(
        "/api/v1/organizations"
      );
      return organizationList;
    } catch (err) {
      console.log("error: ", err);
      throw err;
    }
  },
  set: ({ set }, newValue) => {
    console.log("Set");
    set(organizationList, newValue);
  }
});
