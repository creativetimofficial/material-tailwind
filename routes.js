const routes = [
  {
    name: "Getting Started",
    path: "/documentation/quick-start",
    routes: [
      {
        path: "/documentation/quick-start",
        name: "Quick Start"
      },
      {
        path: "/documentation/download",
        name: "Download"
      },
      {
        path: "/documentation/license",
        name: "License"
      },
      {
        path: "/documentation/build-tools",
        name: "BuildTools"
      }
    ]
  },
  {
    name: "Example Pages",
    path: "/documentation/landing",
    routes: [
      {
        path: "/documentation/landing",
        name: "Landing"
      },
      {
        path: "/documentation/profile",
        name: "Profile"
      },
      {
        path: "/documentation/login",
        name: "Login"
      },
      {
        path: "/documentation/dashboard",
        name: "Dashboard"
      },
      {
        path: "/documentation/register",
        name: "Register (Soon)",
        disabled: true
      },
      {
        path: "/documentation/settings",
        name: "Settings Page (Soon)",
        disabled: true
      }
    ]
  },
  {
    name: "CSS Components",
    path: "/documentation/css/alerts",
    routes: [
      {
        path: "/documentation/css/alerts",
        name: "Alerts"
      },
      {
        name: "Buttons",
        state: "buttonsState",
        subRoutes: [
          {
            path: "/documentation/css/buttons/small/filled",
            name: "Small Filled"
          },
          {
            path: "/documentation/css/buttons/regular/filled",
            name: "Regular Filled"
          },
          {
            path: "/documentation/css/buttons/large/filled",
            name: "Large Filled"
          },
          {
            path: "/documentation/css/buttons/small/outline",
            name: "Small Outline"
          },
          {
            path: "/documentation/css/buttons/regular/outline",
            name: "Regular Outline"
          },
          {
            path: "/documentation/css/buttons/large/outline",
            name: "Large Outline"
          },
          {
            path: "/documentation/css/buttons/links",
            name: "Links"
          }
        ]
      },
      {
        path: "/documentation/css/images",
        name: "Images"
      },
      {
        name: "Inputs",
        state: "inputsState",
        subRoutes: [
          {
            path: "/documentation/css/inputs/small",
            name: "Small Inputs"
          },
          {
            path: "/documentation/css/inputs/regular",
            name: "Regular Inputs"
          },
          {
            path: "/documentation/css/inputs/large",
            name: "Large Inputs"
          }
        ]
      },
      {
        path: "/documentation/css/labels",
        name: "Labels"
      },
      {
        path: "/documentation/css/menus",
        name: "Menus"
      },

      {
        path: "/documentation/css/navbars",
        name: "Navbars"
      },
      {
        name: "Pagination",
        state: "paginationState",
        subRoutes: [
          {
            path: "/documentation/css/pagination/with-numbers",
            name: "Only Numbers"
          },
          {
            path: "/documentation/css/pagination/with-previous",
            name: "Prev and Next"
          },
          {
            path: "/documentation/css/pagination/with-first",
            name: "First and Last"
          }
        ]
      },
      {
        path: "/documentation/css/progressbars",
        name: "Progressbars"
      },
      {
        name: "Typography",
        state: "typographyState",
        subRoutes: [
          {
            path: "/documentation/css/typography/headings",
            name: "Headings"
          },
          {
            path: "/documentation/css/typography/paragraphs",
            name: "Paragraphs"
          }
        ]
      }
    ]
  },
  {
    name: "Vue.js Components",
    path: "/documentation/vue/alerts",
    routes: [
      {
        path: "/documentation/vue/alerts",
        name: "Alerts"
      },
      {
        name: "Dropdowns",
        state: "vueJSDropdownsState",
        subRoutes: [
          {
            path: "/documentation/vue/dropdown",
            name: "Dropdown"
          },
          {
            path: "/documentation/vue/dropup",
            name: "Dropup"
          }
        ]
      },
      {
        path: "/documentation/vue/menus",
        name: "Menus"
      },
      {
        name: "Modals",
        state: "vueJSModalsState",
        subRoutes: [
          {
            path: "/documentation/vue/modals/small",
            name: "Small"
          },
          {
            path: "/documentation/vue/modals/regular",
            name: "Regular"
          },
          {
            path: "/documentation/vue/modals/large",
            name: "Large"
          }
        ]
      },
      {
        path: "/documentation/vue/navbars",
        name: "Navbars"
      },
      {
        name: "Popovers",
        state: "vueJSPopoversState",
        subRoutes: [
          {
            path: "/documentation/vue/popovers/left",
            name: "Left"
          },
          {
            path: "/documentation/vue/popovers/top",
            name: "Top"
          },
          {
            path: "/documentation/vue/popovers/right",
            name: "Right"
          },
          {
            path: "/documentation/vue/popovers/bottom",
            name: "Bottom"
          }
        ]
      },
      {
        name: "Tabs",
        state: "vueJSTabsState",
        subRoutes: [
          {
            path: "/documentation/vue/tabs/text",
            name: "Text"
          },
          {
            path: "/documentation/vue/tabs/icons",
            name: "Icons"
          }
        ]
      },
      {
        name: "Tooltips",
        state: "vueJSTooltipsState",
        subRoutes: [
          {
            path: "/documentation/vue/tooltips/left",
            name: "Left"
          },
          {
            path: "/documentation/vue/tooltips/top",
            name: "Top"
          },
          {
            path: "/documentation/vue/tooltips/right",
            name: "Right"
          },
          {
            path: "/documentation/vue/tooltips/bottom",
            name: "Bottom"
          }
        ]
      }
    ]
  },
  {
    name: "React.js Components",
    path: "/documentation/react/alerts",
    routes: [
      {
        path: "/documentation/react/alerts",
        name: "Alerts"
      },
      {
        name: "Dropdowns",
        state: "reactDropdownsState",
        subRoutes: [
          {
            path: "/documentation/react/dropdown",
            name: "Dropdown"
          },
          {
            path: "/documentation/react/dropup",
            name: "Dropup"
          }
        ]
      },
      {
        path: "/documentation/react/menus",
        name: "Menus"
      },
      {
        name: "Modals",
        state: "reactModalsState",
        subRoutes: [
          {
            path: "/documentation/react/modals/small",
            name: "Small"
          },
          {
            path: "/documentation/react/modals/regular",
            name: "Regular"
          },
          {
            path: "/documentation/react/modals/large",
            name: "Large"
          }
        ]
      },
      {
        path: "/documentation/react/navbars",
        name: "Navbars"
      },
      {
        name: "Popovers",
        state: "reactPopoversState",
        subRoutes: [
          {
            path: "/documentation/react/popovers/left",
            name: "Left"
          },
          {
            path: "/documentation/react/popovers/top",
            name: "Top"
          },
          {
            path: "/documentation/react/popovers/right",
            name: "Right"
          },
          {
            path: "/documentation/react/popovers/bottom",
            name: "Bottom"
          }
        ]
      },
      {
        name: "Tabs",
        state: "reactTabsState",
        subRoutes: [
          {
            path: "/documentation/react/tabs/text",
            name: "Text"
          },
          {
            path: "/documentation/react/tabs/icons",
            name: "Icons"
          }
        ]
      },
      {
        name: "Tooltips",
        state: "reactTooltipsState",
        subRoutes: [
          {
            path: "/documentation/react/tooltips/left",
            name: "Left"
          },
          {
            path: "/documentation/react/tooltips/top",
            name: "Top"
          },
          {
            path: "/documentation/react/tooltips/right",
            name: "Right"
          },
          {
            path: "/documentation/react/tooltips/bottom",
            name: "Bottom"
          }
        ]
      }
    ]
  },
  {
    name: "Angular Components",
    path: "/documentation/angular/alerts",
    routes: [
      {
        path: "/documentation/angular/alerts",
        name: "Alerts"
      },
      {
        name: "Dropdowns",
        state: "angularDropdownsState",
        subRoutes: [
          {
            path: "/documentation/angular/dropdown",
            name: "Dropdown"
          },
          {
            path: "/documentation/angular/dropup",
            name: "Dropup"
          }
        ]
      },
      {
        path: "/documentation/angular/menus",
        name: "Menus"
      },
      {
        name: "Modals",
        state: "angularModalsState",
        subRoutes: [
          {
            path: "/documentation/angular/modals/small",
            name: "Small"
          },
          {
            path: "/documentation/angular/modals/regular",
            name: "Regular"
          },
          {
            path: "/documentation/angular/modals/large",
            name: "Large"
          }
        ]
      },
      {
        path: "/documentation/angular/navbars",
        name: "Navbars"
      },
      {
        name: "Popovers",
        state: "angularPopoversState",
        subRoutes: [
          {
            path: "/documentation/angular/popovers/left",
            name: "Left"
          },
          {
            path: "/documentation/angular/popovers/top",
            name: "Top"
          },
          {
            path: "/documentation/angular/popovers/right",
            name: "Right"
          },
          {
            path: "/documentation/angular/popovers/bottom",
            name: "Bottom"
          }
        ]
      },
      {
        name: "Tabs",
        state: "angularTabsState",
        subRoutes: [
          {
            path: "/documentation/angular/tabs/text",
            name: "Text"
          },
          {
            path: "/documentation/angular/tabs/icons",
            name: "Icons"
          }
        ]
      },
      {
        name: "Tooltips",
        state: "angularTooltipsState",
        subRoutes: [
          {
            path: "/documentation/angular/tooltips/left",
            name: "Left"
          },
          {
            path: "/documentation/angular/tooltips/top",
            name: "Top"
          },
          {
            path: "/documentation/angular/tooltips/right",
            name: "Right"
          },
          {
            path: "/documentation/angular/tooltips/bottom",
            name: "Bottom"
          }
        ]
      }
    ]
  },
  {
    name: "JavaScript Components",
    path: "/documentation/javascript/alerts",
    routes: [
      {
        path: "/documentation/javascript/alerts",
        name: "Alerts"
      },
      {
        name: "Dropdowns",
        state: "javascriptDropdownsState",
        subRoutes: [
          {
            path: "/documentation/javascript/dropdown",
            name: "Dropdown"
          },
          {
            path: "/documentation/javascript/dropup",
            name: "Dropup"
          }
        ]
      },
      {
        path: "/documentation/javascript/menus",
        name: "Menus"
      },
      {
        name: "Modals",
        state: "javascriptModalsState",
        subRoutes: [
          {
            path: "/documentation/javascript/modals/small",
            name: "Small"
          },
          {
            path: "/documentation/javascript/modals/regular",
            name: "Regular"
          },
          {
            path: "/documentation/javascript/modals/large",
            name: "Large"
          }
        ]
      },
      {
        path: "/documentation/javascript/navbars",
        name: "Navbars"
      },
      {
        name: "Popovers",
        state: "javascriptPopoversState",
        subRoutes: [
          {
            path: "/documentation/javascript/popovers/left",
            name: "Left"
          },
          {
            path: "/documentation/javascript/popovers/top",
            name: "Top"
          },
          {
            path: "/documentation/javascript/popovers/right",
            name: "Right"
          },
          {
            path: "/documentation/javascript/popovers/bottom",
            name: "Bottom"
          }
        ]
      },
      {
        name: "Tabs",
        state: "javascriptTabsState",
        subRoutes: [
          {
            path: "/documentation/javascript/tabs/text",
            name: "Text"
          },
          {
            path: "/documentation/javascript/tabs/icons",
            name: "Icons"
          }
        ]
      },
      {
        name: "Tooltips",
        state: "javascriptTooltipsState",
        subRoutes: [
          {
            path: "/documentation/javascript/tooltips/left",
            name: "Left"
          },
          {
            path: "/documentation/javascript/tooltips/top",
            name: "Top"
          },
          {
            path: "/documentation/javascript/tooltips/right",
            name: "Right"
          },
          {
            path: "/documentation/javascript/tooltips/bottom",
            name: "Bottom"
          }
        ]
      }
    ]
  }
];

export default routes;
