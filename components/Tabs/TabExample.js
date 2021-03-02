import React from 'react';
import Tab from './Tab';
import TabList from './TabList';
import TabItem from './TabItem';
import TabContent from './TabContent';
import TabPane from './TabPane';
import Icon from 'components/Icon/Icon';

const TabExample = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <Tab>
      <TabList color="pink">
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
};

export default TabExample;
