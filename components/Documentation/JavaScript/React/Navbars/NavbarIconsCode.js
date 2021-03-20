import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import NavbarCollapse from 'components/Navbar/NavbarCollapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';
import Icon from 'components/Icon/Icon';
import Ripple from 'material-ripple-effects';

export default function NavbarIconsCode({ copyText, onCopy }) {
  const [color, setColor] = useState('lightBlue');
  const [type] = useState('react');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();
  const [openNavbar, setOpenNavbar] = useState(false);
  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, 'light');

  const codeToShow = `import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import Icon from "@material-tailwind/react/Icon";
import Ripple from 'material-ripple-effects';

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const ripple = new Ripple();

  return (
    <Navbar color="${color}" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>Navbar</NavbarBrand>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavItem
              active="light"
              href="#navbar"
              onMouseUp={(e) => ripple.create(e, 'light')}
            >
              <Icon name="language" size="xl" />
            </NavItem>
            <NavItem href="#navbar" onMouseUp={(e) => ripple.create(e, 'light')}>
              <Icon name="account_circle" size="xl" />
            </NavItem>
            <NavItem href="#navbar" onMouseUp={(e) => ripple.create(e, 'light')}>
              <Icon name="settings" size="xl" />
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}`;

  return (
    <>
      {showModal ? (
        <>
          <div
            className="block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h5 className="text-2xl font-normal mt-0 mb-0 ">
                    Component not supported
                  </h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4">
                    At the moment we do not support the choosen framework (
                    {modalText}) for this component.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <DocsSnippet
        copyText={copyText}
        onCopy={onCopy}
        activeColor={color}
        activeFramework={type}
        codeToShow={codeToShow}
        onColorClick={(color) => setColor(color)}
        onFrameworkClick={onFrameworkClick}
      >
        <Navbar color={color} navbar>
          <NavbarContainer>
            <NavbarWrapper>
              <NavbarBrand>Navbar</NavbarBrand>
              <NavbarToggler onClick={() => setOpenNavbar(!openNavbar)} />
            </NavbarWrapper>

            <NavbarCollapse open={openNavbar}>
              <Nav>
                <NavItem active="light" href="#navbar" onMouseUp={rippleLight}>
                  <Icon name="language" size="xl" />
                </NavItem>
                <NavItem href="#navbar" onMouseUp={rippleLight}>
                  <Icon name="account_circle" size="xl" />
                </NavItem>
                <NavItem href="#navbar" onMouseUp={rippleLight}>
                  <Icon name="settings" size="xl" />
                </NavItem>
              </Nav>
            </NavbarCollapse>
          </NavbarContainer>
        </Navbar>
      </DocsSnippet>
    </>
  );
}
