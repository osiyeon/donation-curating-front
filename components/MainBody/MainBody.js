import { Button, Row } from 'reactstrap'
import SearchBox from "../SearchBox/SearchBox"
import DonationOrgCard from "../DonationOrgCard/DonationOrgCard"
import CampainCard from '../CampainCard/CampainCard'

import style from "./MainBody.module.css"

export default function MainBody() {

    return (
        <div className={style.MainBody}>
            <SearchBox />
            <div className={style.MainBody__badge_wrapper}>
                <Button color="secondary" outline size="sm" className={style.MainBody__button}>아동</Button>
                <Button color="secondary" outline size="sm" className={style.MainBody__button}>긴급구호</Button>
                <Button color="secondary" outline size="sm" className={style.MainBody__button}>의료</Button>
                <Button color="secondary" outline size="sm" className={style.MainBody__button}>여성 인권</Button>
                <Button color="secondary" outline size="sm" className={style.MainBody__button}>주거 환경</Button>
                <Button color="secondary" outline size="sm" className={style.MainBody__button}>선교 후원</Button>
                <Button color="secondary" outline size="sm" className={style.MainBody__button}>난민</Button>
            </div>
            <h3>기부단체</h3>
            <DonationOrgCard />
            <DonationOrgCard />
            <h3>캠페인</h3>
            <Row>
                <CampainCard />
                <CampainCard />
            </Row>

        </div>
    )
}