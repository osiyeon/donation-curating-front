import { useEffect, useState } from "react";
import axios from "axios";
import CampainCard from "../../campaign/CampainCard";
import OrganizationCard from "../../organization/OrganizationCard";

import style from "./SearchBody.module.css";

function SearchBody({ value, campaignList, organizationList }) {
  const [allCampaignList, setAllCampaignList] = useState([]);

  useEffect(async () => {
    const { data: campaigns } = await axios.get("/api/v1/campaigns");
    setAllCampaignList(campaigns);
  }, []);

  return (
    <>
      <h2 className={style.SearchBody}>{value}</h2>
      <div>캠페인</div>
      <div className={style.SearchBody__campaigns}>
        {campaignList.map(list => (
          <CampainCard campaign={list} />
        ))}
      </div>
      <div>기부 단체</div>
      {organizationList.map(list => (
        <OrganizationCard organization={list} campaignList={allCampaignList} />
      ))}
    </>
  );
}

export default SearchBody;
