import type { CollapseConfig, ICollapse } from "./collapse.types";
/**
 * Class representing a programmatic Collapse component.
 */
export declare class Collapse implements ICollapse {
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
