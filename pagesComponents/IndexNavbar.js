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
import NavLink from 'components/Nav/NavLink';
import Dropdown from 'components/Dropdown/Dropdown';
import DropdownLink from 'components/Dropdown/DropdownLink';
import Icon from 'components/Icon/Icon';

export default function IndexNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="white" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <Link href="/">
                        <a>
                            <NavbarBrand color="gray">
                                Material Tailwind
                            </NavbarBrand>
                        </a>
                    </Link>
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
                                    <p className="text-gray-900 flex items-center">
                                        <Icon name="description" size="2xl" />
                                        &nbsp;Docs
                                    </p>
                                </NavItem>
                            </a>
                        </Link>

                        <Link href="/components">
                            <a>
                                <NavItem ripple="dark">
                                    <p className="text-gray-900 flex items-center">
                                        <Icon name="apps" size="2xl" />
                                        &nbsp;Components
                                    </p>
                                </NavItem>
                            </a>
                        </Link>
                        <Dropdown
                            color="transparent"
                            buttonType="link"
                            buttonText={
                                <>
                                    <p className="text-gray-900 flex items-center uppercase text-xs">
                                        <Icon name="view_carousel" size="2xl" />
                                        &nbsp;Templates
                                    </p>
                                </>
                            }
                            ripple="dark"
                            style={{
                                justifyContent: 'start',
                                padding: '1.05rem 1.2rem',
                                fontWeight: 500,
                            }}
                        >
                            <DropdownLink
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                target="_blank"
                                rel="noreferrer"
                                color="lightBlue"
                                ripple="light"
                            >
                                Landing
                            </DropdownLink>
                            <DropdownLink
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                target="_blank"
                                rel="noreferrer"
                                color="lightBlue"
                                ripple="light"
                            >
                                Profile
                            </DropdownLink>
                            <DropdownLink
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login"
                                target="_blank"
                                rel="noreferrer"
                                color="lightBlue"
                                ripple="light"
                            >
                                Login
                            </DropdownLink>
                            <DropdownLink
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register"
                                target="_blank"
                                rel="noreferrer"
                                color="lightBlue"
                                ripple="light"
                            >
                                Register
                            </DropdownLink>
                            <DropdownLink
                                href="https://demos.creative-tim.com/material-tailwind-dashboard-react/#/"
                                target="_blank"
                                rel="noreferrer"
                                color="lightBlue"
                                ripple="light"
                            >
                                Dashboard
                            </DropdownLink>
                        </Dropdown>
                        <NavLink
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
                        </NavLink>
                        <NavLink
                            href="https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind"
                            target="_blank"
                            rel="noreferrer"
                            ripple="dark"
                        >
                            <div className="text-gray-900">Issues</div>
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
