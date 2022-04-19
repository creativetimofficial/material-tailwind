import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const AccordionContext = createContext(null);
AccordionContext.displayName = "AccordionContextProvider";

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion() must be used within an Accordion.");
  }

  return context;
}

function AccordionContextProvider({ value, children }) {
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
}

AccordionContextProvider.propTypes = {
  value: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired,
};

export { AccordionContextProvider, useAccordion };
