import { useSelector } from "react-redux";
import axios from "axios";
import CampainCard from "../../campaign/CampainCard";
import OrganizationCard from "../../organization/OrganizationCard";

import style from "./SearchBody.module.css";

function SearchBody({ value, campaignList, organizationList }) {
  const allCampaignList = useSelector(state => state.campaign.campaignList);

  return (
    <>
      <div className={style.SearchBody__title}>
        <h2 className={style.SearchBody}>{value}</h2>
        <div className={style.SearchBody__label}></div>
      </div>
      <div className={style.SearchBody__cardWrapper}>
        <div className={style.SearchBody__header}>캠페인</div>
        <div className={style.SearchBody__divider}></div>
        <div className={style.SearchBody__campaigns}>
          {campaignList.map(list => (
            <CampainCard key={list.id} campaign={list} />
          ))}
          {campaignList.length === 0 && (
            <div className={style.SearchBody__none}>검색 결과 없음</div>
          )}
        </div>
      </div>
      <div className={style.SearchBody__cardWrapper}>
        <div className={style.SearchBody__header}>기부 단체</div>
        <div className={style.SearchBody__divider}></div>
        {organizationList.map(list => (
          <OrganizationCard
            key={list.id}
            organization={list}
            campaignList={allCampaignList}
          />
        ))}
        {organizationList.length === 0 && (
          <div className={style.SearchBody__none}>검색 결과 없음</div>
        )}
      </div>
    </>
  );
}

export default SearchBody;
