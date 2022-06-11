import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import axios from "axios";
import Image from "next/image";

import { deleteCampaignById } from "../../../states/campaign";

import style from "./CampaignTable.module.css";

function CampaignTable() {
  const dispatch = useDispatch();
  const campaignList = useSelector(state => state.campaign.campaignList);

  const onClickDeleteButton = e => {
    const id = e.target.id;

    axios
      .delete(`/api/v1/campaigns/${id}`)
      .then(res => {
        if (res.data) {
          // 뷰에서 삭제한 데이터 없애기
          alert("정상적으로 삭제되었습니다.");
          dispatch(deleteCampaignById(id));
        }
      })
      .catch(err => {
        alert("삭제 실패");
        // console.log(err)
      });
  };

  return (
    <>
      <h3>캠페인 리스트</h3>
      <div className={style.CampaignTable}>
        <Table size="sm" className={style.CampaignTable__table}>
          <thead>
            <tr>
              <th>#</th>
              <th>캠페인명</th>
              <th>내용</th>
              <th>카테고리</th>
              <th>링크</th>
              <th>날짜</th>
              <th>기부단체명</th>
              <th>이미지</th>
            </tr>
          </thead>
          <tbody>
            {campaignList.map(item => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td className={style.CampaignTable__content}>{item.content}</td>
                <td>{item.category === "GIVING" ? "곱하기" : "나누기"}</td>
                <td>{item.campLink}</td>
                <td>
                  {item.startDate}~{item.closingDate}
                </td>
                <td>{item.orgName}</td>
                <td>
                  <img
                    className={style.CampaignTable__img}
                    src={item.campThumbnail}
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

export default CampaignTable;
