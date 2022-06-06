import { useState } from "react";
import { useSelector } from "react-redux";

import {
  NavLink,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import classNames from "classnames";

import BodyFrame from "../../../components/common/BodyFrame";
import CampainCard from "../../../components/campaign/CampainCard";
import HashTagWrapper from "../../../components/common/HashTagWrapper";

import CampaignCard from "../../../components/campaign/CampainCard";

import styles from "./CampaignBody.module.css";
import style from "../../../components/search/SearchBody/SearchBody.module.css";

function CampaignBody() {
  const [activeTab, setActiveTab] = useState("div");
  const campaignList = useSelector(state => state.campaign.campaignList);
  const campaignHashTag = useSelector(state => state.hashtag.hashtagList);

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const givingCampainList = campaignList?.filter(
    list => list.category === "GIVING"
  );

  const sharingCampainList = campaignList?.filter(
    list => list.category === "SHARING"
  );

  return (
    <BodyFrame>
      <div className={style.SearchBody__breadcrumb}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>캠페인</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h3 className={styles.CampaignBody__title}>캠페인</h3>
      <HashTagWrapper hashTagList={campaignHashTag} />
      <Nav fill className={styles.CampaignBody__nav}>
        <NavItem
          className={classNames({
            [styles.CampaignBody__nav_active]: activeTab === "div",
            [styles.CampaignBody__nav_item]: activeTab !== "div"
          })}
        >
          <NavLink
            onClick={() => {
              toggle("div");
            }}
          >
            나누기
          </NavLink>
        </NavItem>
        <NavItem
          className={classNames({
            [styles.CampaignBody__nav_active]: activeTab === "mul",
            [styles.CampaignBody__nav_item]: activeTab !== "mul"
          })}
        >
          <NavLink
            onClick={() => {
              toggle("mul");
            }}
          >
            곱하기
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent
        activeTab={activeTab}
        className={styles.CampaignBody__content}
      >
        <TabPane tabId="div">
          <div className={styles.CampaignBody__body}>
            {givingCampainList.map(list => {
              return <CampaignCard campaign={list} />;
            })}
          </div>
        </TabPane>
        <TabPane tabId="mul">
          <div className={styles.CampaignBody__body}>
            {sharingCampainList.map(list => {
              return (
                <CampaignCard campaign={list} campaignList={campaignList} />
              );
            })}
          </div>
        </TabPane>
      </TabContent>
    </BodyFrame>
  );
}
export default CampaignBody;
