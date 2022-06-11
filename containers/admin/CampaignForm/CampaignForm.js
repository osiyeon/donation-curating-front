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
        //확인 필요 - 초기화 안됨
        dispatch(addCampaign(formData));
        alert("저장되었습니다.");
      })
      .catch(err => {
        alert("저장 실패");
        // console.log({ err });
      });
  };

  return (
    <div className={style.CampaignForm}>
      <h3>캠페인 등록</h3>
      <Form>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">카테고리</legend>
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
                나누기
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
                곱하기
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <OrganizationDropdownInput selectOrganization={selectOrganization} />
        <FormGroup row>
          <Label for="organizationName" sm={2}>
            캠페인명
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="title"
              placeholder="캠페인명을 입력해주세요"
              value={campaignInfo.name}
              onChange={onChangeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            캠페인 내용
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="text"
              id="content"
              placeholder="캠페인 내용을 입력해주세요"
              value={campaignInfo.description}
              onChange={onChangeHandler}
            />
          </Col>
        </FormGroup>
        <CampaignDateInputGroup setCampaignInfo={onChangeHandler} />
        <HashTagInput setHashTags={setSelectedHashTag} />
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            이미지
          </Label>
          <Col sm={10}>
            <Input
              type="file"
              name="file"
              id="file"
              onChange={onChangeHandler}
            />
            <FormText color="muted">
              캠페인 썸네일 이미지 저장. jpg 형태로 통일
            </FormText>
          </Col>
        </FormGroup>
      </Form>
      <Button onClick={saveCampaignHandler}>저장</Button>
    </div>
  );
}
export default CampaignForm;
