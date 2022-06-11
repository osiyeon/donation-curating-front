import { useState } from "react";
import { Card, CardBody, CardImg, CardText, Row, Col, Badge } from "reactstrap";
import OrganizationDetailModal from "../OrganizationDetailModal/OrganizationDetailModal";

import style from "./OrganizationCard.module.css";

function OrganizationCard({ organization, campaignList }) {
  const { name, description, id, hashtags, orgThumbnail } = organization;

  const [isOpen, setIsOpen] = useState(false);
  const filteredCampaignList = campaignList.filter(list => list.orgId === id);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Card className={style.OrganizationCard__card} onClick={onClickHandler}>
        <Row>
          <Col md="4">
            <CardImg
              src={orgThumbnail}
              alt={id}
              className={style.OrganizationCard__card__img}
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
              <div className={style.OrganizationCard__hashtagWrapper}>
                {hashtags?.map(item => (
                  <Badge
                    key={item.id}
                    className={style.OrganizationCard__card_badge}
                  >
                    {item.tagName}
                  </Badge>
                ))}
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
      <OrganizationDetailModal
        id={id}
        name={name}
        description={description}
        hashtags={hashtags}
        orgThumbnail={orgThumbnail}
        filteredCampaignList={filteredCampaignList}
        isOpen={isOpen}
        toggle={onClickHandler}
      />
    </>
  );
}

export default OrganizationCard;
