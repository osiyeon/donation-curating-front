import { useState, useEffect } from "react";
import { NavLink, Nav, NavItem, TabContent, TabPane, Row } from "reactstrap";
import axios from 'axios';

import BodyFrame from "../../common/BodyFrame";
import CampainCard from "../CampainCard";
import HashTagWrapper from "../../common/HashTagWrapper";

import classNames from "classnames";
import styles from "./CampaignBody.module.css"


function CampaignBody() {

    const [activeTab, setActiveTab] = useState("div")


    useEffect(async () => {
        const res = await axios.get('/api/v1/campaigns/');
        console.log(" data: ", res.data)
    }, [])


    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    return (
        <BodyFrame>
            <h3 className={styles.CampaignBody__title}>캠페인</h3>
            <HashTagWrapper />
            <Nav fill className={styles.CampaignBody__nav}>
                <NavItem className={classNames({
                    [styles.CampaignBody__nav_active]: activeTab === 'div',
                    [styles.CampaignBody__nav_item]: activeTab !== 'div'
                })
                }>
                    <NavLink onClick={() => { toggle('div') }}>나누기</NavLink>
                </NavItem>
                <NavItem className={classNames({
                    [styles.CampaignBody__nav_active]: activeTab === 'mul',
                    [styles.CampaignBody__nav_item]: activeTab !== 'mul'
                })}>
                    <NavLink onClick={() => { toggle('mul') }}>곱하기</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="div">
                    나누기
                    <Row>
                        <CampainCard />
                        <CampainCard />
                    </Row>
                    <Row>
                        <CampainCard />
                        <CampainCard />
                    </Row>
                </TabPane>
                <TabPane tabId="mul">
                    곱하기
                    <Row>
                        <CampainCard />
                        <CampainCard />
                    </Row>
                    <Row>
                        <CampainCard />
                        <CampainCard />
                    </Row>
                </TabPane>
            </TabContent>
        </BodyFrame>

    )
}
export default CampaignBody;