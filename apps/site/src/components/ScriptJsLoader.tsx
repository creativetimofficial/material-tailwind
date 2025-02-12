"use client";

import { useEffect } from "react";
import {
  initAlert,
  initModal,
  cleanupModals,
  initCollapse,
  initTabs,
  cleanupTabs,
  initDropdowns,
  cleanupDropdowns,
  initTooltips,
  cleanupTooltips,
  initPopovers,
  cleanupPopovers,
  initAccordion,
  cleanupAccordions,
  initGallery,
  cleanupGallery,
  initStepper,
  cleanupSteppers,
} from "@material-tailwind/html";
import { usePathname } from "next/navigation";

const ScriptLoader = () => {
  const pathname = usePathname();

  // Define init and cleanup functions
  const initFunctions: Record<string, Function[]> = {
    "/docs/html/alert": [initAlert],
    "/docs/html/accordion": [initAccordion],
     "/docs/html/collapse": [initCollapse],
     "/docs/html/dropdown": [initDropdowns],
     "/docs/html/menu": [initDropdowns],
     "/docs/html/modal": [initModal],
     "/docs/html/popover": [initPopovers],
     "/docs/html/tooltip": [initTooltips],
     "/docs/html/tabs": [initTabs],
     "/docs/html/gallery": [initGallery, initTabs],
     "/docs/html/stepper": [initStepper],
     "/docs/html/sidebar": [initCollapse],
     "/docs/html/navbar": [initCollapse, initDropdowns],
     "/docs/html/input": [initDropdowns],
  };

  const cleanupFunctions: Record<string, Function[]> = {
     "/docs/html/dropdown": [cleanupDropdowns],
     "/docs/html/menu": [cleanupDropdowns],
     "/docs/html/tooltip": [cleanupTooltips],
     "/docs/html/modal": [cleanupModals],
     "/docs/html/tabs": [cleanupTabs],
     "/docs/html/popover": [cleanupPopovers],
     "/docs/html/accordion": [cleanupAccordions],
     "/docs/html/gallery": [cleanupGallery],
     "/docs/html/stepper": [cleanupSteppers],
     "/docs/html/navbar": [cleanupDropdowns],
     "/docs/html/input": [cleanupDropdowns],
  };

  useEffect(() => {
    // Run initialization functions for the current pathname
    setTimeout(() => {
      if (initFunctions[pathname]) {
        initFunctions[pathname].forEach((initFunc) => initFunc());
      }
    }, 500);

    // Cleanup functions for the previous pathname
    return () => {
      if (cleanupFunctions[pathname]) {
        cleanupFunctions[pathname].forEach((cleanupFunc) => cleanupFunc());
      }
    };
  }, [pathname]);

  return null; // This component only initializes and cleans up scripts; it doesn't render UI
};

export default ScriptLoader;
