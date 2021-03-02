import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import Collapse from 'components/Navbar/Collapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';
import NavbarInput from 'components/Navbar/NavbarInput';
import Icon from 'components/Icon/Icon';
import 'ripple/ripple';

const NavbarExample = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="pink">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand color="white">Navbar</NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
          />
        </NavbarWrapper>

        <Collapse open={openNavbar}>
          <Nav navbar>
            <NavItem
              active="light"
              color="white"
              href="#navbar"
              data-md-ripple-light={true}
            >
              <Icon name="language" size="xl" />
              Discover
            </NavItem>
            <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
              <Icon name="account_circle" size="xl" />
              Profile
            </NavItem>
            <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
              <Icon name="settings" size="xl" />
              Settings
            </NavItem>
          </Nav>
          <NavbarInput type="text" placeholder="Search here" />
        </Collapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarExample;
