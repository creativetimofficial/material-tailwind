const isProd = process.env.NODE_ENV === "production";

const getDocsTypeFromUrl = (url: string) => {
  if (url.includes('html')) {
    return 'html';
  } else if (url.includes('react')) {
    return 'react';
  }
  return '';
};

const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
const routePrefix = isProd ? `/docs/v3/${getDocsTypeFromUrl(currentUrl)}` : `/docs/${getDocsTypeFromUrl(currentUrl)}`;

export const routes = [
  {
    title: "Getting Started",
    pages: [
      {
        title: "Installation",
        path: `${routePrefix}/installation`,
      },
      // {
      //   title: "Cli Usage",
      //   path: `${routePrefix}/cli`,
      // },
      {
        title: "License",
        path: `${routePrefix}/license`,
      },
      {
        title: "Release Notes",
        path: `${routePrefix}/release-notes`,
      },
    ],
  },
  {
    title: "Upgrade Guide",
    pages: [
      {
        title: "v1 to v2",
        path: `${routePrefix}/migration/v2`,
      },
      {
        title: "v2 to v3",
        path: `${routePrefix}/migration/v3`,
      },
    ],
  },
  {
    title: "Integration Guide",
    pages: [
      {
        title: "Next.js",
        path: `${routePrefix}/guide/next`,
      },
      {
        title: "Remix",
        path: `${routePrefix}/guide/remix`,
      },
      {
        title: "Astro",
        path: `${routePrefix}/guide/astro`,
      },
      {
        title: "Vite",
        path: `${routePrefix}/guide/vite`,
      },
      {
        title: "Gatsby",
        path: `${routePrefix}/guide/gatsby`,
      },
      {
        title: "Create React App",
        path: `${routePrefix}/guide/cra`,
      },
    ],
  },
  {
    title: "Customization",
    pages: [
      {
        title: "Theming",
        path: `${routePrefix}/theming`,
      },
      {
        title: "Colors",
        path: `${routePrefix}/colors`,
      },
      {
        title: "Fonts",
        path: `${routePrefix}/fonts`,
      },
      {
        title: "Breakpoints",
        path: `${routePrefix}/breakpoints`,
      },
      // {
      //   title: "Dark Mode",
      //   path: `${routePrefix}/dark-mode`,
      // },
      // {
      //   title: "Components",
      //   path: `${routePrefix}/components`,
      // },
    ],
  },
  {
    title: "Components",
    categories: [
      {
        category: "Core Elements",
        pages: [
          {
            title: "Button",
            path: `${routePrefix}/button`,
          },
          {
            title: "Button Group",
            path: `${routePrefix}/button-group`,
          },
          {
            title: "Icon Button",
            path: `${routePrefix}/icon-button`,
          },
          {
            title: "Rating Bar",
            path: `${routePrefix}/rating`,
          },
          {
            title: "Slider",
            path: `${routePrefix}/slider`,
          },
          {
            title: "Switch",
            path: `${routePrefix}/switch`,
          },
          {
            title: "Skeleton",
            path: `${routePrefix}/Skeleton`,
          },
        ],
      },
      {
        category: "Forms",
        pages: [
          {
            title: "Checkbox",
            path: `${routePrefix}/checkbox`,
          },
          {
            title: "Input",
            path: `${routePrefix}/input`,
          },
          {
            title: "Input Number",
            path: `${routePrefix}/input-number`,
          },
          {
            title: "Radio",
            path: `${routePrefix}/radio`,
          },
          {
            title: "Select",
            path: `${routePrefix}/select`,
          },
          
          {
            title: "Textarea",
            path: `${routePrefix}/textarea`,
          },
        ],
      },
      {
        category: "Data Display",
        pages: [
          {
            title: "Accordion",
            path: `${routePrefix}/accordion`,
          },
          {
            title: "Alert",
            path: `${routePrefix}/alert`,
          },
          {
            title: "Avatar",
            path: `${routePrefix}/avatar`,
          },
          {
            title: "Badge",
            path: `${routePrefix}/badge`,
          },
          {
            title: "Card",
            path: `${routePrefix}/card`,
          },
          {
            title: "Chip",
            path: `${routePrefix}/chip`,
          },
          {
            title: "Collapse",
            path: `${routePrefix}/collapse`,
          },
          {
            title: "Dialog",
            path: `${routePrefix}/dialog`,
          },
          {
            title: "Dropdown",
            path: `${routePrefix}/dropdown`,
          },
          {
            title: "Image",
            path: `${routePrefix}/image`,
          },
          {
            title: "List",
            path: `${routePrefix}/list`,
          },
          {
            title: "Modal",
            path: `${routePrefix}/modal`,
          },
          {
            title: "Popover",
            path: `${routePrefix}/popover`,
          },
          {
            title: "Progress Bar",
            path: `${routePrefix}/progress`,
          },
          {
            title: "Spinner",
            path: `${routePrefix}/spinner`,
          },
          {
            title: "Table",
            path: `${routePrefix}/table`,
          },
          {
            title: "Timeline",
            path: `${routePrefix}/timeline`,
          },
          {
            title: "Tooltip",
            path: `${routePrefix}/tooltip`,
          },
          {
            title: "Typography",
            path: `${routePrefix}/typography`,
          },
          {
            title: "Video",
            path: `${routePrefix}/video`,
          },
        ],
      },
      {
        category: "Navigation",
        pages: [
          {
            title: "Breadcrumb",
            path: `${routePrefix}/breadcrumb`,
          },
          {
            title: "Drawer",
            path: `${routePrefix}/drawer`,
          },
          {
            title: "Menu",
            path: `${routePrefix}/menu`,
          },
          {
            title: "Pagination",
            path: `${routePrefix}/pagination`,
          },
          {
            title: "Speed Dial",
            path: `${routePrefix}/speed-dial`,
          },
          {
            title: "Stepper",
            path: `${routePrefix}/stepper`,
          },
          {
            title: "Tabs",
            path: `${routePrefix}/tabs`,
          },
        ],
      },
      {
        category: "Layout",
        pages: [
          {
            title: "Footer",
            path: `${routePrefix}/footer`,
          },
          {
            title: "Gallery",
            path: `${routePrefix}/gallery`,
          },
          {
            title: "Navbar",
            path: `${routePrefix}/navbar`,
          },
          {
            title: "Sidebar",
            path: `${routePrefix}/sidebar`,
          },
          
        ],
      },
    ],
  },
  
  {
    title: "Plugins",
    pages: [
      {
        title: "Algolia Search",
        path: `${routePrefix}/plugins/algolia-search`,
      },
      {
        title: "Apexcharts",
        path: `${routePrefix}/plugins/apexcharts`,
      },
      {
        title: "Data Table",
        path: `${routePrefix}/plugins/data-table`,
      },
      {
        title: "Date Picker",
        path: `${routePrefix}/plugins/date-picker`,
      },
      {
        title: "React Hook Form",
        path: `${routePrefix}/plugins/forms`,
      },
      {
        title: "Carousel",
        path: `${routePrefix}/plugins/carousel`,
      },
      {
        title: "Text Editor",
        path: `${routePrefix}/plugins/text-editor`,
      },
    ],
  },
];

export default routes;
