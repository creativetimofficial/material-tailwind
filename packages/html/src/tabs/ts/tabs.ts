const initializedTabs = new WeakSet<HTMLElement>(); // Track initialized tabs to prevent duplication

/**
 * Initialize all tabs in the document.
 */
export function initTabs(): void {
  document.querySelectorAll<HTMLElement>(".tab-group").forEach((tabGroup) => {
    if (initializedTabs.has(tabGroup)) return; // Skip already initialized tab groups

    const tabList = tabGroup.querySelector<HTMLElement>("[role='tablist']");
    const tabLinks = tabList?.querySelectorAll<HTMLElement>(".tab-link") || [];
    const tabContents = tabGroup.querySelectorAll<HTMLElement>(".tab-content");
    const indicator = tabList?.querySelector<HTMLElement>(".tab-indicator");
    const isVertical = tabGroup.getAttribute("data-orientation") === "vertical";

    /**
     * Updates the indicator's position dynamically.
     * @param link The active tab link element.
     */
    function updateIndicator(link: HTMLElement): void {
      const rect = link.getBoundingClientRect();
      const parentRect = tabList?.getBoundingClientRect();

      if (!parentRect || !indicator) return;

      requestAnimationFrame(() => {
        if (isVertical) {
          indicator.style.transform = `translateY(${rect.top - parentRect.top}px)`;
          indicator.style.height = `${rect.height}px`;
        } else {
          indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
          indicator.style.width = `${rect.width}px`;
        }

        // Make the indicator visible
        indicator.classList.remove("hidden");
        indicator.style.opacity = "1";
        indicator.style.scale = "1";
      });
    }

    /**
     * Activates the specified tab.
     * @param link The tab link element to activate.
     */
    function activateTab(link: HTMLElement): void {
      // Deactivate all tabs and hide their content
      tabLinks.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((content) => {
        content.classList.add("hidden");
        content.classList.remove("block");
      });

      // Activate the clicked tab
      link.classList.add("active");
      const targetContentId = link.getAttribute("data-tab-target");
      const targetContent = targetContentId ? document.getElementById(targetContentId) : null;
      if (targetContent) {
        targetContent.classList.add("block");
        targetContent.classList.remove("hidden");
      }

      // Update the indicator position
      updateIndicator(link);
    }

    /**
     * Initializes the tab group.
     */
    function initializeTabGroup(): void {
      const activeLink = tabList?.querySelector<HTMLElement>(".tab-link.active");
      if (activeLink) {
        activateTab(activeLink); // Set indicator for the initially active tab
      } else if (tabLinks.length > 0) {
        activateTab(tabLinks[0]); // Fallback to the first tab if no active tab is defined
      }

      // Attach click listeners to each tab link
      tabLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default browser behavior
          activateTab(link); // Activate the clicked tab and update the indicator
        });
      });
    }

    initializeTabGroup();
    initializedTabs.add(tabGroup); // Mark the tab group as initialized
  });
}

/**
 * Cleans up all initialized tabs.
 */
export function cleanupTabs(): void {
  // Query all tab groups in the document instead of trying to iterate WeakSet
  document.querySelectorAll<HTMLElement>(".tab-group").forEach((tabGroup) => {
    if (initializedTabs.has(tabGroup)) {
      const tabList = tabGroup.querySelector<HTMLElement>("[role='tablist']");
      const tabLinks = tabList?.querySelectorAll<HTMLElement>(".tab-link") || [];

      // Remove event listeners from tab links
      tabLinks.forEach((link) => {
        if (link.parentNode) {
          const clone = link.cloneNode(true) as HTMLElement;
          link.parentNode.replaceChild(clone, link);
        }
      });

      // Remove the tab group from the WeakSet
      initializedTabs.delete(tabGroup);
    }
  });
}

// Auto-initialize tabs in the browser
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initTabs();

    // Observe DOM changes to reinitialize tabs dynamically
    const observer = new MutationObserver(() => {
      initTabs();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
