import { useState, useEffect } from "react";
import classNames from "classnames";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";

import BodyFrame from "../../common/BodyFrame";
import OrganizationForm from "../OrganizationForm";

import style from "./AdminBody.module.css";
import CampaignForm from "../CampaignForm/CampaignForm";

function AdminBody() {
  return (
    <BodyFrame>
      <h3>관리자페이지</h3>
      <OrganizationForm />
      <CampaignForm />
    </BodyFrame>
  );
}
export default AdminBody;
