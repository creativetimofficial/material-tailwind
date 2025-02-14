# Change Log

## [3.0.0-beta.7] 2025-02-14

- Fix index.d.ts file not being generated correctly
- Removed rollup.config.mjs file from the package
- Removed package.json file from the package
- Removed src folder from the package

## [3.0.0-beta.6] 2025-02-13

- Fix exports issue

## [3.0.0-beta.5] 2025-02-13

- Fix type definitions on import from NPM in NextJS
- Fix name for the global object MaterialTailwind

## [3.0.0-beta.4] 2025-02-12

- Now Dropdown component support the value "menu" for initial state

## [3.0.0-beta.3] 2025-02-12

- Accordion component renamed props to match the new TypeScript implementation
- Added CHANGELOG.md

## [3.0.0-beta.2] 2025-02-12

### Added for NPM

- Added TypeScript support for all JavaScript components
  - Accordion component rewritten in TypeScript
    - Added AccordionConfig interface and IAccordion interface
    - Added programmatic Accordion class implementation
  - Gallery component rewritten in TypeScript
  - Stepper component rewritten in TypeScript
    - Added StepperConfig interface and IStepper interface
    - Added programmatic Stepper class implementation
  - Popover component rewritten in TypeScript
    - Added PopoverConfig interface and IPopover interface
    - Added programmatic Popover class implementation
  - Tooltip component rewritten in TypeScript
    - Added TooltipConfig interface and ITooltip interface
    - Added programmatic Tooltip class implementation
  - Tabs component rewritten in TypeScript
    - Added TabsConfig interface and ITabs interface
    - Added programmatic Tabs class implementation
  - Modal component rewritten in TypeScript
    - Added ModalConfig interface and IModal interface
    - Added programmatic Modal class implementation
  - Dropdown component rewritten in TypeScript
    - Added DropdownConfig interface and IDropdown interface
    - Added programmatic Dropdown class implementation
  - Collapse component rewritten in TypeScript
    - Added CollapseConfig interface and ICollapse interface
    - Added programmatic Collapse class implementation
  - Alert component rewritten in TypeScript
  - All future components will be written in TypeScript
  - Added TypeScript type definitions and interfaces
  - Improved type safety and developer experience with strict typing
