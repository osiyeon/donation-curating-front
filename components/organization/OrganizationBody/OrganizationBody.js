import { useEffect } from "react";
import axios from 'axios';

import BodyFrame from "../../common/BodyFrame";
import DonationOrgCard from "../DonationOrgCard"
import HashTagWrapper from "../../common/HashTagWrapper";

import styles from "./OrganizationBody.module.css"

function OrganizationBody() {

    useEffect(async () => {
        const res = await axios.get('/api/v1/organizations');
        console.log(" data: ", res.data)
    }, [])

    return (
        <BodyFrame>
            <h3 className={styles.OrganizationBody__title}>단체</h3>
            <HashTagWrapper />
            <DonationOrgCard />
        </BodyFrame>
    )
}

export default OrganizationBody;