import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

import style from "./HashTagForm.module.css";

function HashTagForm() {
  const [hashTag, setHashtag] = useState("");

  const onChangeHandler = e => {
    setHashtag(e.target.value);
  };

  const onClickHandler = async () => {
    console.log({ hashTag });
    alert("해시태그 저장 완료");
    await axios.post(`/api/v1/hashtag?tag=${hashTag}`);

    setHashtag("");
  };

  // 굳이 없어도 될 듯함
  //   const onKeyPressHandler = e => {
  //     if (e.key === "Enter") {
  //       console.log({ hashTag });
  //       alert("해시태그 저장 완료");
  //     }
  //   };

  return (
    <div className={style.HashTagForm}>
      <h3>해시태그 등록</h3>
      <Form>
        <FormGroup row>
          <Label for="organizationName" sm={2}>
            해시태그
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="hashTag"
              value={hashTag}
              placeholder="등록할 해시태그를 입력해주세요"
              onChange={onChangeHandler}
              //   onKeyPress={onKeyPressHandler}
            />
          </Col>
        </FormGroup>
      </Form>
      <Button onClick={onClickHandler}>저장</Button>
    </div>
  );
}

export default HashTagForm;
