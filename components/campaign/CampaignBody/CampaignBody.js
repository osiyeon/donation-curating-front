import { useState, useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable
} from "recoil";

import {
  NavLink,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import axios from "axios";

import BodyFrame from "../../common/BodyFrame";
import CampainCard from "../CampainCard";
import HashTagWrapper from "../../common/HashTagWrapper";

import classNames from "classnames";
import styles from "./CampaignBody.module.css";
import CampaignCard from "../CampainCard";
import style from "../../search/SearchBody/SearchBody.module.css";
import { campaignListState } from "../../../states";

function CampaignBody() {
  const [activeTab, setActiveTab] = useState("div");
  const [campaignHashTag, setCampaignHashTag] = useState([]);
  const [campaignList, setCampaignList] = useState([]);
  // const [campaignList, setCampaignList] = useRecoilState(campaignListState);
  // const campaignListLoadable = useRecoilValueLoadable(getCampaignListSelector);

  console.log({ campaignList });

  useEffect(async () => {
    const { data: campaigns } = await axios.get("/api/v1/campaigns/");
    setCampaignList(campaigns);
    const { data: hashtagList } = await axios.get(`/api/v1/hashtags/campaign`);

    setCampaignHashTag(hashtagList);
  }, []);

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const givingCampainList = campaignList.filter(
    list => list.category === "GIVING"
  );

  const sharingCampainList = campaignList.filter(
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
