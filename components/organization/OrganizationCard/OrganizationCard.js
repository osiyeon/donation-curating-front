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

import style from "./OrganizationCard.module.css";

function OrganizationCard({ organization = {} }) {
  const { name, description } = organization;
  return (
    <Card className={style.OrganizationCard__card}>
      <Row>
        <Col md="4">
          <CardImg
            width="100%"
            src="/images/기부단체IMG1.svg"
            alt="Card image cap"
          />
        </Col>
        <Col md="8">
          <CardBody className={style.OrganizationCard__body}>
            <div>
              <div className={style.OrganizationCard__body_title}>{name}</div>
              <CardText className={style.OrganizationCard__card_text}>
                {description}
              </CardText>
            </div>
            <div>
              <Badge className={style.OrganizationCard__card_badge}>
                긴급 구호
              </Badge>
              <Badge className={style.OrganizationCard__card_badge}>
                긴급 구호
              </Badge>
              <Badge className={style.OrganizationCard__card_badge}>
                긴급 구호
              </Badge>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
}

export default OrganizationCard;
