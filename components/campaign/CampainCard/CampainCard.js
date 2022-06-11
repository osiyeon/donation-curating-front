import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Badge
} from "reactstrap";
import OrganizationDetailModal from "../../organization/OrganizationDetailModal/OrganizationDetailModal";

import style from "./CampainCard.module.css";

export default function CampainCard({ campaign = {}, campaignList = [] }) {
  const {
    id,
    title,
    content,
    hashtags,
    orgId,
    orgName,
    category,
    campLink,
    startDate,
    closingDate,
    campThumbnail
  } = campaign;
  const categoryTag = category === "GIVING" ? "나누기" : "곱하기";

  const [organization, setOrganization] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    window.open(campLink);
  };

  const orgNameClick = async () => {
    const { data: organization } = await axios.get(
      `/api/v1/organizations/${orgId}`
    );
    setOrganization(organization);
    setIsOpen(!isOpen);
  };

  const dueDate = startDate
    ? closingDate
      ? `${startDate} ~ ${closingDate}`
      : `${startDate} ~ 마감시까지`
    : "상시모집";

  return (
    <>
      <Card className={style.CampaignCard__card}>
        <img
          width="100%"
          src={campThumbnail}
          alt={id}
          className={style.CampaignCard__card__img}
          onClick={onClickHandler}
        />
        <CardBody className={style.CampaignCard__body}>
          <div className={style.CampaignCard__header}>
            <div onClick={orgNameClick}>{orgName}</div>
            <Badge className={style.CampaignCard__header__category}>
              {categoryTag}
            </Badge>
          </div>
          <div onClick={onClickHandler}>
            <div className={style.CampaignCard__body_title}>{title}</div>
            <CardText className={style.CampaignCard__card_text}>
              {content}
            </CardText>
          </div>
          <div className={style.CampaignCard__dueDate}>기한: {dueDate}</div>
          <div className={style.CampaignCard__hashtagWrapper}>
            {hashtags?.map(item => (
              <Badge className={style.CampaignCard__card_badge}>
                {item.tagName}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
      <OrganizationDetailModal
        id={organization.id}
        name={organization.name}
        description={organization.description}
        hashtags={organization.hashtags}
        isOpen={isOpen}
        toggle={orgNameClick}
      />
    </>
  );
}
