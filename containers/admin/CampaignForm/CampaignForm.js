import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormText,
  Button
} from "reactstrap";

import HashTagInput from "../HashTagInput";
import OrganizationDropdownInput from "../OrganizationDropdownInput";
import CampaignDateInputGroup from "../../../components/admin/CampaignDateInputGroup/CampaignDateInputGroup";

import { addCampaign } from "../../../states/campaign";

import style from "./CampaignForm.module.css";

function CampaignForm() {
  const dispatch = useDispatch();

  const [campaignInfo, setCampaignInfo] = useState({});
  const [category, setCategory] = useState("SHARING");
  const [selectedHashTag, setSelectedHashTag] = useState([]);
  const [imageFileInfo, setImageFileInfo] = useState([]);

  const onChangeHandler = e => {
    if (e.target.id === "file") {
      setImageFileInfo(e.target.files);
    } else {
      setCampaignInfo({
        ...campaignInfo,
        [e.target.id]: e.target.value
      });
    }
  };

  const onClickCategory = e => {
    const { id, value } = e.target;

    if (value === "sharing") {
      setCategory("SHARING");
      setCampaignInfo({
        ...campaignInfo,
        [id]: "SHARING"
      });
    } else {
      setCategory("GIVING");
      setCampaignInfo({
        ...campaignInfo,
        [id]: "GIVING"
      });
    }
  };

  const selectOrganization = ({ key, orgId }) => {
    setCampaignInfo({
      ...campaignInfo,
      [key]: { ["id"]: orgId }
    });
  };

  const saveCampaignHandler = () => {
    const saveData = { ...campaignInfo, tags: selectedHashTag };

    const formData = new FormData();

    formData.append(
      "campSaveRequestDto",
      new Blob([JSON.stringify(campaignInfo)], { type: "application/json" })
    );
    formData.append("file", imageFileInfo[0]);
    formData.append(
      "tags",
      new Blob([JSON.stringify(selectedHashTag)], { type: "application/json" })
    );

    axios
      .post("/api/v1/campaigns", formData)
      .then(res => {
        //?????? ?????? - ????????? ??????
        dispatch(addCampaign(formData));
        alert("?????????????????????.");
      })
      .catch(err => {
        alert("?????? ??????");
        // console.log({ err });
      });
  };

  return (
    <div className={style.CampaignForm}>
      <h3>????????? ??????</h3>
      <Form>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">????????????</legend>
          <Col sm={10}>
            <FormGroup check={category === "SHARING"}>
              <Label>
                <Input
                  type="radio"
                  name="category"
                  value="sharing"
                  id="category"
                  onClick={onClickCategory}
                />
                ?????????
              </Label>
            </FormGroup>
            <FormGroup check={category === "GIVING"}>
              <Label>
                <Input
                  type="radio"
                  name="category"
                  value="giving"
                  id="category"
                  onClick={onClickCategory}
                />
                ?????????
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <OrganizationDropdownInput selectOrganization={selectOrganization} />
        <FormGroup row>
          <Label for="organizationName" sm={2}>
            ????????????
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="title"
              placeholder="??????????????? ??????????????????"
              value={campaignInfo.name}
              onChange={onChangeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            ????????? ??????
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="text"
              id="content"
              placeholder="????????? ????????? ??????????????????"
              value={campaignInfo.description}
              onChange={onChangeHandler}
            />
          </Col>
        </FormGroup>
        <CampaignDateInputGroup setCampaignInfo={onChangeHandler} />
        <HashTagInput setHashTags={setSelectedHashTag} />
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            ?????????
          </Label>
          <Col sm={10}>
            <Input
              type="file"
              name="file"
              id="file"
              onChange={onChangeHandler}
            />
            <FormText color="muted">
              ????????? ????????? ????????? ??????. jpg ????????? ??????
            </FormText>
          </Col>
        </FormGroup>
      </Form>
      <Button onClick={saveCampaignHandler}>??????</Button>
    </div>
  );
}
export default CampaignForm;
