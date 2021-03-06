import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
import { addOrganization } from "../../../states/organization";
import style from "./OrganizationForm.module.css";

function OrganizationForm() {
  const dispatch = useDispatch();

  const [organizationInfo, setOrganizationInfo] = useState({});
  const [selectedHashTag, setSelectedHashTag] = useState([]);
  const [imageFileInfo, setImageFileInfo] = useState([]);

  const onChangeHandler = e => {
    if (e.target.id === "file") {
      setImageFileInfo(e.target.files);
    } else {
      setOrganizationInfo({
        ...organizationInfo,
        [e.target.id]: e.target.value
      });
    }
  };

  const saveOrganizationHandler = () => {
    const formData = new FormData();

    formData.append(
      "orgSaveRequestDto",
      new Blob([JSON.stringify(organizationInfo)], { type: "application/json" })
    );
    formData.append("file", imageFileInfo[0]);
    formData.append(
      "tags",
      new Blob([JSON.stringify(selectedHashTag)], { type: "application/json" })
    );

    axios
      .post("/api/v1/organizations", formData)
      .then(res => {
        //확인 필요 - 초기화 안됨

        dispatch(addOrganization(formData));
        alert("저장되었습니다.");
      })
      .catch(err => {
        alert("저장 실패");
        // console.log({ err });
      });
  };

  return (
    <div className={style.OrganizationForm}>
      <h3>기부 단체 등록</h3>
      <Form>
        <FormGroup row>
          <Label for="organizationName" sm={2}>
            기부단체명
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="기부단체명을 입력해주세요"
              value={organizationInfo.name}
              onChange={onChangeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            단체소개
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="text"
              id="description"
              placeholder="기부단체소개를 입력해주세요"
              value={organizationInfo.description}
              onChange={onChangeHandler}
            />
          </Col>
        </FormGroup>
        <HashTagInput setHashTags={setSelectedHashTag} />
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            기부단체 링크
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="link"
              id="orgLink"
              placeholder="기부단체 링크를 입력해주세요"
              value={organizationInfo.orgLink}
              onChange={onChangeHandler}
            />
          </Col>
        </FormGroup>
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
              기부단체 썸네일 이미지 저장. jpg 형태로 통일
            </FormText>
          </Col>
        </FormGroup>
      </Form>
      <Button onClick={saveOrganizationHandler}>저장</Button>
    </div>
  );
}
export default OrganizationForm;
