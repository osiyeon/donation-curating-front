import { Input } from "reactstrap"

import style from "./SearchBox.module.css"

export default function SearchBox() {

    return (
        <div className={style.SearchBox}>
            <Input className={style.SearchBox__input} />
            <img src="/images/searchIcon.svg" className={style.SearchBox__searchIcon} />
        </div>
    )
}