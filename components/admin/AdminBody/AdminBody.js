import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

import BodyFrame from "../../common/BodyFrame";
import OrganizationForm from "../OrganizationForm";
import HashTagForm from "../HashTagForm";

import style from "./AdminBody.module.css";
import CampaignForm from "../CampaignForm/CampaignForm";
import OrganizationTable from "../OrganizationTable";
import CampaignTable from "../CampaignTable";

function AdminBody() {
  const [hashTagList, setHashTagList] = useState([]);
  const [flag, setFlag] = useState("생성");
  useEffect(async () => {
    const { data } = await axios.get("/api/v1/hashtags");
    setHashTagList(data);
  }, []);

  const onClickButton = () => {
    if (flag === "생성") {
      setFlag("조회");
    } else {
      setFlag("생성");
    }
  };

  return (
    <BodyFrame>
      <div className={style.AdminBody__header}>
        <h3>관리자페이지</h3>
        {flag === "생성" ? (
          <Button size="sm" onClick={onClickButton}>
            조회
          </Button>
        ) : (
          <Button size="sm" onClick={onClickButton}>
            생성
          </Button>
        )}
      </div>
      {flag === "생성" ? (
        <div className={style.AdminBody}>
          <HashTagForm />
          <OrganizationForm hashTagList={hashTagList} />
          <CampaignForm hashTagList={hashTagList} />
        </div>
      ) : (
        <>
          <OrganizationTable />
          <CampaignTable />
        </>
      )}
    </BodyFrame>
  );
}
export default AdminBody;
