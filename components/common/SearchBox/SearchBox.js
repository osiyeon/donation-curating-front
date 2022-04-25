import { useState } from "react";
import { Input } from "reactstrap";
import Router from "next/router";

import style from "./SearchBox.module.css";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = e => {
    console.log({ searchValue });
    if (e.key === "Enter") {
      Router.push({
        pathname: "/search",
        query: { value: searchValue }
      });
    }
  };

  return (
    <div className={style.SearchBox}>
      <Input
        type="search"
        className={style.SearchBox__input}
        value={searchValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="검색어를 입력해주세요"
      />
      <img
        src="/images/searchIcon.svg"
        className={style.SearchBox__searchIcon}
      />
    </div>
  );
}
