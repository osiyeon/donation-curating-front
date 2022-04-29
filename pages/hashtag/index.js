import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Header from "../../components/common/Header/Header";
import SearchBox from "../../components/common/SearchBox";
import BodyFrame from "../../components/common/BodyFrame";
import SearchBody from "../../components/search/SearchBody/SearchBody";

function HashTagSearch() {
  const router = useRouter();
  const { value } = router.query;
  console.log({ value });

  const [campaignList, setCampaignList] = useState([]);
  const [organizationList, setOrganizationList] = useState([]);

  useEffect(async () => {
    const {
      data: { campaign: campaigns, organization: organizations }
    } = await axios.get(`/api/v1/hashtag/?tag=${value}`);

    setCampaignList(campaigns);
    setOrganizationList(organizations);
  }, [value]);

  return (
    <>
      <Header searchBox />
      <BodyFrame>
        <SearchBody
          value={value}
          campaignList={campaignList}
          organizationList={organizationList}
        />
      </BodyFrame>
    </>
  );
}

export default HashTagSearch;
