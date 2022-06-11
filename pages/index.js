import { useDispatch } from "react-redux";
import { Card, CardImg } from "reactstrap";
import Header from "../components/common/Header";
import MainBody from "../containers/MainBody/MainBody";
import banner from "../public/images/banner.svg";

import { fetchCampaignList } from "../states/campaign";
import { fetchOrganizationList } from "../states/organization";
import {
  fetchHashTagList,
  fetchCampaignHashTagList,
  fetchOrganizationHashTagList
} from "../states/hashtag";

import { useEffect, useState } from "react";

function Home() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      dispatch(fetchCampaignList()),
      dispatch(fetchOrganizationList()),
      dispatch(fetchHashTagList()),
      dispatch(fetchCampaignHashTagList()),
      dispatch(fetchOrganizationHashTagList())
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    !loading && (
      <>
        <Header />
        <Card inverse>
          <CardImg alt="Card image cap" src={banner.src} />
        </Card>
        <MainBody />
      </>
    )
  );
}

export default Home;
