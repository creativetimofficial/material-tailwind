import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Tab from 'components/Tabs/Tab';
import TabList from 'components/Tabs/TabList';
import TabItem from 'components/Tabs/TabItem';
import TabContent from 'components/Tabs/TabContent';
import TabPane from 'components/Tabs/TabPane';
import Icon from 'components/Icon/Icon';
import 'ripple/ripple';

export default function AlertsCode({ copyText, onCopy }) {
  const [color, setColor] = useState('pink');
  const [type] = useState('react');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();
  const [openTab, setOpenTab] = useState(1);

  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

  const codeToShow = `import React from "react";
import Tab from "components/Tabs/Tab";
import TabList from "components/Tabs/TabList";
import TabItem from "components/Tabs/TabItem";
import TabContent from "components/Tabs/TabContent";
import TabPane from "components/Tabs/TabPane";
import Icon from "components/Icon/Icon";
import "ripple/ripple";

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <Tab>
      <TabList color="${color}">
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          active={openTab === 1 ? true : false}
          href="tabItem"
          data-md-ripple-light={true}
        >
          <Icon name="language" size="lg" />
          Discover
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          active={openTab === 2 ? true : false}
          href="tabItem"
          data-md-ripple-light={true}
        >
          <Icon name="account_circle" size="lg" />
          Profile
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          active={openTab === 3 ? true : false}
          href="tabItem"
          data-md-ripple-light={true}
        >
          <Icon name="settings" size="lg" />
          Settings
        </TabItem>
      </TabList>

      <TabContent>
        <TabPane active={openTab === 1 ? true : false}>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits.
            <br />
            <br /> Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </p>
        </TabPane>
        <TabPane active={openTab === 2 ? true : false}>
          <p>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
            <br />
            <br />
            Dynamically innovate resource-leveling customer service for state of
            the art customer service.
          </p>
        </TabPane>
        <TabPane active={openTab === 3 ? true : false}>
          <p>
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            <br />
            <br /> Dramatically maintain clicks-and-mortar solutions without
            functional solutions.
          </p>
        </TabPane>
      </TabContent>
    </Tab>
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
        <Tab>
          <TabList color={color}>
            <TabItem
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              active={openTab === 1 ? true : false}
              href="tabItem"
              data-md-ripple-light={true}
            >
              <Icon name="language" size="lg" />
              Discover
            </TabItem>
            <TabItem
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              active={openTab === 2 ? true : false}
              href="tabItem"
              data-md-ripple-light={true}
            >
              <Icon name="account_circle" size="lg" />
              Profile
            </TabItem>
            <TabItem
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              active={openTab === 3 ? true : false}
              href="tabItem"
              data-md-ripple-light={true}
            >
              <Icon name="settings" size="lg" />
              Settings
            </TabItem>
          </TabList>

          <TabContent>
            <TabPane active={openTab === 1 ? true : false}>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
                <br />
                <br /> Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </TabPane>
            <TabPane active={openTab === 3 ? true : false}>
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br /> Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </TabPane>
          </TabContent>
        </Tab>
      </DocsSnippet>
    </>
  );
}
