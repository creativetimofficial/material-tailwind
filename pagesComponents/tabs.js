import React, { useState } from 'react';
import Tab from 'components/Tabs/Tab';
import TabList from 'components/Tabs/TabList';
import TabItem from 'components/Tabs/TabItem';
import TabContent from 'components/Tabs/TabContent';
import TabPane from 'components/Tabs/TabPane';
import Icon from 'components/Icon/Icon';

export function TabIcons({ color }) {
  const [openTab, setOpenTab] = useState(1);

  return (
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
            I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at. So when
            you get something that has the name Kanye West on it, it’s supposed
            to be pushing the furthest possibilities. I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus.
          </p>
        </TabPane>
        <TabPane active={openTab === 2 ? true : false}>
          <p>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </TabPane>
        <TabPane active={openTab === 3 ? true : false}>
          <p>
            I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at. So when
            you get something that has the name Kanye West on it, it’s supposed
            to be pushing the furthest possibilities. I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus.
          </p>
        </TabPane>
      </TabContent>
    </Tab>
  );
}

export function TabLinks({ color }) {
  const [openTab, setOpenTab] = useState(1);

  return (
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
          Settings
        </TabItem>
      </TabList>

      <TabContent>
        <TabPane active={openTab === 1 ? true : false}>
          <p>
            I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at. So when
            you get something that has the name Kanye West on it, it’s supposed
            to be pushing the furthest possibilities. I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus.
          </p>
        </TabPane>
        <TabPane active={openTab === 2 ? true : false}>
          <p>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </TabPane>
        <TabPane active={openTab === 3 ? true : false}>
          <p>
            I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at. So when
            you get something that has the name Kanye West on it, it’s supposed
            to be pushing the furthest possibilities. I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus.
          </p>
        </TabPane>
      </TabContent>
    </Tab>
  );
}
