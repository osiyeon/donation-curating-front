import { Button, Row } from 'reactstrap'
import SearchBox from "../common/SearchBox"
import DonationOrgCard from "../Organization/DonationOrgCard/DonationOrgCard"
import CampainCard from '../campaign/CampainCard'
import HashTagWrapper from '../common/HashTagWrapper'

import style from "./MainBody.module.css"
import BodyFrame from '../common/BodyFrame'

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