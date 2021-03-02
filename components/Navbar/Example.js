import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarNav from 'components/Navbar/NavbarNav';
import NavbarList from 'components/Navbar/NavbarList';
import NavbarItem from 'components/Navbar/NavbarItem';
import NavbarInput from 'components/Navbar/NavbarInput';
import Icon from 'components/Icon/Icon';
import DropdownItems from 'components/Dropdowns/DropdownItems';
import Dropdowns from 'components/Dropdowns/Dropdowns';
import 'ripple/ripple';

const Example = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="pink">
      <NavbarContainer>
        <NavbarBrand toggler={() => setOpenNavbar(!openNavbar)}>
          Navbar
        </NavbarBrand>
        <NavbarNav toggler={openNavbar}>
          <NavbarList>
            <NavbarItem active href="#navbar" data-md-ripple-light={true}>
              <Icon name="language" size="xl" />
              Discover
            </NavbarItem>
            <NavbarItem href="#navbar" data-md-ripple-light={true}>
              <Icon name="account_circle" size="xl" />
              Profile
            </NavbarItem>
            <NavbarItem href="#navbar" data-md-ripple-light={true}>
              <Icon name="settings" size="xl" />
              Settings
            </NavbarItem>

            <Dropdowns
              color="white"
              type="link"
              buttonText="Dropdown Text"
              data-md-ripple-light={true}
            >
              <DropdownItems href="#">Hello 1</DropdownItems>
              <DropdownItems>Hello 2</DropdownItems>
              <DropdownItems>Hello 3</DropdownItems>
            </Dropdowns>
          </NavbarList>

          <NavbarInput type="text" placeholder="Search here" />
        </NavbarNav>
      </NavbarContainer>
    </Navbar>
  );
};

export default Example;
