import { Button, Row } from 'reactstrap'
import SearchBox from "../SearchBox/SearchBox"
import DonationOrgCard from "../DonationOrgCard/DonationOrgCard"
import CampainCard from '../CampainCard/CampainCard'
import HashTagWrapper from '../HashTagWrapper'

import style from "./MainBody.module.css"
import BodyFrame from '../BodyFrame'

export default function MainBody() {

    return (
        <BodyFrame>
            <div className={style.MainBody}>
                <SearchBox />
                <HashTagWrapper />
                <h3>기부단체</h3>
                <DonationOrgCard />
                <DonationOrgCard />
                <h3>캠페인</h3>
                <Row>
                    <CampainCard />
                    <CampainCard />
                </Row>

            </div>
        </BodyFrame>
    )
}