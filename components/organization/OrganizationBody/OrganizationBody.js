import { useEffect, useState } from "react";
import axios from "axios";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import BodyFrame from "../../common/BodyFrame";
import OrganizationCard from "../OrganizationCard";
import HashTagWrapper from "../../common/HashTagWrapper";

import styles from "./OrganizationBody.module.css";
import style from "../../search/SearchBody/SearchBody.module.css";

function OrganizationBody() {
  const [orgHashTag, setOrgHashTag] = useState([]);
  const [organizationList, setOrganizationList] = useState([]);
  const [campaignList, setCampaignList] = useState([]);

  useEffect(async () => {
    const { data: organizations } = await axios.get("/api/v1/organizations");
    setOrganizationList(organizations);
    const { data: hashTagList } = await axios.get(
      "/api/v1/hashtags/organization"
    );
    setOrgHashTag(hashTagList);
    const { data: campaigns } = await axios.get("/api/v1/campaigns");
    setCampaignList(campaigns);
  }, []);

  return (
    <BodyFrame>
      <div className={style.SearchBody__breadcrumb}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>기부단체</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h3 className={styles.OrganizationBody__title}>기부 단체</h3>
      <HashTagWrapper hashTagList={orgHashTag} />
      {organizationList.map(list => {
        return (
          <OrganizationCard organization={list} campaignList={campaignList} />
        );
      })}
    </BodyFrame>
  );
}

export default OrganizationBody;
