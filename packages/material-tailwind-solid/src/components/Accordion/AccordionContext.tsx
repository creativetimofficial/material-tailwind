// types
import type { children, disabled, icon, open } from "../../types/components/accordion";
// import { propTypesValue, propTypesChildren } from "../../types/components/accordion";
import type { ParentComponent } from "solid-js";
import { createContext, createEffect, useContext } from "solid-js";
import type { Accessor } from "solid-js";
import { animation } from "../../types/generic";

export interface AccordionContextType {
  open: open;
  icon: icon;
  animate: animation;
  disabled: disabled;
}

export const AccordionContext = createContext<Accessor<AccordionContextType>>(() => ({
  open: false,
  icon: "",
  animate: {},
  disabled: false,
}));

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useAccordion() must be used within an Accordion. It happens when you use AccordionHeader or AccordionBody components outside the Accordion component.",
    );
  }

  return context;
}

export interface AccordionContextProviderProps {
  value: Accessor<AccordionContextType>;
  children: children;
}

export const AccordionContextProvider: ParentComponent<AccordionContextProviderProps> = (props) => {
  createEffect(() => console.log("AccordionContextProvider", props.value()));
  return <AccordionContext.Provider {...props}>{props.children}</AccordionContext.Provider>;
};
