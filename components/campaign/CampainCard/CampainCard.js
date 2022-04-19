import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Row, Col, Badge } from 'reactstrap'

import style from "./CampainCard.module.css"

export default function CampainCard() {

    return (
        <Col sm="6">
            <Card className={style.DonationOrgCard__card}>
                <CardImg width="100%" src="/images/기부단체IMG1.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>세이브더칠드런</CardTitle>
                    <CardSubtitle>“세계의 미래는 아이들에게 달려 있습니다.”</CardSubtitle>
                    <CardText className={style.DonationOrgCard__card_text}>
                        세이브더칠드런 창립자 에글렌타인 젭의 말입니다.
                        우리의 미래인 아이들이 더 나은 세상에서 살 수 있게 해주는 것,
                        세이브더칠드런이 지난 한 세기 동안 해온 일입니다.
                    </CardText>
                    <Badge className={style.DonationOrgCard__card_badge}>긴급 구호</Badge>
                    <Badge className={style.DonationOrgCard__card_badge}>긴급 구호</Badge>
                    <Badge className={style.DonationOrgCard__card_badge}>긴급 구호</Badge>
                </CardBody>
            </Card>
        </Col>
    )
}