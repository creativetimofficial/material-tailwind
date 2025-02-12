// Utilities
import { loadPopperJs } from './utils/loadPopper';

// Alert Component
import { initAlert } from './alert/ts/alert';

// Gallery Component
import { initGallery, cleanupGallery } from './gallery/ts/gallery';

// Collapse Component
import { initCollapse } from './collapse/ts/collapse';
import { Collapse } from './collapse/ts/collapse-programmatic';
import type { CollapseConfig, ICollapse } from './collapse/ts/collapse.types';

// Dropdown Component
import { initDropdowns, cleanupDropdowns } from './dropdown/ts/dropdown';
import { Dropdown } from './dropdown/ts/dropdown-programmatic';
import type { DropdownConfig, IDropdown } from './dropdown/ts/dropdown.types';

// Popover Component
import { initPopovers, cleanupPopovers } from './popover/ts/popover';
import { Popover } from './popover/ts/popover-programmatic';
import type { PopoverConfig, IPopover } from './popover/ts/popover.types';

// Tooltip Component
import { initTooltips, cleanupTooltips } from './tooltip/ts/tooltip';
import { Tooltip } from './tooltip/ts/tooltip-programmatic';
import type { TooltipConfig, ITooltip } from './tooltip/ts/tooltip.types';

// Tabs Component
import { initTabs, cleanupTabs } from './tabs/ts/tabs';
import { Tabs } from './tabs/ts/tabs-programmatic';
import type { TabsConfig, ITabs } from './tabs/ts/tabs.types';

// Modal Component
import { initModal, cleanupModals } from './modal/ts/modal';
import { Modal } from './modal/ts/modal-programmatic'; // Export the Modal class
import type { ModalConfig, IModal } from './modal/ts/modal.types'; // Export types for external use


// Accordion Component
import { initAccordion, cleanupAccordions, toggleAccordionById } from './accordion/ts/accordion';
import { Accordion } from './accordion/ts/accordion-programmatic';
import type { AccordionConfig, IAccordion } from './accordion/ts/accordion.types';

// Stepper Component
import { initStepper, cleanupSteppers } from './stepper/ts/stepper';
import { Stepper } from './stepper/ts/stepper-programmatic';
import type { StepperConfig, IStepper } from './stepper/ts/stepper.types';

// Export individual components
export {
  initAlert,
  initCollapse,
  Collapse,
  initDropdowns,
  cleanupDropdowns,
  Dropdown,
  initPopovers,
  cleanupPopovers,
  Popover,
  initTooltips,
  cleanupTooltips,
  Tooltip,
  initTabs,
  cleanupTabs,
  Tabs,
  initModal,
  cleanupModals,
  Modal,
  initAccordion,
  cleanupAccordions,
  Accordion,
  toggleAccordionById,
  initStepper,
  cleanupSteppers,
  Stepper,
  initGallery,
  cleanupGallery,
};

export type { ModalConfig, IModal, DropdownConfig, IDropdown, CollapseConfig, ICollapse, PopoverConfig, IPopover, TabsConfig, ITabs, TooltipConfig, ITooltip, AccordionConfig, IAccordion, StepperConfig, IStepper };

// Aggregate all exports into a single object for UMD consumers
export const DavidAI = {
  initAlert,
  initCollapse,
  initDropdowns,
  cleanupDropdowns,
  initPopovers,
  cleanupPopovers,
  initTooltips,
  cleanupTooltips,
  initTabs,
  cleanupTabs,
  initModal,
  cleanupModals,
  initAccordion,
  cleanupAccordions,
  toggleAccordionById,
  initStepper,
  cleanupSteppers,
  initGallery,
  cleanupGallery,
};

// Global initialization function
export function initDavidAI(): void {
  // Initialize non-Popper components
  initAlert();
  initCollapse();
  initTabs();
  initModal();
  initAccordion();
  initStepper();
  initGallery();
  // Dynamically load Popper.js and initialize Popper-dependent components
  loadPopperJs()
    .then(() => {
      initDropdowns();
      initPopovers();
      initTooltips();
    })
    .catch((error:any) => {
      console.error('Failed to load Popper.js:', error);
    });
}

// Automatically initialize in the browser environment
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initDavidAI();

    // Observe DOM changes for dynamically added elements
    const observer = new MutationObserver(() => {
      initAlert();
      initCollapse();
      initAccordion();
      initStepper();
      initGallery();
      initTabs();
      initModal();
      initDropdowns();
      initPopovers();
      initTooltips();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Expose DavidAI globally for UMD usage
    (window as any).DavidAI = { ...DavidAI, initDavidAI };
  });
}

// Default export for ES modules
export default { ...DavidAI, initDavidAI };
