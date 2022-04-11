import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, FormGroup, Input } from 'reactstrap'
import Image from 'next/image'

import styles from './Header.module.css'


function Header({ searchBox }) {

    const [isOpen, setOpen] = useState(false)

    function toggle() {
        setOpen(!isOpen)
    }

    return (
        <Navbar expand="md" dark className={styles.Header}>
            <NavbarBrand href="/main"><Image priority src="/images/나누기 곱하기-logos_white.png" height={45} width={95} /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
                <Nav navbar >
                    <NavItem>
                        <NavLink href="/intro/introduction" className={styles.Header__item}>캠페인</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/introduction" className={styles.Header__item}>단체</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/intro/introduction" className={styles.Header__item}>소개</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            {searchBox && (<FormGroup>
                <Input type="search" name="search" id="exampleSearch" placeholder="검색어를 입력해주세요" />
            </FormGroup>)}
        </Navbar>

    );
}

export default Header;