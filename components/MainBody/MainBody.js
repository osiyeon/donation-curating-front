import { Button, Row } from "reactstrap";
import { useSelector } from "react-redux";
import SearchBox from "../common/SearchBox";
import OrganizationCard from "../organization/OrganizationCard/OrganizationCard";
import CampainCard from "../campaign/CampainCard";
import HashTagWrapper from "../common/HashTagWrapper";

import style from "./MainBody.module.css";
import BodyFrame from "../common/BodyFrame";
import axios from "axios";
import { useEffect, useState } from "react";
import Router from "next/router";

function MainBody({ campaignList, organizationList }) {
  const [hashTagList, setHashTagList] = useState([]);
  // const campaignList = useSelector(state => state.campaignReducer);

  useEffect(async () => {
    const { data: allHashTags } = await axios.get(`/api/v1/hashtags`);
    setHashTagList(allHashTags);
  }, []);

  const onClickHandler = e => {
    if (e.target.id === "campaign") {
      Router.push({
        pathname: "/campaign"
      });
    }
    if (e.target.id === "organization") {
      Router.push({
        pathname: "/organization"
      });
    }
  };

  return (
    <BodyFrame>
      <div className={style.MainBody}>
        <SearchBox />
        <HashTagWrapper hashTagList={hashTagList} />
        <div className={style.MainBody__title}>
          <div className={style.MainBody__title_text}>기부단체</div>
          <div
            onClick={onClickHandler}
            id="organization"
            className={style.MainBody__title_more}
          >
            더보기
          </div>
        </div>
        <div className={style.MainBody__title_divider}></div>
        <OrganizationCard
          organization={organizationList[0]}
          campaignList={campaignList}
        />
        <OrganizationCard
          organization={organizationList[1]}
          campaignList={campaignList}
        />
        <div className={style.MainBody__title}>
          <div className={style.MainBody__title_text}>캠페인</div>
          <div
            className={style.MainBody__title_more}
            onClick={onClickHandler}
            id="campaign"
          >
            더보기
          </div>
        </div>
        <div className={style.MainBody__title_divider}></div>
        <div className={style.MainBody__campaigns}>
          <CampainCard campaign={campaignList[0]} campaignList={campaignList} />
          <CampainCard campaign={campaignList[1]} campaignList={campaignList} />
        </div>
      </div>
    </BodyFrame>
  );
}

export default MainBody;
