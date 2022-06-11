import { useDispatch } from "react-redux";

import AdminBody from "../../components/admin/AdminBody";
import Header from "../../components/common/Header";

import { fetchCampaignList } from "../../states/campaign";
import { fetchOrganizationList } from "../../states/organization";
import { fetchHashTagList } from "../../states/hashtag";
import { useEffect, useState } from "react";

import admin from "../../public/adminInfo";

function Admin() {
  const dispatch = useDispatch();
  const [canView, setCanView] = useState(false);

  useEffect(() => {
    const url = window.location.search;
    const test = url.split("&&");

    const [userName, password] = test.map(item => item.split("=")[1]);

    // 형식 유지 /admin?userName=siyeon&&password=1212123
    if (userName === admin.username && password === admin.password) {
      setCanView(true);
    } else {
      window.location.replace("/");
    }
  }, []);

  Promise.all([
    dispatch(fetchCampaignList()),
    dispatch(fetchOrganizationList()),
    dispatch(fetchHashTagList())
  ]);

  return (
    canView && (
      <>
        <Header />
        <AdminBody />
      </>
    )
  );
}

export default Admin;
