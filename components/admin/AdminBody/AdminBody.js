import { useState } from "react";
import { Button } from "reactstrap";

import BodyFrame from "../../common/BodyFrame";
import OrganizationForm from "../../../containers/admin/OrganizationForm";
import HashTagForm from "../HashTagForm";
import CampaignForm from "../../../containers/admin/CampaignForm";
import OrganizationTable from "../../../containers/admin/OrganizationTable";
import CampaignTable from "../../../containers/admin/CampaignTable";
import style from "./AdminBody.module.css";

function AdminBody() {
  const [flag, setFlag] = useState("생성");

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
          <OrganizationForm />
          <CampaignForm />
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
