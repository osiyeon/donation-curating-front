import { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

import style from "./OrganizationTable.module.css";

function OrganizationTable() {
  const [organizationList, setOrganizationList] = useState([]);
  useEffect(async () => {
    const { data: organizations } = await axios.get("/api/v1/organizations");
    setOrganizationList(organizations);
  }, []);

  const onClickDeleteButton = e => {
    const id = e.target.id;
    console.log({ id });

    axios
      .delete(`/api/v1/organizations/${id}`)
      .then(res => {
        console.log({ res });
        if (res.data) {
          // 뷰에서 삭제한 데이터 없애기
          alert("정상적으로 삭제되었습니다. ");
        }
      })
      .catch(err => {
        alert("삭제 실패");
        console.log(err);
      });
  };

  return (
    <>
      <h3>기부단체 리스트</h3>
      <div className={style.OrganizationTable}>
        <Table size="sm" className={style.OrganizationTable__table}>
          <thead>
            <tr>
              <th>#</th>
              <th>기부단체명</th>
              <th>내용</th>
              <th>링크</th>
              <th>이미지</th>
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
                  <img
                    className={style.OrganizationTable__img}
                    src={item.orgThumbnail}
                  />
                </td>
                <td>
                  <Button id={item.id} onClick={onClickDeleteButton}>
                    삭제
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default OrganizationTable;
