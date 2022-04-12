import { useState } from "react";
import { NavLink, Nav, NavItem, TabContent, TabPane, Row } from "reactstrap";
import BodyFrame from "../../components/BodyFrame";
import CampainCard from "../CampainCard/CampainCard";

import classNames from "classnames";
import styles from "./CampaignBody.module.css"

function CampaignBody() {

    const [activeTab, setActiveTab] = useState("div")

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    return (
        <BodyFrame>
            <h3 className={styles.CampaignBody__title}>캠페인</h3>
            <Nav tabs fill className={styles.CampaignBody__nav}>
                <NavItem className={classNames({ active: activeTab === 'div' })}>
                    <NavLink onClick={() => { toggle('div') }}>나누기</NavLink>
                </NavItem>
                <NavItem active={activeTab === 'mul'}>
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