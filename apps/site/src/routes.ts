const isProd = process.env.NODE_ENV === "production";

const getDocsTypeFromUrl = () => {
  if (typeof window === 'undefined') {
    return 'react'; // Default value for SSR
  }
  
  const path = window.location.pathname;
  if (path.includes('/html/')) {
    return 'html';
  } else if (path.includes('/react/')) {
    return 'react';
  }
  return 'react'; // Default fallback
};

// Move this into a useMemo or useEffect in a client component
// const routePrefix = isProd ? `/docs/v3/${getDocsTypeFromUrl()}` : `/docs/${getDocsTypeFromUrl()}`;

// For SSR safety, use a function instead of direct value
const getRoutePrefix = () => {
  const docsType = getDocsTypeFromUrl();
  return isProd ? `/docs/v3/${docsType}` : `/docs/${docsType}`;
};

export const routes = [
  {
    title: "Getting Started",
    pages: [
      {
        title: "Installation",
        get path() { return `${getRoutePrefix()}/installation` },
      },
      // {
      //   title: "Cli Usage",
      //   path: `${routePrefix}/cli`,
      // },
      {
        title: "License",
        path: `${getRoutePrefix()}/license`,
      },
      {
        title: "Release Notes",
        path: `${getRoutePrefix()}/release-notes`,
      },
    ],
  },
  {
    title: "Upgrade Guide",
    pages: [
      {
        title: "v1 to v2",
        path: `${getRoutePrefix()}/migration/v2`,
      },
      {
        title: "v2 to v3",
        path: `${getRoutePrefix()}/migration/v3`,
      },
    ],
  },
  {
    title: "Integration Guide",
    pages: [
      {
        title: "Next.js",
        path: `${getRoutePrefix()}/guide/next`,
      },
      {
        title: "Remix",
        path: `${getRoutePrefix()}/guide/remix`,
      },
      {
        title: "Astro",
        path: `${getRoutePrefix()}/guide/astro`,
      },
      {
        title: "Vite",
        path: `${getRoutePrefix()}/guide/vite`,
      },
      {
        title: "Gatsby",
        path: `${getRoutePrefix()}/guide/gatsby`,
      },
      {
        title: "Create React App",
        path: `${getRoutePrefix()}/guide/cra`,
      },
    ],
  },
  {
    title: "Customization",
    pages: [
      {
        title: "Theming",
        path: `${getRoutePrefix()}/theming`,
      },
      {
        title: "Colors",
        path: `${getRoutePrefix()}/colors`,
      },
      {
        title: "Fonts",
        path: `${getRoutePrefix()}/fonts`,
      },
      {
        title: "Breakpoints",
        path: `${getRoutePrefix()}/breakpoints`,
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
            path: `${getRoutePrefix()}/button`,
          },
          {
            title: "Button Group",
            path: `${getRoutePrefix()}/button-group`,
          },
          {
            title: "Icon Button",
            path: `${getRoutePrefix()}/icon-button`,
          },
          {
            title: "Rating Bar",
            path: `${getRoutePrefix()}/rating`,
          },
          {
            title: "Slider",
            path: `${getRoutePrefix()}/slider`,
          },
          {
            title: "Switch",
            path: `${getRoutePrefix()}/switch`,
          },
        ],
      },
      {
        category: "Forms",
        pages: [
          {
            title: "Checkbox",
            path: `${getRoutePrefix()}/checkbox`,
          },
          {
            title: "Input",
            path: `${getRoutePrefix()}/input`,
          },
          {
            title: "Radio",
            path: `${getRoutePrefix()}/radio`,
          },
          {
            title: "Select",
            path: `${getRoutePrefix()}/select`,
          },
          
          {
            title: "Textarea",
            path: `${getRoutePrefix()}/textarea`,
          },
        ],
      },
      {
        category: "Data Display",
        pages: [
          {
            title: "Accordion",
            path: `${getRoutePrefix()}/accordion`,
          },
          {
            title: "Alert",
            path: `${getRoutePrefix()}/alert`,
          },
          {
            title: "Avatar",
            path: `${getRoutePrefix()}/avatar`,
          },
          {
            title: "Badge",
            path: `${getRoutePrefix()}/badge`,
          },
          {
            title: "Card",
            path: `${getRoutePrefix()}/card`,
          },
          {
            title: "Chip",
            path: `${getRoutePrefix()}/chip`,
          },
          {
            title: "Collapse",
            path: `${getRoutePrefix()}/collapse`,
          },
          {
            title: "Dialog",
            path: `${getRoutePrefix()}/dialog`,
          },
          {
            title: "Dropdown",
            path: `${getRoutePrefix()}/dropdown`,
          },
          {
            title: "Image",
            path: `${getRoutePrefix()}/image`,
          },
          {
            title: "List",
            path: `${getRoutePrefix()}/list`,
          },
          {
            title: "Modal",
            path: `${getRoutePrefix()}/modal`,
          },
          {
            title: "Popover",
            path: `${getRoutePrefix()}/popover`,
          },
          {
            title: "Progress Bar",
            path: `${getRoutePrefix()}/progress`,
          },
          {
            title: "Spinner",
            path: `${getRoutePrefix()}/spinner`,
          },
          {
            title: "Table",
            path: `${getRoutePrefix()}/table`,
          },
          {
            title: "Timeline",
            path: `${getRoutePrefix()}/timeline`,
          },
          {
            title: "Tooltip",
            path: `${getRoutePrefix()}/tooltip`,
          },
          {
            title: "Typography",
            path: `${getRoutePrefix()}/typography`,
          },
          {
            title: "Video",
            path: `${getRoutePrefix()}/video`,
          },
        ],
      },
      {
        category: "Navigation",
        pages: [
          {
            title: "Breadcrumb",
            path: `${getRoutePrefix()}/breadcrumb`,
          },
          {
            title: "Drawer",
            path: `${getRoutePrefix()}/drawer`,
          },
          {
            title: "Menu",
            path: `${getRoutePrefix()}/menu`,
          },
          {
            title: "Pagination",
            path: `${getRoutePrefix()}/pagination`,
          },
          {
            title: "Speed Dial",
            path: `${getRoutePrefix()}/speed-dial`,
          },
          {
            title: "Stepper",
            path: `${getRoutePrefix()}/stepper`,
          },
          {
            title: "Tabs",
            path: `${getRoutePrefix()}/tabs`,
          },
        ],
      },
      {
        category: "Layout",
        pages: [
          {
            title: "Footer",
            path: `${getRoutePrefix()}/footer`,
          },
          {
            title: "Gallery",
            path: `${getRoutePrefix()}/gallery`,
          },
          {
            title: "Navbar",
            path: `${getRoutePrefix()}/navbar`,
          },
          {
            title: "Sidebar",
            path: `${getRoutePrefix()}/sidebar`,
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
        path: `${getRoutePrefix()}/plugins/algolia-search`,
      },
      {
        title: "Apexcharts",
        path: `${getRoutePrefix()}/plugins/apexcharts`,
      },
      {
        title: "Data Table",
        path: `${getRoutePrefix()}/plugins/data-table`,
      },
      {
        title: "Date Picker",
        path: `${getRoutePrefix()}/plugins/date-picker`,
      },
      {
        title: "React Hook Form",
        path: `${getRoutePrefix()}/plugins/forms`,
      },
      {
        title: "Carousel",
        path: `${getRoutePrefix()}/plugins/carousel`,
      },
      {
        title: "Text Editor",
        path: `${getRoutePrefix()}/plugins/text-editor`,
      },
    ],
  },
];

export default routes;
