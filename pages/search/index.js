import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Header from "../../components/common/Header/Header";
import SearchBox from "../../components/common/SearchBox";
import BodyFrame from "../../components/common/BodyFrame";
import CampainCard from "../../components/campaign/CampainCard";

function Search() {
  const router = useRouter();
  const { value } = router.query;

  const [campaignList, setCampaignList] = useState([]);

  useEffect(async () => {
    console.log({ value });
    const { data: campaigns } = await axios.get(
      `/api/v1/search?keyword=${value}`
    );
    setCampaignList(campaigns);
  }, []);
  return (
    <>
      <Header />
      <BodyFrame>
        <h3>{value}</h3>
        <SearchBox />
        {campaignList.map(list => (
          <CampainCard campaign={list} />
        ))}
      </BodyFrame>
    </>
  );
}

export default Search;
