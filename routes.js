const routes = [
  {
    name: 'Getting Started',
    path: '/documentation/quick-start',
    routes: [
      {
        path: '/documentation/quick-start',
        name: 'Quick Start',
      },
    ],
  },
  {
    name: 'React.js Components',
    path: '/documentation/react/alerts',
    routes: [
      {
        name: 'Alerts',
        state: 'reactAlertsState',

        subRoutes: [
          {
            path: '/documentation/react/alerts/alerts',
            name: 'Alerts',
          },
          {
            path: '/documentation/react/alerts/closingAlerts',
            name: 'Closing Alerts',
          },
        ],
      },
      {
        name: 'Dropdowns',
        state: 'reactDropdownsState',
        subRoutes: [
          {
            path: '/documentation/react/dropdown',
            name: 'Dropdown',
          },
          {
            path: '/documentation/react/dropup',
            name: 'Dropup',
          },
        ],
      },
      {
        path: '/documentation/react/menus',
        name: 'Menus',
      },
      {
        name: 'Modals',
        state: 'reactModalsState',
        subRoutes: [
          {
            path: '/documentation/react/modals/small',
            name: 'Small',
          },
          {
            path: '/documentation/react/modals/regular',
            name: 'Regular',
          },
          {
            path: '/documentation/react/modals/large',
            name: 'Large',
          },
        ],
      },
      {
        path: '/documentation/react/navbars',
        name: 'Navbars',
      },
      {
        name: 'Popovers',
        state: 'reactPopoversState',
        subRoutes: [
          {
            path: '/documentation/react/popovers/left',
            name: 'Left',
          },
          {
            path: '/documentation/react/popovers/top',
            name: 'Top',
          },
          {
            path: '/documentation/react/popovers/right',
            name: 'Right',
          },
          {
            path: '/documentation/react/popovers/bottom',
            name: 'Bottom',
          },
        ],
      },
      {
        name: 'Tabs',
        state: 'reactTabsState',
        subRoutes: [
          {
            path: '/documentation/react/tabs/text',
            name: 'Text',
          },
          {
            path: '/documentation/react/tabs/icons',
            name: 'Icons',
          },
        ],
      },
      {
        name: 'Tooltips',
        state: 'reactTooltipsState',
        subRoutes: [
          {
            path: '/documentation/react/tooltips/left',
            name: 'Left',
          },
          {
            path: '/documentation/react/tooltips/top',
            name: 'Top',
          },
          {
            path: '/documentation/react/tooltips/right',
            name: 'Right',
          },
          {
            path: '/documentation/react/tooltips/bottom',
            name: 'Bottom',
          },
        ],
      },
    ],
  },
];

export default routes;
