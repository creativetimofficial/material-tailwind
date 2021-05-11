import React from 'react';
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
        <Navbar color="lightBlue" navbar>
            <div className="container max-w-full flex flex-col lg:flex-row lg:items-center px-4">
                <NavbarWrapper>
                    <Link href="/">
                        <NavbarBrand href="#">Material Tailwind</NavbarBrand>
                    </Link>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <Link href="/documentation/quick-start">
                            <a>
                                <NavItem ripple="light">
                                    <Icon name="description" size="2xl" />
                                    &nbsp;Docs
                                </NavItem>
                            </a>
                        </Link>

                        <Link href="/components">
                            <a>
                                <NavItem ripple="light">
                                    <Icon name="apps" size="2xl" />
                                    &nbsp;Components
                                </NavItem>
                            </a>
                        </Link>
                        <Dropdown
                            color="transparent"
                            buttonType="link"
                            buttonText={
                                <>
                                    <Icon name="view_carousel" size="2xl" />
                                    &nbsp;Templates
                                </>
                            }
                            ripple="light"
                            style={{
                                justifyContent: 'start',
                                padding: '1.05rem 1.2rem',
                                fontWeight: 500,
                                color: '#fff',
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
                            ripple="light"
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-github"
                                size="xl"
                            />
                            &nbsp;Github
                        </NavItem>
                        <NavItem
                            href="https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind"
                            target="_blank"
                            rel="noreferrer"
                            ripple="light"
                        >
                            Issues
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </div>
        </Navbar>
    );
}
