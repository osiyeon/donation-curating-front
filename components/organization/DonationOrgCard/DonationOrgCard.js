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

import style from "./DonationOrgCard.module.css";

export default function DonationOrgCard({ organization = {} }) {
  console.log({ organization });
  const { name, description } = organization;
  return (
    <Card className={style.DonationOrgCard__card}>
      <Row>
        <Col md="4">
          <CardImg
            width="100%"
            src="/images/기부단체IMG1.svg"
            alt="Card image cap"
          />
        </Col>
        <Col md="8">
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText className={style.DonationOrgCard__card_text}>
              {description}
            </CardText>
            <Badge className={style.DonationOrgCard__card_badge}>
              긴급 구호
            </Badge>
            <Badge className={style.DonationOrgCard__card_badge}>
              긴급 구호
            </Badge>
            <Badge className={style.DonationOrgCard__card_badge}>
              긴급 구호
            </Badge>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
}
