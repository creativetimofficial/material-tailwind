import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import NavbarCollapse from 'components/Navbar/NavbarCollapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';
import NavLink from 'components/Nav/NavLink';
import NavbarInput from 'components/Navbar/NavbarInput';
import Icon from 'components/Icon/Icon';

export function Navbars({ color, navbarName }) {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color={color} navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>{navbarName}</NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav leftSide>
                        <NavItem active="light" ripple="light">
                            <Icon name="language" size="xl" />
                            Discover
                        </NavItem>
                        <NavLink href="#navbar" ripple="light">
                            <Icon name="account_circle" size="xl" />
                            Profile
                        </NavLink>
                        <NavItem ripple="light">
                            <Icon name="settings" size="xl" />
                            Settings
                        </NavItem>
                    </Nav>
                    <NavbarInput type="text" placeholder="Search here" />
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}

export function NavbarIconsLinks({ color, navbarName }) {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color={color} navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>{navbarName}</NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <NavItem active="light" ripple="light">
                            <Icon name="language" size="xl" />
                            Discover
                        </NavItem>
                        <NavLink href="#navbar" ripple="light">
                            <Icon name="account_circle" size="xl" />
                            Profile
                        </NavLink>
                        <NavItem ripple="light">
                            <Icon name="settings" size="xl" />
                            Settings
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}

export function NavbarIcons({ color, navbarName }) {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color={color} navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>{navbarName}</NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <NavItem active="light" ripple="light">
                            <Icon name="language" size="xl" />
                        </NavItem>
                        <NavLink href="#navbar" ripple="light">
                            <Icon name="account_circle" size="xl" />
                        </NavLink>
                        <NavItem ripple="light">
                            <Icon name="settings" size="xl" />
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}

export function NavbarLinks({ color, navbarName }) {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color={color} navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>{navbarName}</NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <NavItem active="light" ripple="light">
                            Discover
                        </NavItem>
                        <NavLink href="#navbar" ripple="light">
                            Profile
                        </NavLink>
                        <NavItem ripple="light">Settings</NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
