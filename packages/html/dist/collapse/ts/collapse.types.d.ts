/**
 * Configuration options for the Collapse component.
 */
export interface CollapseConfig {
    /**
     * Selector for the icon element to toggle rotation.
     * For example, you can pass "[data-icon]" to target specific icons.
     */
    iconSelector?: string;
}
/**
 * Interface for the Collapse component.
 */
export interface ICollapse {
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
