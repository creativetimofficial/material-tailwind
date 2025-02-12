/**
 * Configuration options for the Tabs component.
 */
export interface TabsConfig {
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
export interface ITabs {
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
