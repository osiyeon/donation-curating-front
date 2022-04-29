import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Header from "../../components/common/Header/Header";
import SearchBox from "../../components/common/SearchBox";
import BodyFrame from "../../components/common/BodyFrame";
import SearchBody from "../../components/search/SearchBody/SearchBody";

function Search() {
  const router = useRouter();
  const { value } = router.query;

  const [campaignList, setCampaignList] = useState([]);
  const [organizationList, setOrganizationList] = useState([]);

  useEffect(async () => {
    const {
      data: { campaign: campaigns, organization: organizations }
    } = await axios.get(`/api/v1/search?keyword=${value}`);

    setCampaignList(campaigns);
    setOrganizationList(organizations);
  }, [value]);

  return (
    <>
      <Header />
      <BodyFrame>
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
