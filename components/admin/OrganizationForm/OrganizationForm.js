import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormText,
  Button
} from "reactstrap";

import style from "./OrganizationForm.module.css";

function OrganizationForm() {
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
              id="organizationName"
              placeholder="기부단체명을 입력해주세요"
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
              id="organizationDesc"
              placeholder="기부단체소개를 입력해주세요"
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
            File
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              기부단체 썸네일 이미지 저장. jpg 형태로 통일
            </FormText>
          </Col>
        </FormGroup>
      </Form>
      <Button>저장</Button>
    </div>
  );
}
export default OrganizationForm;
