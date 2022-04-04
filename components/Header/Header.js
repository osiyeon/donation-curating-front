import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap'
import Image from 'next/image'

import styles from './Header.module.css'


function Header(props) {

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
                    <NavItem>
                        <NavLink href="/intro/introduction" className={styles.Header__item}>캠페인</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/introduction" className={styles.Header__item}>단체</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/introduction" className={styles.Header__item}>소개</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    );
}

export default Header;