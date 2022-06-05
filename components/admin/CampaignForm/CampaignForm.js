import { useState } from "react";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormText,
  Button
} from "reactstrap";

import style from "./CampaignForm.module.css";

function CampaignForm() {
  const [category, setCategory] = useState("SHARING");

  const onClickCategory = e => {
    const value = e.target.value;

    if (value === "sharing") {
      setCategory("GIVING");
    } else {
      setCategory("SHARING");
    }

    console.log({ value });
    console.log({ category });
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
                  onClick={onClickCategory}
                />
                곱하기
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="organizationSelect" sm={2}>
            기부단체
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="organizationSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="organizationName" sm={2}>
            캠페인명
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="campaignName"
              placeholder="캠페인명을 입력해주세요"
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
              id="organizationDesc"
              placeholder="캠페인 내용을 입력해주세요"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleDate" sm={2}>
            시작일
          </Label>
          <Col sm={10}>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              placeholder="date placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleDate" sm={2}>
            종료일
          </Label>
          <Col sm={10}>
            <Input
              type="date"
              name="closingDate"
              id="closingDate"
              placeholder="date placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="organizationName" sm={2}>
            해쉬태그
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="hashtag"
              id="organizationTag"
              placeholder="해쉬태그 입력"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            이미지
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              캠페인 썸네일 이미지 저장. jpg 형태로 통일
            </FormText>
          </Col>
        </FormGroup>
      </Form>
      <Button>저장</Button>
    </div>
  );
}
export default CampaignForm;
