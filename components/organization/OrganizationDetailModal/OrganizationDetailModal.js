import { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, Badge } from "reactstrap";
import axios from "axios";

import CampainCard from "../../campaign/CampainCard/CampainCard";

import style from "./OrganizationDetailModal.module.css";

function OrganizationDetailModal({
  id,
  name,
  description,
  hashtags,
  filteredCampaignList,
  isOpen,
  toggle
}) {
  const [campaignList, setCampaignList] = useState([]);

  useEffect(async () => {
    const { data: campaigns } = await axios.get("/api/v1/campaigns/");
    const filteredCampaignList = campaigns.filter(list => list.orgId === id);
    setCampaignList(filteredCampaignList);
  }, [id]);

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="lg"
      className={style.OrganizationDetailModal}
    >
      <ModalHeader
        toggle={toggle}
        className={style.OrganizationDetailModal__header}
      >
        {name}
      </ModalHeader>
      <ModalBody className={style.OrganizationDetailModal__body}>
        <img
          src={`/images/organization/${id}.png`}
          className={style.OrganizationDetailModal__image}
        ></img>
        <div className={style.OrganizationDetailModal__desc}>{description}</div>
        <div className={style["OrganizationDetailModal__badge-wrapper"]}>
          {hashtags?.map(item => (
            <Badge className={style.OrganizationDetailModal__badge}>
              {item.tagName}
            </Badge>
          ))}
        </div>
        <div className={style.OrganizationDetailModal__divider}></div>
        <div className={style.OrganizationDetailModal__campaignCard}>
          {campaignList.map(list => (
            <CampainCard campaign={list} />
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default OrganizationDetailModal;
