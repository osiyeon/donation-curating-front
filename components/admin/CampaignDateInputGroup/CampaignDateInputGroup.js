import { useState } from "react";
import moment from "moment";
import { FormGroup, Label, Input, Col } from "reactstrap";
function CampaignDateInputGroup({ setCampaignInfo }) {
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [closingDate, setClosingDate] = useState(moment().format("YYYY-MM-DD"));

  const selectDateHandler = e => {
    const { id, value } = e.target;
    if (id === "startDate") {
      setStartDate(value);
    } else {
      setClosingDate(value);
    }

    setCampaignInfo(e);
  };

  return (
    <>
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
            value={startDate}
            onChange={selectDateHandler}
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
            value={closingDate}
            onChange={selectDateHandler}
          />
        </Col>
      </FormGroup>
    </>
  );
}

export default CampaignDateInputGroup;
