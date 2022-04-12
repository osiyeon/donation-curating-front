import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, FormGroup, Input, Button } from 'reactstrap'
import Image from 'next/image'

import styles from './Header.module.css'


function Header({ searchBox }) {

    const [isOpen, setOpen] = useState(false)

    function toggle() {
        setOpen(!isOpen)
    }

    return (
        <Navbar expand="md" dark className={styles.Header}>
            <NavbarBrand href="/"><Image priority src="/images/나누기 곱하기-logos_white.png" height={45} width={95} /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
                <Nav navbar >
                    <NavItem className={styles.Header__item}>
                        <NavLink href="/campaign" className={styles.Header__item_content}>캠페인</NavLink>
                    </NavItem>
                    <NavItem className={styles.Header__item}>
                        <NavLink href="/organization" className={styles.Header__item_content}>단체</NavLink>
                    </NavItem>
                    <NavItem className={styles.Header__item}>
                        <NavLink href="/intro/introduction" className={styles.Header__item_content}>소개</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            {searchBox && (<FormGroup className={styles.Header__search}>
                <Input type="search" name="search" id="exampleSearch" placeholder="검색어를 입력해주세요" className={styles.Header__search_input} />
                <Button size="sm" className={styles.Header__search_button}>검색</Button>
            </FormGroup>)}
        </Navbar>

    );
}

export default Header;