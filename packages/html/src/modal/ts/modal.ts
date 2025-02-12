// A reference to all initialized triggers, so we don't rebind event listeners.
let initializedModals = new WeakSet<HTMLElement>();

// Track active modals for cleanup
let activeModals: HTMLElement[] = [];

/**
 * Toggle the modal on or off.
 */
export function toggleModal(event: Event): void {
  const trigger = event.currentTarget as HTMLElement | null;
  if (!trigger) return;

  const modalID = trigger.getAttribute("data-target");
  if (!modalID) return;

  const modal = document.querySelector<HTMLElement>(modalID);
  if (!modal) return;

  const isHidden = modal.classList.contains("pointer-events-none");

  // Toggle opacity classes
  modal.classList.toggle("opacity-0", !isHidden);
  modal.classList.toggle("opacity-100", isHidden);

  // Toggle pointer-events
  if (isHidden) {
    modal.classList.remove("pointer-events-none");
  } else {
    setTimeout(() => modal.classList.add("pointer-events-none"), 300);
  }

  // Toggle scale classes
  const modalContent = modal.querySelector<HTMLElement>(
    isHidden ? ".scale-95" : ".scale-100"
  );
  if (modalContent) {
    modalContent.classList.toggle("scale-95", !isHidden);
    modalContent.classList.toggle("scale-100", isHidden);
  }

  // Update aria-hidden
  modal.setAttribute("aria-hidden", String(!isHidden));

  // Add or remove event listener for outside clicks
  if (isHidden) {
    modal.addEventListener("click", closeOnOutsideClick);
    activeModals.push(modal);
  } else {
    modal.removeEventListener("click", closeOnOutsideClick);
    activeModals = activeModals.filter((m) => m !== modal);
  }
}

/**
 * Close the modal programmatically or via an event.
 * Accepts either an Event or a direct HTMLElement.
 */
export function closeModal(input: Event | HTMLElement): void {
  let modal: HTMLElement | null = null;

  if (input instanceof Event) {
    const trigger = input.currentTarget as HTMLElement | null;
    if (!trigger) return;
    modal = trigger.closest<HTMLElement>(".fixed");
  } else {
    modal = input;
  }

  if (!modal) return;

  // Fade out
  modal.classList.add("opacity-0");
  modal.classList.remove("opacity-100");

  // Scale down
  const modalContent = modal.querySelector<HTMLElement>(".scale-100");
  if (modalContent) {
    modalContent.classList.add("scale-95");
    modalContent.classList.remove("scale-100");
  }

  // After transition finishes, hide pointer events
  setTimeout(() => {
    modal.classList.add("pointer-events-none");
    modal.setAttribute("aria-hidden", "true");
  }, 300);

  modal.removeEventListener("click", closeOnOutsideClick);

  // Remove from the active modals array
  activeModals = activeModals.filter((m) => m !== modal);
}

/**
 * Close the modal if a click happens outside of the modal content.
 */
function closeOnOutsideClick(event: MouseEvent): void {
  const modal = event.currentTarget as HTMLElement | null;
  if (!modal) return;

  const modalContent = modal.querySelector<HTMLElement>(".scale-100, .scale-95");
  if (!modalContent) return;

  if (!modalContent.contains(event.target as Node)) {
    closeModal(modal); // Pass the modal directly
  }
}

/**
 * Initialize modal triggers and dismiss buttons.
 */
export function initModal(): void {
  // For opening modals
  document.querySelectorAll<HTMLElement>("[data-toggle='modal']").forEach((trigger) => {
    if (!initializedModals.has(trigger)) {
      trigger.addEventListener("click", toggleModal);
      initializedModals.add(trigger);
    }
  });

  // For closing modals
  document.querySelectorAll<HTMLElement>("[data-dismiss='modal']").forEach((button) => {
    if (!initializedModals.has(button)) {
      button.addEventListener("click", closeModal);
      initializedModals.add(button);
    }
  });
}

/**
 * Cleanup function to remove event listeners from active modals.
 */
export function cleanupModals(): void {
  activeModals.forEach((modal) => {
    modal.removeEventListener("click", closeOnOutsideClick);
  });
  activeModals = [];

  // Reassign a new WeakSet to "clear" it
  initializedModals = new WeakSet<HTMLElement>();
}

// Auto-initialize Modals in the Browser Environment
if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initModal();

    // Observe the DOM for dynamically added modals
    const observer = new MutationObserver(() => {
      initModal(); // Re-initialize modals when new elements are added
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
