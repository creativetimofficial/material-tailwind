// Accordion Component
const initializedAccordionElements = new WeakSet<HTMLElement>();

type AccordionButton = HTMLElement & {
  dataset: {
    duiAccordionIconOpen?: string;
    duiAccordionIconClose?: string;
    duiAccordionIcon?: string;
    duiAccordionTarget?: string;
  };
};

type AccordionContainer = HTMLElement & {
  dataset: {
    duiAccordionMode?: "exclusive" | "all-open";
  };
};

// Helper function to handle icons
const handleIcons = (button: AccordionButton, isExpanded: boolean, isRotating = false): void => {
  const openIcon = button.querySelector<HTMLElement>("[data-accordion-icon-open]");
  const closeIcon = button.querySelector<HTMLElement>("[data-accordion-icon-close]");
  const rotatingIcon = button.querySelector<HTMLElement>("[data-accordion-icon]");

  if (openIcon && closeIcon) {
    openIcon.style.display = isExpanded ? "block" : "none";
    closeIcon.style.display = isExpanded ? "none" : "block";
  }
  if (rotatingIcon) {
    rotatingIcon.classList.toggle("rotate-180", isRotating ? isExpanded : !isExpanded);
  }
};

// Helper function to toggle accordion state
const toggleAccordionState = (
  targetElement: HTMLElement,
  button: AccordionButton,
  isExpanded: boolean
): void => {
  targetElement.style.maxHeight = isExpanded ? `${targetElement.scrollHeight}px` : "0";
  button.setAttribute("aria-expanded", String(isExpanded));
  handleIcons(button, isExpanded);
};

// Function to toggle accordion items
export function toggleAccordion(event: Event): void {
  const button = event.currentTarget as AccordionButton;
  if (button.getAttribute("aria-disabled") === "true") return;

  const targetID = button.dataset.duiAccordionTarget;
  const parentElement = button.closest<AccordionContainer>("[data-accordion-container]");
  const mode = parentElement?.dataset.duiAccordionMode;

  if (targetID?.startsWith("#")) {
    const targetElement = document.querySelector<HTMLElement>(targetID);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    if (mode === "exclusive" && parentElement) {
      parentElement.querySelectorAll<AccordionButton>("[data-accordion-toggle]").forEach(otherButton => {
        const otherTargetID = otherButton.dataset.duiAccordionTarget;
        if (otherTargetID && otherTargetID !== targetID) {
          const otherElement = document.querySelector<HTMLElement>(otherTargetID);
          if (otherElement instanceof HTMLElement) {
            toggleAccordionState(otherElement, otherButton, false);
          }
        }
      });
    }

    if (targetElement) {
      toggleAccordionState(targetElement, button, !isExpanded);
    }
  }
}

// Function to manually toggle accordion item by ID
export function toggleAccordionById(targetId: string): void {
  targetId = targetId.startsWith("#") ? targetId : `#${targetId}`;

  const targetElement = document.querySelector<HTMLElement>(targetId);
  const toggleButton = document.querySelector<AccordionButton>(
    `[data-accordion-target="${targetId}"]`
  );

  if (
    toggleButton?.getAttribute("aria-disabled") === "true" ||
    !targetElement ||
    !toggleButton
  )
    return;

  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
  const parentElement = toggleButton.closest<AccordionContainer>("[data-accordion-container]");
  const mode = parentElement?.dataset.duiAccordionMode;

  if (mode === "exclusive" && parentElement) {
    parentElement.querySelectorAll<AccordionButton>("[data-accordion-toggle]").forEach((otherButton) => {
      const otherTargetID = otherButton.dataset.duiAccordionTarget;

      // Ensure otherTargetID is a string
      if (typeof otherTargetID === "string" && otherTargetID !== targetId) {
        const otherElement = document.querySelector<HTMLElement>(otherTargetID);

        // Ensure otherElement is an instance of HTMLElement
        if (otherElement instanceof HTMLElement) {
          toggleAccordionState(otherElement, otherButton, false);
        }
      }
    });
  }


  toggleAccordionState(targetElement, toggleButton, !isExpanded);
}

// Function to initialize accordion functionality
export function initAccordion(): void {
  document.querySelectorAll<AccordionButton>("[data-accordion-toggle]").forEach((button) => {
    if (!initializedAccordionElements.has(button)) {
      button.addEventListener("click", toggleAccordion);
      initializedAccordionElements.add(button);

      const targetID = button.dataset.duiAccordionTarget;

      // Ensure targetID is a valid string
      if (typeof targetID === "string") {
        const targetElement = document.querySelector<HTMLElement>(targetID);

        // Ensure targetElement is an HTMLElement
        if (targetElement instanceof HTMLElement) {
          const isExpanded = button.getAttribute("aria-expanded") === "true";
          toggleAccordionState(targetElement, button, isExpanded);
        }
      }
    }
  });
}


// Function to cleanup accordion functionality
export function cleanupAccordions(): void {
  document.querySelectorAll<AccordionButton>("[data-accordion-toggle]").forEach(button => {
    if (initializedAccordionElements.has(button)) {
      button.removeEventListener("click", toggleAccordion);
      initializedAccordionElements.delete(button);
    }
  });
}

// Make toggleAccordionById available globally
if (typeof window !== "undefined") {
  (window as any).toggleAccordionById = toggleAccordionById;

  document.addEventListener("DOMContentLoaded", () => {
    initAccordion();
    new MutationObserver(initAccordion).observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
