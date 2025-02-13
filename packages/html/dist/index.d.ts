import { Instance, Placement } from '@popperjs/core';

declare function initAlert(): void;

declare function initGallery(): void;
declare function cleanupGallery(): void;

/**
 * Initializes collapsible buttons by attaching event listeners.
 */
declare function initCollapse(): void;

/**
 * Configuration options for the Collapse component.
 */
interface CollapseConfig {
    /**
     * Selector for the icon element to toggle rotation.
     * For example, you can pass "[data-icon]" to target specific icons.
     */
    iconSelector?: string;
}
/**
 * Interface for the Collapse component.
 */
interface ICollapse {
    /**
     * Toggles the collapsible content visibility.
     */
    toggle(): void;
    /**
     * Expands the collapsible content.
     */
    expand(): void;
    /**
     * Collapses the collapsible content.
     */
    collapse(): void;
}

/**
 * Class representing a programmatic Collapse component.
 */
declare class Collapse implements ICollapse {
    private button;
    private collapseElement;
    private config;
    /**
     * Creates an instance of Collapse.
     * @param button - The button element or its selector controlling the collapsible content.
     * @param collapseElement - The collapsible content element or its selector.
     * @param config - Configuration options for the collapse.
     */
    constructor(button: HTMLElement | string, collapseElement: HTMLElement | string, config?: CollapseConfig);
    /**
     * Resolves an element from an HTMLElement or selector string.
     * @param elementOrSelector - HTMLElement or a selector string.
     * @param errorMessage - Error message if the element is not found.
     * @returns The resolved HTMLElement.
     */
    private resolveElement;
    /**
     * Initializes the Collapse component by attaching event listeners.
     */
    private init;
    /**
     * Toggles the collapsible content visibility.
     */
    toggle(): void;
    /**
     * Expands the collapsible content.
     */
    expand(): void;
    /**
     * Collapses the collapsible content.
     */
    collapse(): void;
}

declare function initDropdowns(): void;
declare function cleanupDropdowns(): void;

/**
 * Configuration options for the Dropdown component.
 */
interface DropdownConfig {
    /**
     * Placement of the dropdown relative to the button (default: "bottom-start").
     */
    placement?: string;
    /**
     * Whether clicking outside the dropdown menu closes it (default: true).
     */
    closeOnOutsideClick?: boolean;
    /**
     * Offset of the dropdown menu relative to the button ([x, y]).
     */
    offset?: [number, number];
}
/**
 * Interface for the Dropdown component.
 */
interface IDropdown {
    /**
     * Toggles the dropdown menu visibility.
     */
    toggle(): void;
    /**
     * Opens the dropdown menu.
     */
    open(): void;
    /**
     * Closes the dropdown menu.
     */
    close(): void;
    /**
     * Destroys the Dropdown instance and cleans up resources.
     */
    destroy(): void;
    /**
     * Set the prevent outside click flag to true.
     */
    preventOutsideClick(): void;
}

/**
 * Class representing a programmatic Dropdown component.
 */
declare class Dropdown implements IDropdown {
    private menu;
    private referenceElement;
    private popperInstance;
    private config;
    private isOpen;
    private shouldIgnoreClick;
    private documentClickHandler;
    /**
     * Creates an instance of Dropdown.
     * @param reference - The element or selector to position the dropdown menu relative to.
     * @param menu - The menu element to display as the dropdown.
     * @param config - Configuration options for the dropdown.
     */
    constructor(reference: HTMLElement | string, menu: HTMLElement | string, config: DropdownConfig);
    /**
     * Resolves an element from an HTMLElement or selector string.
     * @param elementOrSelector - HTMLElement or a selector string.
     * @param errorMessage - Error message if the element is not found.
     * @returns The resolved HTMLElement.
     */
    private resolveElement;
    /**
     * Handles document click events for outside clicks
     */
    private handleDocumentClick;
    /**
     * Initializes the Dropdown component.
     */
    private init;
    /**
     * Set the prevent outside click flag to true.
     */
    preventOutsideClick(): void;
    /**
     * Toggles the dropdown menu visibility.
     */
    toggle(): void;
    /**
     * Opens the dropdown menu programmatically.
     */
    open(): void;
    /**
     * Closes the dropdown menu programmatically.
     */
    close(): void;
    /**
     * Destroys the Dropdown instance and cleans up resources.
     */
    destroy(): void;
}

/**
 * Initializes all popovers in the DOM.
 */
declare function initPopovers(): void;
/**
 * Cleans up all active popovers and their event listeners.
 */
declare function cleanupPopovers(): void;

/**
 * Configuration options for the Popover component.
 */
interface PopoverConfig {
    /**
     * The placement of the popover relative to the trigger.
     */
    placement?: string;
    /**
     * Custom classes to apply to the popover element.
     */
    popoverClass?: string;
    /**
     * Plain text content for the popover.
     */
    content?: string | HTMLElement;
    /**
     * Whether the popover is open by default.
     */
    openByDefault?: boolean;
    /**
     * Offset for the popover position.
     */
    offset?: [number, number];
}
/**
 * Interface for the Popover instance.
 */
interface IPopover {
    /**
     * Opens the popover programmatically.
     */
    open(): void;
    /**
     * Closes the popover programmatically.
     */
    close(): void;
    /**
     * Toggles the popover's visibility programmatically.
     */
    toggle(): void;
    /**
     * Destroys the Popover instance and cleans up resources.
     */
    destroy(): void;
}

/**
 * Class representing a programmatic Popover component.
 */
declare class Popover implements IPopover {
    private trigger;
    private config;
    private popperInstance;
    private popoverElement;
    /**
     * Creates an instance of Popover.
     * @param trigger - The element that triggers the popover.
     * @param config - Configuration options for the popover.
     */
    constructor(trigger: HTMLElement, config: PopoverConfig);
    /**
     * Initializes the Popover instance.
     */
    private init;
    /**
     * Handles the click event on the trigger element.
     * @param event - The click event.
     */
    private handleTriggerClick;
    /**
     * Opens the popover programmatically.
     */
    open(): Promise<void>;
    /**
     * Closes the popover programmatically.
     */
    close(): void;
    /**
     * Toggles the popover's visibility programmatically.
     */
    toggle(): void;
    /**
     * Destroys the Popover instance and cleans up resources.
     */
    destroy(): void;
}

declare function initTooltips(): void;
declare function cleanupTooltips(): void;

/**
 * Options for configuring a tooltip instance.
 */
interface TooltipConfig {
    /**
     * The placement of the tooltip relative to the trigger element.
     * Possible values include "top", "bottom", "left", "right", etc.
     * @see https://popper.js.org/docs/v2/constructors/#placement
     */
    placement?: Placement;
    /**
     * CSS classes to apply to the tooltip element for styling.
     */
    tooltipClass?: string;
    /**
     * The content to display inside the tooltip.
     * This can be a string or an HTML element.
     */
    content?: string | HTMLElement;
}
/**
 * Represents an active tooltip instance.
 */
interface ITooltip {
    /**
     * The HTML element that serves as the trigger for the tooltip.
     */
    triggerElement: HTMLElement;
    /**
     * The tooltip's HTML element.
     */
    tooltipElement: HTMLElement | null;
    /**
     * The Popper.js instance used for positioning.
     */
    tooltipInstance: Instance | null;
    /**
     * Shows the tooltip.
     * @returns A promise that resolves once the tooltip is displayed.
     */
    showTooltip: () => Promise<void>;
    /**
     * Hides the tooltip.
     */
    hideTooltip: () => void;
    /**
     * Destroys the tooltip instance, removing all event listeners and DOM elements.
     */
    destroy: () => void;
}

declare class Tooltip implements ITooltip {
    triggerElement: HTMLElement;
    tooltipElement: HTMLElement | null;
    tooltipInstance: Instance | null;
    options: TooltipConfig;
    constructor(triggerElement: HTMLElement, options?: TooltipConfig);
    private init;
    showTooltip(): Promise<void>;
    hideTooltip(): void;
    destroy(): void;
}

/**
 * Initialize all tabs in the document.
 */
declare function initTabs(): void;
/**
 * Cleans up all initialized tabs.
 */
declare function cleanupTabs(): void;

/**
 * Configuration options for the Tabs component.
 */
interface TabsConfig {
    /**
     * Whether the tabs are oriented vertically or horizontally.
     * - `horizontal`: Tabs are arranged in a row.
     * - `vertical`: Tabs are arranged in a column.
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The ID of the tab to activate by default.
     * @default "tab-1"
     */
    defaultTabId?: string;
}
/**
 * Interface defining the programmatic API for the Tabs component.
 */
interface ITabs {
    /**
     * Activates the specified tab by ID.
     * @param tabId - The ID of the tab to activate.
     */
    activateTab(tabId: string): void;
    /**
     * Cleans up the tab group by removing event listeners and resetting the DOM.
     */
    cleanup(): void;
}

/**
 * A class for managing tabs programmatically.
 */
declare class Tabs implements ITabs {
    private tabGroup;
    private tabList;
    private tabLinks;
    private tabContents;
    private indicator;
    private orientation;
    private defaultTabId;
    /**
     * Creates a new Tabs instance.
     * @param tabGroup - The container element of the tab group.
     * @param options - Configuration options for the tabs.
     */
    constructor(tabGroup: HTMLElement, options?: TabsConfig);
    /**
     * Initializes the tab group by setting up event listeners and activating the initial tab.
     */
    private initialize;
    /**
     * Updates the position of the tab indicator dynamically.
     * @param link - The active tab link element.
     */
    private updateIndicator;
    /**
     * Activates the specified tab by its ID.
     * @param tabId - The ID of the tab to activate.
     */
    activateTab(tabId: string): void;
    /**
     * Cleans up the tab group by removing event listeners and resetting the DOM.
     */
    cleanup(): void;
}

/**
 * Initialize modal triggers and dismiss buttons.
 */
declare function initModal(): void;
/**
 * Cleanup function to remove event listeners from active modals.
 */
declare function cleanupModals(): void;

/**
 * Configuration options for the Modal component.
 */
interface ModalConfig {
    /**
     * Whether the Escape key should close the modal (default: true).
     */
    keyboard?: boolean;
    /**
     * Whether clicking outside the modal content should close the modal (default: true).
     */
    closeOnOutsideClick?: boolean;
}
/**
 * Interface for the Modal component.
 */
interface IModal {
    /**
     * Show the modal.
     */
    show(): void;
    /**
     * Hide the modal.
     */
    hide(): void;
    /**
     * Toggle the modal's visibility.
     */
    toggle(): void;
    /**
     * Check if the modal is currently visible.
     */
    isVisible(): boolean;
}

/**
 * A class to handle programmatic modal behavior.
 * @implements {IModal}
 */
declare class Modal implements IModal {
    private _isVisible;
    private _config;
    private _modalElement;
    /**
     * Initialize the modal.
     * @param {HTMLElement} modalElement - The modal element.
     * @param {ModalConfig} [config={}] - Configuration options for the modal.
     */
    constructor(modalElement: HTMLElement, config?: ModalConfig);
    /**
     * Show the modal.
     */
    show(): void;
    /**
     * Hide the modal.
     */
    hide(): void;
    /**
     * Toggle the modal's visibility.
     */
    toggle(): void;
    /**
     * Check if the modal is currently visible.
     * @returns {boolean}
     */
    isVisible(): boolean;
    /**
     * Set up initial modal state.
     * Hides the modal if it's not already hidden.
     */
    private setupModal;
    /**
     * Handle keydown events (e.g., Escape to close the modal).
     * @param {KeyboardEvent} event
     */
    private handleKeydown;
    /**
     * Handle clicks outside the modal content to close the modal.
     * @param {MouseEvent} event
     */
    private handleOutsideClick;
    /**
     * Removes the hidden class from the modal element.
     * This is typically called before showing the modal.
     */
    private removeHiddenClass;
}

declare function toggleAccordionById(targetId: string): void;
declare function initAccordion(): void;
declare function cleanupAccordions(): void;

/**
 * Configuration options for the Accordion component
 */
interface AccordionConfig {
    /** When true, only one section can be open at a time */
    exclusive?: boolean;
    /** When true, allows multiple sections to be open simultaneously */
    allOpen?: boolean;
}
/**
 * Interface defining the public API for controlling Accordion behavior
 */
interface IAccordion {
    /**
     * Toggles the open/closed state of an accordion section
     * @param element - The accordion section element or its ID
     */
    toggle: (element: HTMLElement | string) => void;
    /**
     * Opens an accordion section
     * @param element - The accordion section element or its ID
     */
    show: (element: HTMLElement | string) => void;
    /**
     * Closes an accordion section
     * @param element - The accordion section element or its ID
     */
    hide: (element: HTMLElement | string) => void;
    /**
     * Opens all accordion sections simultaneously
     */
    showAll: () => void;
    /**
     * Closes all accordion sections simultaneously
     */
    hideAll: () => void;
    /**
     * Removes all event listeners and cleans up the accordion instance
     */
    cleanup: () => void;
}

declare class Accordion implements IAccordion {
    private container;
    private options;
    private initialized;
    constructor(container: HTMLElement, options?: AccordionConfig);
    private init;
    private resolveElement;
    toggle(element: HTMLElement | string): void;
    show(element: HTMLElement | string): void;
    hide(element: HTMLElement | string): void;
    showAll(): void;
    hideAll(): void;
    cleanup(): void;
    private toggleHandler;
    private setAccordionState;
}

declare function initStepper(): void;
declare function cleanupSteppers(): void;

/**
 * Configuration options for initializing a Stepper instance
 * @interface StepperConfig
 */
interface StepperConfig {
    /** Array of HTML elements representing the step indicators */
    stepElements: HTMLElement[];
    /** Array of HTML elements containing the content for each step */
    contentElements: HTMLElement[];
    /** HTML element for the "previous" navigation button */
    prevButton: HTMLElement;
    /** HTML element for the "next" navigation button */
    nextButton: HTMLElement;
    /** Optional initial step number (defaults to 1 if not provided) */
    initialStep?: number;
}
/**
 * Interface defining the public API for the Stepper component
 * @interface IStepper
 */
interface IStepper {
    /** Advances to the next step if available */
    next(): void;
    /** Returns to the previous step if available */
    prev(): void;
    /**
     * Jumps to a specific step number
     * @param step - The step number to navigate to
     */
    goToStep(step: number): void;
    /** Returns the current active step number */
    getCurrentStep(): number;
    /** Destroys the Stepper instance, cleaning up event listeners and references */
    destroy(): void;
}

declare class Stepper implements IStepper {
    private steps;
    private contents;
    private prevButton;
    private nextButton;
    private currentStep;
    constructor(config: StepperConfig);
    private updateState;
    next(): void;
    prev(): void;
    goToStep(step: number): void;
    getCurrentStep(): number;
    destroy(): void;
}

declare const MaterialTailwind: {
    initAlert: typeof initAlert;
    initCollapse: typeof initCollapse;
    initDropdowns: typeof initDropdowns;
    cleanupDropdowns: typeof cleanupDropdowns;
    initPopovers: typeof initPopovers;
    cleanupPopovers: typeof cleanupPopovers;
    initTooltips: typeof initTooltips;
    cleanupTooltips: typeof cleanupTooltips;
    initTabs: typeof initTabs;
    cleanupTabs: typeof cleanupTabs;
    initModal: typeof initModal;
    cleanupModals: typeof cleanupModals;
    initAccordion: typeof initAccordion;
    cleanupAccordions: typeof cleanupAccordions;
    toggleAccordionById: typeof toggleAccordionById;
    initStepper: typeof initStepper;
    cleanupSteppers: typeof cleanupSteppers;
    initGallery: typeof initGallery;
    cleanupGallery: typeof cleanupGallery;
};
declare function initMaterialTailwind(): void;
declare const _default: {
    initMaterialTailwind: typeof initMaterialTailwind;
    initAlert: typeof initAlert;
    initCollapse: typeof initCollapse;
    initDropdowns: typeof initDropdowns;
    cleanupDropdowns: typeof cleanupDropdowns;
    initPopovers: typeof initPopovers;
    cleanupPopovers: typeof cleanupPopovers;
    initTooltips: typeof initTooltips;
    cleanupTooltips: typeof cleanupTooltips;
    initTabs: typeof initTabs;
    cleanupTabs: typeof cleanupTabs;
    initModal: typeof initModal;
    cleanupModals: typeof cleanupModals;
    initAccordion: typeof initAccordion;
    cleanupAccordions: typeof cleanupAccordions;
    toggleAccordionById: typeof toggleAccordionById;
    initStepper: typeof initStepper;
    cleanupSteppers: typeof cleanupSteppers;
    initGallery: typeof initGallery;
    cleanupGallery: typeof cleanupGallery;
};

export { Accordion, AccordionConfig, Collapse, CollapseConfig, Dropdown, DropdownConfig, IAccordion, ICollapse, IDropdown, IModal, IPopover, IStepper, ITabs, ITooltip, MaterialTailwind, Modal, ModalConfig, Popover, PopoverConfig, Stepper, StepperConfig, Tabs, TabsConfig, Tooltip, TooltipConfig, cleanupAccordions, cleanupDropdowns, cleanupGallery, cleanupModals, cleanupPopovers, cleanupSteppers, cleanupTabs, cleanupTooltips, _default as default, initAccordion, initAlert, initCollapse, initDropdowns, initGallery, initMaterialTailwind, initModal, initPopovers, initStepper, initTabs, initTooltips, toggleAccordionById };
