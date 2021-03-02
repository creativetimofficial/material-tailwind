import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import Collapse from 'components/Navbar/Collapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';

const MenuText = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar color="pink">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand color="white">Menu with Text</NavbarBrand>
          <NavbarToggler color="white" onClick={() => setOpenMenu(!openMenu)} />
        </NavbarWrapper>

        <Collapse open={openMenu}>
          <Nav>
            <NavItem
              active="light"
              color="white"
              href="#navbar"
              data-md-ripple-light={true}
            >
              Discover
            </NavItem>
            <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
              Profile
            </NavItem>
            <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
              Settings
            </NavItem>
          </Nav>
        </Collapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default MenuText;
