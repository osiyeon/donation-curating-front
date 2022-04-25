import { Button, Row } from "reactstrap";
import SearchBox from "../common/SearchBox";
import DonationOrgCard from "../Organization/DonationOrgCard/DonationOrgCard";
import CampainCard from "../campaign/CampainCard";
import HashTagWrapper from "../common/HashTagWrapper";

import style from "./MainBody.module.css";
import BodyFrame from "../common/BodyFrame";
import axios from "axios";
import { useEffect, useState } from "react";
import Router from "next/router";

function MainBody({ campaignList, organizationList }) {
  const [hashTagList, setHashTagList] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(`/api/v1/hashtag`);
    setHashTagList(data);
  }, []);

  const onClickHandler = e => {
    console.log("e.id: ", e.target.id);
    if (e.target.id === "더보기") {
      Router.push({
        pathname: "/campaign"
      });
    }
  };

  return (
    <BodyFrame>
      <div className={style.MainBody}>
        <SearchBox />
        <HashTagWrapper hashTagList={hashTagList} />
        <div className={style.MainBody__title}>
          <h3>기부단체</h3>
          <div onClick={onClickHandler} id="더보기">
            더보기
          </div>
        </div>
        <DonationOrgCard organization={organizationList[0]} />
        <DonationOrgCard organization={organizationList[1]} />
        <div className={style.MainBody__title}>
          <h3>캠페인</h3>
          <div>더보기</div>
        </div>
        <Row>
          <CampainCard campaign={campaignList[0]} />
          <CampainCard campaign={campaignList[1]} />
        </Row>
      </div>
    </BodyFrame>
  );
}

export default MainBody;
