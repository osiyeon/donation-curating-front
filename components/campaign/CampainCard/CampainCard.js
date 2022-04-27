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
  const { title, content, hashtags } = campaign;

  return (
    <Card className={style.CampaignCard__card}>
      <CardImg
        width="100%"
        src="/images/기부단체IMG1.svg"
        alt="Card image cap"
      />
      <CardBody className={style.CampaignCard__body}>
        <div>
          <div className={style.CampaignCard__body_title}>{title}</div>
          <CardText className={style.CampaignCard__card_text}>
            {content}
          </CardText>
        </div>
        <div>
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
