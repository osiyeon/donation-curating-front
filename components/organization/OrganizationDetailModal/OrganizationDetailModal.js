import { Modal, ModalHeader, ModalBody, Badge } from "reactstrap";
import { useSelector } from "react-redux";
import Image from "next/image";

import CampainCard from "../../campaign/CampainCard/CampainCard";

import style from "./OrganizationDetailModal.module.css";

function OrganizationDetailModal({
  id,
  name,
  description,
  hashtags,
  orgThumbnail,
  isOpen,
  toggle
}) {
  const campaigns = useSelector(state => state.campaign.campaignList);
  const filteredCampaignList = campaigns.filter(list => list.orgId === id);

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
          alt={id}
          src={orgThumbnail}
          className={style.OrganizationDetailModal__image}
        />
        <div className={style.OrganizationDetailModal__desc}>{description}</div>
        <div className={style["OrganizationDetailModal__badge-wrapper"]}>
          {hashtags?.map(item => (
            <Badge
              key={item.id}
              className={style.OrganizationDetailModal__badge}
            >
              {item.tagName}
            </Badge>
          ))}
        </div>
        <div className={style.OrganizationDetailModal__divider}></div>
        <div className={style.OrganizationDetailModal__campaignCard}>
          {filteredCampaignList.map(list => (
            <CampainCard key={list.id} campaign={list} />
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default OrganizationDetailModal;
