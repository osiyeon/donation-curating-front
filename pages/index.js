import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import Header from "../components/common/Header";
import MainBody from "../components/MainBody/MainBody";

function Home() {
  const [campaignList, setCampaignList] = useState([]);
  const [organizationList, setOrganizationList] = useState([]);
  useEffect(async () => {
    const { data: campaigns } = await axios.get(`/api/v1/campaigns`);
    setCampaignList(campaigns);

    const { data: organizations } = await axios.get(`/api/v1/organizations`);
    setOrganizationList(organizations);
  }, []);

  return (
    <>
      <Header />
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/270"
          height="360px"
        />
        <CardImgOverlay>
          <CardText>소개페이지</CardText>
        </CardImgOverlay>
      </Card>
      <MainBody
        campaignList={campaignList}
        organizationList={organizationList}
      />
    </>
  );
}
export default Home;
