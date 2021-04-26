import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import NavbarCollapse from 'components/Navbar/NavbarCollapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';
import Dropdown from 'components/Dropdown/Dropdown';
import DropdownItem from 'components/Dropdown/DropdownItem';
import Icon from 'components/Icon/Icon';

export default function IndexNavbar() {
    const [openNavbar, setOpenNavbar] = React.useState(false);

    return (
        <Navbar color="white" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>
                        <Link href="/">
                            <a className="text-gray-900">Material Tailwind</a>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="dark"
                        color="gray"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <Link href="/documentation/quick-start">
                            <a>
                                <NavItem ripple="dark">
                                    <div className="text-gray-900 flex items-center">
                                        <Icon name="description" size="2xl" />
                                        &nbsp;Docs
                                    </div>
                                </NavItem>
                            </a>
                        </Link>

                        <Link href="/components">
                            <a>
                                <NavItem ripple="dark">
                                    <div className="text-gray-900 flex items-center">
                                        <Icon name="apps" size="2xl" />
                                        &nbsp;Components
                                    </div>
                                </NavItem>
                            </a>
                        </Link>
                        <Dropdown
                            color="transparent"
                            buttonType="link"
                            buttonText={
                                <>
                                    <div className="text-gray-900 flex items-center">
                                        <Icon name="view_carousel" size="2xl" />
                                        &nbsp;Templates
                                    </div>
                                </>
                            }
                            ripple="dark"
                            style={{
                                justifyContent: 'start',
                                padding: '1.05rem 1.2rem',
                                fontWeight: 500,
                            }}
                        >
                            <Link href="/templates/landing">
                                <DropdownItem color="lightBlue" ripple="light">
                                    Landing
                                </DropdownItem>
                            </Link>
                            <Link href="/templates/profile">
                                <DropdownItem color="lightBlue" ripple="light">
                                    Profile
                                </DropdownItem>
                            </Link>
                            <Link href="/templates/login">
                                <DropdownItem color="lightBlue" ripple="light">
                                    Login
                                </DropdownItem>
                            </Link>
                        </Dropdown>
                        <NavItem
                            href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
                            target="_blank"
                            rel="noreferrer"
                            ripple="dark"
                        >
                            <div className="text-gray-900 flex items-center">
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                />
                                &nbsp;Github
                            </div>
                        </NavItem>
                        <NavItem
                            href="https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind"
                            target="_blank"
                            rel="noreferrer"
                            ripple="dark"
                        >
                            <div className="text-gray-900">Issues</div>
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
