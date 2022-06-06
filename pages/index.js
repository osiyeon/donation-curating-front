import { useDispatch } from "react-redux";
import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
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

import style from "./style.module.css";

function Home() {
  const dispatch = useDispatch();

  Promise.all([
    dispatch(fetchCampaignList()),
    dispatch(fetchOrganizationList()),
    dispatch(fetchHashTagList()),
    dispatch(fetchCampaignHashTagList()),
    dispatch(fetchOrganizationHashTagList())
  ]);

  return (
    <>
      <Header />
      <Card inverse>
        <CardImg alt="Card image cap" src={banner.src} />
      </Card>
      <MainBody />
    </>
  );
}

export default Home;
