import { useEffect, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable
} from "recoil";

import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import Header from "../components/common/Header";
import MainBody from "../components/MainBody/MainBody";
import banner from "../public/images/banner.svg";
import {
  getCampaignListSelector,
  getOrganizationListSelector,
  campaignListState
} from "../states";

import style from "./style.module.css";

function Home() {
  const campaignListLoadable = useRecoilValueLoadable(getCampaignListSelector);
  const organizationListLoadable = useRecoilValueLoadable(
    getOrganizationListSelector
  );

  return (
    <>
      <Header />
      <Card inverse>
        <CardImg alt="Card image cap" src={banner.src} />
      </Card>
      {campaignListLoadable.state === "hasValue" &&
        organizationListLoadable.state === "hasValue" && (
          <MainBody
            campaignList={campaignListLoadable.contents}
            organizationList={organizationListLoadable.contents}
          />
        )}
      {(campaignListLoadable.state === "loading" ||
        organizationListLoadable.state === "loading") && <div>Loading...</div>}
    </>
  );
}

export default Home;
