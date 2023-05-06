import { createMemo, mergeProps, splitProps } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";
// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { AccordionContext, useAccordion } from "./AccordionContext";

// types
import type { animate, disabled, icon, open } from "../../types/components/accordion";

// accordion components
import type { AccordionBodyProps } from "./AccordionBody";
import { AccordionBody } from "./AccordionBody";
// import type { AccordionHeaderProps } from "./AccordionHeader";
import { AccordionHeader } from "./AccordionHeader";

export interface AccordionProps extends JSX.HTMLAttributes<HTMLDivElement> {
  open: open;
  icon?: icon;
  animate?: animate;
  disabled?: disabled;
}

const Accordion: ParentComponent<AccordionProps> = (p) => {
  // 1. init
  const { accordion } = useTheme();
  const [contextProps, props] = splitProps(p, ["open", "icon", "animate", "disabled"]);

  // 2. set default props
  const contextValue = mergeProps(accordion.defaultProps, contextProps);

  // 3. set styles
  const accordionClasses = createMemo(() => {
    return twMerge(
      classnames(objectsToString(accordion.styles.base.container), {
        [objectsToString(accordion.styles.base.disabled)]: contextProps.disabled,
      }),
      props.class,
    );
  });

  // 5. return
  return (
    //@ts-ignore icons are incompatible !?
    <AccordionContext.Provider value={() => contextValue}>
      <div {...props} class={accordionClasses()}>
        {props.children}
      </div>
    </AccordionContext.Provider>
  );
};

// Accordion.propTypes = {
//   open: propTypesOpen,
//   icon: propTypesIcon,
//   animate: propTypesAnimate,
//   disabled: propTypesDisabled,
//   className: propTypesClassName,
//   children: propTypesChildren,
// };

// Accordion.displayName = "MaterialTailwind.Accordion";

export type { AccordionBodyProps };
export { Accordion, AccordionHeader, AccordionBody, useAccordion };
export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Body: AccordionBody,
});
