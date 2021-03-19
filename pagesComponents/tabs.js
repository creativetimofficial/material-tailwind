import React, { useState } from 'react';
import Tab from 'components/Tabs/Tab';
import TabList from 'components/Tabs/TabList';
import TabItem from 'components/Tabs/TabItem';
import TabContent from 'components/Tabs/TabContent';
import TabPane from 'components/Tabs/TabPane';
import Icon from 'components/Icon/Icon';
import Ripple from 'material-ripple-effects';

export function TabIcons({ color }) {
  const [openTab, setOpenTab] = useState(1);
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, 'light');

  return (
    <Tab>
      <TabList color={color}>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          onMouseUp={rippleLight}
          active={openTab === 1 ? true : false}
          href="tabItem"
        >
          <Icon name="language" size="lg" />
          Discover
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          onMouseUp={rippleLight}
          active={openTab === 2 ? true : false}
          href="tabItem"
        >
          <Icon name="account_circle" size="lg" />
          Profile
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          onMouseUp={rippleLight}
          active={openTab === 3 ? true : false}
          href="tabItem"
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
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, 'light');

  return (
    <Tab>
      <TabList color={color}>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          onMouseUp={rippleLight}
          active={openTab === 1 ? true : false}
          href="tabItem"
        >
          Discover
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          onMouseUp={rippleLight}
          active={openTab === 2 ? true : false}
          href="tabItem"
        >
          Profile
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          onMouseUp={rippleLight}
          active={openTab === 3 ? true : false}
          href="tabItem"
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
