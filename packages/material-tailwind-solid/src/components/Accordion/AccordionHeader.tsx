import { Show, createMemo } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";
// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useAccordion } from "./AccordionContext";

export const AccordionHeader: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  // 1. init
  const context = useAccordion();
  const theme = useTheme();

  // 2. set styles
  const styles = createMemo(() => {
    const buttonStyles = twMerge(
      classnames(objectsToString(theme().accordion.styles.base.header.initial), {
        [objectsToString(theme().accordion.styles.base.header.active)]: context().open,
      }),
      props.class || "",
    );
    const iconClasses = classnames(objectsToString(theme().accordion.styles.base.header.icon));
    return { buttonStyles, iconClasses };
  });

  // 3. return
  return (
    <button {...props} type="button" disabled={context().disabled} class={styles().buttonStyles}>
      {props.children}
      <span class={styles().iconClasses}>
        <Show
          when={context().icon}
          fallback={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          }
        >
          {context().icon}
        </Show>
      </span>
    </button>
  );
};

// AccordionHeader.propTypes = {
//   className: propTypesClassName,
//   children: propTypesChildren,
// };

// AccordionHeader.displayName = "MaterialTailwind.AccordionHeader";

export default AccordionHeader;
