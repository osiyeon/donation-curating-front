import { useState, useCallback } from "react";
import { Input } from "reactstrap";
import { useRouter } from "next/router";

import style from "./SearchBox.module.css";

export default function SearchBox() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(
        {
          pathname: "/search",
          query: { value: searchValue }
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <div className={style.SearchBox}>
      <img
        src="/images/searchIcon.svg"
        className={style.SearchBox__searchIcon}
      />
      <Input
        type="search"
        className={style.SearchBox__input}
        value={searchValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="검색어를 입력해주세요"
      />
    </div>
  );
}
