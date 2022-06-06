import { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  FormGroup,
  Input
} from "reactstrap";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";

import styles from "./Header.module.css";

function Header({ searchBox }) {
  const [isOpen, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      Router.push({
        pathname: "/search",
        query: { value: searchValue },
        shallow: true
      });
    }
  };

  const handleClick = () => {
    Router.push({
      pathname: "/search",
      query: { value: searchValue }
    });
  };
  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <Navbar expand="md" dark className={styles.Header}>
      <Link href="/">
        <Image
          priority
          src="/images/나누기 곱하기-logos_white.png"
          height={45}
          width={95}
          className={styles.Header__logoImage}
        />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav navbar>
          <NavItem className={styles.Header__item}>
            <Link
              href={{ pathname: "/campaign", shallow: true }}
              className={styles.Header__item_content}
            >
              캠페인
            </Link>
          </NavItem>
          <NavItem className={styles.Header__item}>
            <Link href="/organization" className={styles.Header__item_content}>
              기부단체
            </Link>
          </NavItem>
          <NavItem className={styles.Header__item}>
            <Link
              href="/intro/introduction"
              className={styles.Header__item_content}
            >
              소개
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
      {searchBox && (
        <FormGroup className={styles.Header__search}>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="검색어를 입력해주세요"
            className={styles.Header__search_input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <img
            src="/images/searchIcon.svg"
            className={styles.Header__search__searchIcon}
            onClick={handleClick}
          />
        </FormGroup>
      )}
    </Navbar>
  );
}

export default Header;
