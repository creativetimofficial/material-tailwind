// Stepper Component
const initializedStepperElements = new WeakSet();

function updateStepperState(container) {
  const steps = container.querySelectorAll("[data-step]");
  const stepContents = container.querySelectorAll("[data-step-content]");
  const prevButtons = container.querySelectorAll("[data-stepper-prev]");
  const nextButtons = container.querySelectorAll("[data-stepper-next]");
  let currentStep = parseInt(container.dataset.currentStep || "1", 10);

  function updateState() {
    // Update step circles and connector lines
    steps.forEach((step, index) => {
      const stepNumber = index + 1;
      step.dataset.active = stepNumber === currentStep;
      step.dataset.completed = stepNumber < currentStep;
      step.setAttribute("aria-disabled", stepNumber > currentStep);
    });

    // Update step content visibility
    stepContents.forEach((content) => {
      const contentStep = parseInt(content.dataset.stepContent, 10);
      if (contentStep === currentStep) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });

    // Enable/disable buttons based on step
    prevButtons.forEach((button) => {
      button.disabled = currentStep === 1;
    });

    nextButtons.forEach((button) => {
      button.disabled = currentStep === steps.length;
    });
  }

  // Event listeners for buttons
  function onNextButtonClick() {
    if (currentStep < steps.length) {
      currentStep++;
      container.dataset.currentStep = currentStep;
      updateState();
    }
  }

  function onPrevButtonClick() {
    if (currentStep > 1) {
      currentStep--;
      container.dataset.currentStep = currentStep;
      updateState();
    }
  }

  nextButtons.forEach((button) => {
    button.addEventListener("click", onNextButtonClick);
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", onPrevButtonClick);
  });

  // Store references to cleanup
  container.__stepperCleanup = () => {
    nextButtons.forEach((button) => {
      button.removeEventListener("click", onNextButtonClick);
    });

    prevButtons.forEach((button) => {
      button.removeEventListener("click", onPrevButtonClick);
    });
  };

  // Initialize the state
  updateState();
}

// Function to initialize all steppers
export function initStepper() {
  document.querySelectorAll("[data-stepper-container]").forEach((container) => {
    if (!initializedStepperElements.has(container)) {
      initializedStepperElements.add(container);

      // Set initial step based on attribute
      const initialStep = parseInt(container.getAttribute("data-initial-step") || "1", 10);
      container.dataset.currentStep = initialStep;

      updateStepperState(container);
    }
  });
}

// Cleanup function to remove all steppers
export function cleanupSteppers() {
  document.querySelectorAll("[data-stepper-container]").forEach((container) => {
    if (container.__stepperCleanup) {
      container.__stepperCleanup();
      delete container.__stepperCleanup;
    }

    initializedStepperElements.delete(container);
  });
}

// Auto-initialize steppers on DOMContentLoaded and observe dynamically added elements
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initStepper();
    new MutationObserver(initStepper).observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}