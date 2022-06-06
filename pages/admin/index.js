import { useDispatch } from "react-redux";
import AdminBody from "../../components/admin/AdminBody";

import Header from "../../components/common/Header";

import { fetchCampaignList } from "../../states/campaign";
import { fetchOrganizationList } from "../../states/organization";
import { fetchHashTagList } from "../../states/hashtag";

function Admin() {
  const dispatch = useDispatch();

  Promise.all([
    dispatch(fetchCampaignList()),
    dispatch(fetchOrganizationList()),
    dispatch(fetchHashTagList())
  ]);

  return (
    <>
      <Header />
      <AdminBody />
    </>
  );
}

export default Admin;
