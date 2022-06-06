import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import BodyFrame from "../../../components/common/BodyFrame";
import OrganizationCard from "../../../components/organization/OrganizationCard";
import HashTagWrapper from "../../../components/common/HashTagWrapper";

import styles from "./OrganizationBody.module.css";
import style from "../../../components/search/SearchBody/SearchBody.module.css";

function OrganizationBody() {
  const organizationList = useSelector(
    state => state.organization.organizationList
  );

  const orgHashTag = useSelector(
    state => state.hashtag.organizationHashtagList
  );

  const campaignList = useSelector(state => state.campaign.campaignList);

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
