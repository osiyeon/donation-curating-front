import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";

import style from "./OrganizationTable.module.css";

function OrganizationTable() {
  const [organizationList, setOrganizationList] = useState([]);
  useEffect(async () => {
    const { data: organizations } = await axios.get("/api/v1/organizations");
    setOrganizationList(organizations);
  }, []);

  return (
    <>
      <h3>기부단체 리스트</h3>
      <Table size="sm" className={style.OrganizationTable}>
        <thead>
          <tr>
            <th width="5%">#</th>
            <th width="10%">기부단체명</th>
            <th width="40%">내용</th>
            <th width="10%">링크</th>
            <th width="10%">이미지</th>
          </tr>
        </thead>
        <tbody>
          {organizationList.map(item => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.orgLink}</td>
              <td>
                <img src={item.orgThumbnail} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default OrganizationTable;
