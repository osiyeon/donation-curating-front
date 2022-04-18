import { Button, Row } from 'reactstrap'
import SearchBox from "../SearchBox/SearchBox"
import DonationOrgCard from "../DonationOrgCard/DonationOrgCard"
import CampainCard from '../CampainCard/CampainCard'

import style from "./HashTagWrapper.module.css"

export default function HashTagWrapper() {

    return (
        <div className={style.HashTagWrapper}>
            <Button color="secondary" outline size="sm" className={style.HashTagWrapper__button}>아동</Button>
            <Button color="secondary" outline size="sm" className={style.HashTagWrapper__button}>긴급구호</Button>
            <Button color="secondary" outline size="sm" className={style.HashTagWrapper__button}>의료</Button>
            <Button color="secondary" outline size="sm" className={style.HashTagWrapper__button}>여성 인권</Button>
            <Button color="secondary" outline size="sm" className={style.HashTagWrapper__button}>주거 환경</Button>
            <Button color="secondary" outline size="sm" className={style.HashTagWrapper__button}>선교 후원</Button>
            <Button color="secondary" outline size="sm" className={style.HashTagWrapper__button}>난민</Button>
        </div>

    )
}