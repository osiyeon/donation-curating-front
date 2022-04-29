import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import Header from "../components/common/Header";
import MainBody from "../components/MainBody/MainBody";
import { getCampaigns } from "../actions";
import banner from "../public/images/banner.svg";

function Home() {
  const [campaignList, setCampaignList] = useState([]);
  const [organizationList, setOrganizationList] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    // dispatch(getCampaigns());
    const { data: campaigns } = await axios.get(`/api/v1/campaigns`);
    setCampaignList(campaigns);

    const { data: organizations } = await axios.get(`/api/v1/organizations`);
    setOrganizationList(organizations);
  }, []);

  return (
    campaignList.length !== 0 &&
    organizationList.length !== 0 && (
      <>
        <Header />
        <Card inverse>
          <CardImg alt="Card image cap" src={banner.src} />
        </Card>
        <MainBody
          campaignList={campaignList}
          organizationList={organizationList}
        />
      </>
    )
  );
}
export default Home;
