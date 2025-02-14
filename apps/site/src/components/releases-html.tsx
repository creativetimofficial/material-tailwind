export const releases = [
  {
    version: "3.0.0-beta.7",
    date: "February 14, 2025",
    name: "@material-tailwind/html",
    description: "Material Tailwind HTML v3.0.0-beta.7",
    content: [
      {
        title: "Changes",
        data: [
          "Fix index.d.ts file not being generated correctly",
          "Removed rollup.config.mjs file from the package",
          "Removed package.json file from the package", 
          "Removed src folder from the package"
        ]
      }
    ]
  },
  {
    version: "3.0.0-beta.6",
    date: "February 13, 2025", 
    name: "@material-tailwind/html",
    description: "Material Tailwind HTML v3.0.0-beta.6",
    content: [
      {
        title: "Changes",
        data: [
          "Fix exports issue"
        ]
      }
    ]
  },
  {
    version: "3.0.0-beta.5",
    date: "February 13, 2025",
    name: "@material-tailwind/html", 
    description: "Material Tailwind HTML v3.0.0-beta.5",
    content: [
      {
        title: "Changes",
        data: [
          "Fix type definitions on import from NPM in NextJS",
          "Fix name for the global object MaterialTailwind"
        ]
      }
    ]
  },
  {
    version: "3.0.0-beta.4",
    date: "February 12, 2025",
    name: "@material-tailwind/html",
    description: "Material Tailwind HTML v3.0.0-beta.4", 
    content: [
      {
        title: "Changes",
        data: [
          "Now Dropdown component support the value \"menu\" for initial state"
        ]
      }
    ]
  },
  {
    version: "3.0.0-beta.3",
    date: "February 12, 2025",
    name: "@material-tailwind/html",
    description: "Material Tailwind HTML v3.0.0-beta.3",
    content: [
      {
        title: "Changes",
        data: [
          "Accordion component renamed props to match the new TypeScript implementation",
          "Added CHANGELOG.md"
        ]
      }
    ]
  },
  {
    version: "3.0.0-beta.2",
    date: "February 12, 2025",
    name: "@material-tailwind/html",
    description: "Material Tailwind HTML v3.0.0-beta.2",
    content: [
      {
        title: "Added for NPM",
        data: [
          "Added TypeScript support for all JavaScript components",
          "Accordion component rewritten in TypeScript with AccordionConfig and IAccordion interfaces",
          "Gallery component rewritten in TypeScript",
          "Stepper component rewritten in TypeScript with StepperConfig and IStepper interfaces",
          "Popover component rewritten in TypeScript with PopoverConfig and IPopover interfaces",
          "Tooltip component rewritten in TypeScript with TooltipConfig and ITooltip interfaces",
          "Tabs component rewritten in TypeScript with TabsConfig and ITabs interfaces",
          "Modal component rewritten in TypeScript with ModalConfig and IModal interfaces",
          "Dropdown component rewritten in TypeScript with DropdownConfig and IDropdown interfaces",
          "Collapse component rewritten in TypeScript with CollapseConfig and ICollapse interfaces",
          "Alert component rewritten in TypeScript",
          "All future components will be written in TypeScript",
          "Added TypeScript type definitions and interfaces",
          "Improved type safety and developer experience with strict typing"
        ]
      }
    ]
  }
];

export default releases;
