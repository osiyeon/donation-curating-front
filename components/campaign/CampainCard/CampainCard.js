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
  const { title, content, hashtag } = campaign;

  return (
    <Col sm="6">
      <Card className={style.DonationOrgCard__card}>
        <CardImg
          width="100%"
          src="/images/기부단체IMG1.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText className={style.DonationOrgCard__card_text}>
            {content}
          </CardText>
          <Badge className={style.DonationOrgCard__card_badge}>
            {hashtag?.tagName}
          </Badge>
        </CardBody>
      </Card>
    </Col>
  );
}
