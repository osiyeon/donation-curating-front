import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import Header from "../../components/common/Header/Header";
import SearchBox from "../../components/common/SearchBox";
import BodyFrame from "../../components/common/BodyFrame";
import SearchBody from "../../components/search/SearchBody/SearchBody";

import style from "../../components/search/SearchBody/SearchBody.module.css";

function Search() {
  const router = useRouter();
  const { value } = router.query;

  const [campaignList, setCampaignList] = useState([]);
  const [organizationList, setOrganizationList] = useState([]);

  useEffect(async () => {
    const {
      data: { campaign: campaigns, organization: organizations }
    } = await axios.get(`/api/v1/search?keyword=${encodeURI(value)}`);

    setCampaignList(campaigns);
    setOrganizationList(organizations);
  }, [value]);

  return (
    <>
      <Header />
      <BodyFrame>
        <div className={style.SearchBody__breadcrumb}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>{value}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <SearchBox />
        <SearchBody
          value={value}
          campaignList={campaignList}
          organizationList={organizationList}
        />
      </BodyFrame>
    </>
  );
}

export default Search;
