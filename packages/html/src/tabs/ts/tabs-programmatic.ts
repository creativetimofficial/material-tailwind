import type { TabsConfig, ITabs } from "./tabs.types";

const initializedTabs = new WeakSet<HTMLElement>();

/**
 * A class for managing tabs programmatically.
 */
export class Tabs implements ITabs {
  private tabGroup: HTMLElement;
  private tabList: HTMLElement | null;
  private tabLinks: HTMLElement[];
  private tabContents: HTMLElement[];
  private indicator: HTMLElement | null;
  private orientation: "horizontal" | "vertical";
  private defaultTabId: string;

  /**
   * Creates a new Tabs instance.
   * @param tabGroup - The container element of the tab group.
   * @param options - Configuration options for the tabs.
   */
  constructor(tabGroup: HTMLElement, options: TabsConfig = { orientation: "horizontal" }) {
    if (initializedTabs.has(tabGroup)) {
      throw new Error("This tab group is already initialized.");
    }

    this.tabGroup = tabGroup;
    this.tabList = tabGroup.querySelector<HTMLElement>("[role='tablist']");
    this.tabLinks = Array.from(this.tabList?.querySelectorAll<HTMLElement>(".tab-link") || []);
    this.tabContents = Array.from(tabGroup.querySelectorAll<HTMLElement>(".tab-content"));
    this.indicator = this.tabList?.querySelector<HTMLElement>(".tab-indicator") || null; // Fallback to null if undefined
    this.orientation = options.orientation || "horizontal";
    this.defaultTabId = options.defaultTabId || this.tabLinks[0]?.id || "tab1";

    this.initialize();
    initializedTabs.add(tabGroup);
  }


  /**
   * Initializes the tab group by setting up event listeners and activating the initial tab.
   */
  private initialize(): void {
    // First check for defaultTabId
    const defaultTab = this.tabLinks.find(link => link.id === this.defaultTabId);
    // Then check for an active tab
    const activeTab = defaultTab || 
                     this.tabList?.querySelector<HTMLElement>(".tab-link.active") ||
                     this.tabLinks[0];
                     
    if (activeTab) {
      // Ensure all other tabs are deactivated first
      this.tabLinks.forEach((t) => t.classList.remove("active"));
      this.tabContents.forEach((c) => {
        c.classList.add("hidden");
        c.classList.remove("block");
      });
      
      setTimeout(() => {
        this.activateTab(activeTab.id);
      }, 300);
    }

    this.tabLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        this.activateTab(link.id);
      });
    });
  }

  /**
   * Updates the position of the tab indicator dynamically.
   * @param link - The active tab link element.
   */
  private updateIndicator(link: HTMLElement): void {
    const rect = link.getBoundingClientRect();
    const parentRect = this.tabList?.getBoundingClientRect();

    if (!parentRect || !this.indicator) return;

    requestAnimationFrame(() => {
      if (this.orientation === "vertical") {
        this.indicator!.style.transform = `translateY(${rect.top - parentRect.top}px)`;
        this.indicator!.style.height = `${rect.height}px`;
      } else {
        this.indicator!.style.transform = `translateX(${rect.left - parentRect.left}px)`;
        this.indicator!.style.width = `${rect.width}px`;
      }

      this.indicator!.classList.remove("hidden");
      this.indicator!.style.opacity = "1";
      this.indicator!.style.scale = "1";
    });
  }

  /**
   * Activates the specified tab by its ID.
   * @param tabId - The ID of the tab to activate.
   */
  public activateTab(tabId: string): void {
    const tab = this.tabLinks.find((t) => t.id === tabId);
    const content = this.tabContents.find((c) => c.id === `${tabId}-content`);

    if (!tab || !content) {
      console.warn(`Tab or content with id ${tabId} not found`);
      return;
    }

    // Deactivate all tabs and contents
    this.tabLinks.forEach((t) => t.classList.remove("active"));
    this.tabContents.forEach((c) => {
      c.classList.add("hidden");
      c.classList.remove("block");
    });

    // Activate the clicked tab
    tab.classList.add("active");
    content.classList.add("block");
    content.classList.remove("hidden");

    // Update the indicator position
    this.updateIndicator(tab);
  }

  /**
   * Cleans up the tab group by removing event listeners and resetting the DOM.
   */
  public cleanup(): void {
    this.tabLinks.forEach((link) => {
      const clone = link.cloneNode(true) as HTMLElement;
      link.replaceWith(clone);
    });

    initializedTabs.delete(this.tabGroup);
  }
}
