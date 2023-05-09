//Solid
import { createMemo } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { Motion } from "@motionone/solid";
import { deepmerge } from "deepmerge-ts";
import { useTheme } from "../../context/theme";
import { useAccordion } from "./AccordionContext";

export interface AccordionBodyProps {
  [key: string]: any;
}

export const AccordionBody: ParentComponent<
  AccordionBodyProps & JSX.HTMLAttributes<HTMLDivElement>
> = (props) => {
  let contentRef!: HTMLDivElement;
  // 1. init
  const context = useAccordion();
  const theme = useTheme();

  // 2. set styles
  const bodyClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().accordion.styles.base.body)), props.class),
  );

  // 3. animation
  const animate = createMemo(() => {
    return deepmerge(theme().accordion.defaultProps.animate.mount, {
      height: context().open ? contentRef?.clientHeight + "px" : "0px",
    });
  });
  //
  return (
    <Motion.div
      class="overflow-hidden"
      initial={theme().accordion.defaultProps.animate.initial}
      exit={theme().accordion.defaultProps.animate.unmount}
      animate={animate()}
    >
      <div ref={contentRef}>
        <div class={bodyClasses()} {...props}>
          {props.children}
        </div>
      </div>
    </Motion.div>
  );
};

export default AccordionBody;
