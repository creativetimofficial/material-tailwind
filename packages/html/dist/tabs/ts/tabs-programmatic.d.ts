import type { TabsConfig, ITabs } from "./tabs.types";
/**
 * A class for managing tabs programmatically.
 */
export declare class Tabs implements ITabs {
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
