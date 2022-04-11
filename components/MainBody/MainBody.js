import SearchBox from "../SearchBox/SearchBox"

import style from "./MainBody.module.css"

export default function MainBody() {

    return (
        <div className={style.MainBody}>
            <SearchBox />
        </div>
    )
}