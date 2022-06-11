import { FormGroup, Label, Input, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

function OrganizationDropdownInput({ selectOrganization }) {
  const organizationList = useSelector(
    state => state.organization.organizationList
  );
  const [selectedOrganization, setSelectedOrganization] = useState({
    id: 0,
    name: "속한 기부단체를 선택해주세요"
  });

  const onChangeHandler = e => {
    const { value, id } = e.target;
    const idx = organizationList.findIndex(item => item.id === parseInt(value));

    selectOrganization({ key: id, orgId: organizationList[idx].id });
    setSelectedOrganization(organizationList[idx]);
  };
  return (
    <FormGroup row>
      <Label for="organizationSelect" sm={2}>
        기부단체
      </Label>
      <Col sm={10}>
        <Input
          type="select"
          name="select"
          id="organization"
          value={selectedOrganization}
          onChange={onChangeHandler}
        >
          {[selectedOrganization, ...organizationList].map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Input>
      </Col>
    </FormGroup>
  );
}

export default OrganizationDropdownInput;
