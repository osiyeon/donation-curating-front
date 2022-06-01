import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";

import style from "./CampaignTable.module.css";

function CampaignTable() {
  const [campaignList, setCampaignList] = useState([]);
  useEffect(async () => {
    const { data: campaigns } = await axios.get("/api/v1/campaigns/");
    setCampaignList(campaigns);
  }, []);

  return (
    <>
      <h3>캠페인 리스트</h3>
      <Table size="sm" className={style.CampaignTable}>
        <thead>
          <tr>
            <th width="5%">#</th>
            <th width="10%">캠페인명</th>
            <th width="40%">내용</th>
            <th width="5%">카테고리</th>
            <th width="10%">링크</th>
            <th width="10%">날짜</th>
            <th width="10%">기부단체명</th>
            <th width="10%">이미지</th>
          </tr>
        </thead>
        <tbody>
          {campaignList.map(item => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.category === "GIVING" ? "곱하기" : "나누기"}</td>
              <td>{item.campLink}</td>
              <td>
                {item.startingDate}~{item.closingDate}
              </td>
              <td>{item.orgName}</td>
              <td>
                <img src={item.campThumbnail} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default CampaignTable;
