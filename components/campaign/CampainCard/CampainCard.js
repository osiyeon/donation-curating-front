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

import style from "./CampainCard.module.css";

export default function CampainCard({ campaign = {} }) {
  console.log({ campaign });
  const {
    id,
    title,
    content,
    hashtags,
    orgName,
    category,
    campLink,
    startDate,
    closingDate
  } = campaign;
  const categoryTag = category === "GIVING" ? "나누기" : "곱하기";

  const onClickHandler = () => {
    window.open(campLink);
  };

  const dueDate = startDate
    ? closingDate
      ? `${startDate} ~ ${closingDate}`
      : `${startDate} ~ 마감시까지`
    : "상시모집";

  return (
    <Card className={style.CampaignCard__card} onClick={onClickHandler}>
      <img
        width="100%"
        src={`/images/campaign/${id}.png`}
        alt={id}
        className={style.CampaignCard__card__img}
      />
      <CardBody className={style.CampaignCard__body}>
        <div className={style.CampaignCard__header}>
          {orgName}
          <Badge className={style.CampaignCard__header__category}>
            {categoryTag}
          </Badge>
        </div>
        <div>
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
  );
}
