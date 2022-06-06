import { useSelector } from "react-redux";
import Router from "next/router";

import SearchBox from "../../components/common/SearchBox";
import OrganizationCard from "../../components/organization/OrganizationCard/OrganizationCard";
import CampainCard from "../../components/campaign/CampainCard";
import HashTagWrapper from "../../components/common/HashTagWrapper";
import BodyFrame from "../../components/common/BodyFrame";

import style from "./MainBody.module.css";

function MainBody() {
  const campaignList = useSelector(state => state.campaign.campaignList);
  const organizationList = useSelector(
    state => state.organization.organizationList
  );
  const hashTagList = useSelector(state => state.hashtag.hashtagList);
  const loading = useSelector(state => state.organization.loading);

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
    !loading && (
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
            <CampainCard
              campaign={campaignList[0]}
              campaignList={campaignList}
            />
            <CampainCard
              campaign={campaignList[1]}
              campaignList={campaignList}
            />
          </div>
        </div>
      </BodyFrame>
    )
  );
}

export default MainBody;
