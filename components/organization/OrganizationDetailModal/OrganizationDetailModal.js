import { Modal, ModalHeader, ModalBody, Badge } from "reactstrap";

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
          {hashtags.map(item => (
            <Badge className={style.OrganizationDetailModal__badge}>
              {item.tagName}
            </Badge>
          ))}
        </div>
        <div className={style.OrganizationDetailModal__divider}></div>
        <div className={style.OrganizationDetailModal__campaignCard}>
          {filteredCampaignList.map(list => (
            <CampainCard campaign={list} />
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default OrganizationDetailModal;
