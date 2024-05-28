"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import {
  accordionTheme,
  accordionItemTheme,
  accordionTriggerTheme,
  accordionContentTheme,
} from "@theme";

type accordionType = "single" | "multiple";

// accordion context
export interface AccordionContextProps {
  type?: accordionType;
  activeItem?: string | string[];
  setActiveItem?: React.Dispatch<React.SetStateAction<string | string[]>>;
}

export const AccordionContext = React.createContext<AccordionContextProps>({
  type: "single",
  activeItem: "",
  setActiveItem: () => {},
} as AccordionContextProps);

// accordion root
export interface AccordionProps {
  type?: accordionType;
  value?: string | string[];
  defaultValue?: string | string[];
  children: React.ReactNode;
  onValueChange?: React.Dispatch<React.SetStateAction<string | string[]>>;
}
/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/accordion) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/accordion#accordion-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/accordion#accordion-theme)
 */
export function AccordionRoot({
  type,
  value,
  defaultValue,
  onValueChange,
  children,
}: AccordionProps) {
  const contextTheme = useTheme();
  const theme = contextTheme.accordion || accordionTheme;
  const defaultProps = theme?.defaultProps;

  type ??= (defaultProps?.type as AccordionProps["type"]) ?? "single";

  const accordionValue = value || defaultValue;
  const [uncontrolledActiveItem, setUncontrolledActiveItem] = React.useState<
    string | string[]
  >("");

  const activeItem = value || uncontrolledActiveItem;
  const setActiveItem = onValueChange || setUncontrolledActiveItem;

  React.useEffect(() => {
    setActiveItem(accordionValue as string | string[]);
  }, [accordionValue]);

  const contextValue = React.useMemo(
    () => ({
      type,
      activeItem,
      setActiveItem,
    }),
    [type, activeItem, setActiveItem],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
}

AccordionRoot.displayName = "MaterialTailwind.Accordion";

// accordion item
export const AccordionItemContext = React.createContext<string>("");

export interface AccordionItemProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const AccordionItem = React.forwardRef<HTMLElement, AccordionItemProps>(
  ({ as, value, disabled, className, children, ...rest }, ref) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme.accordionItem || accordionItemTheme;
    const defaultProps = theme?.defaultProps;
    const { type, activeItem } = React.useContext(AccordionContext);

    disabled ??=
      (defaultProps?.disabled as AccordionItemProps["disabled"]) ?? false;

    const isMultiple = type === "multiple";
    const isOpen = isMultiple
      ? activeItem?.includes(value)
      : activeItem === value;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <AccordionItemContext.Provider value={value}>
        <Element
          {...rest}
          ref={ref}
          data-open={isOpen}
          className={styles}
          aria-disabled={disabled}
        >
          {children}
        </Element>
      </AccordionItemContext.Provider>
    );
  },
);

AccordionItem.displayName = "MaterialTailwind.AccordionItem";

// accordion trigger
export interface AccordionTriggerProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const AccordionTrigger = React.forwardRef<
  HTMLElement,
  AccordionTriggerProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme.accordionTrigger || accordionTriggerTheme;
  const value = React.useContext(AccordionItemContext);
  const { type, activeItem, setActiveItem } =
    React.useContext(AccordionContext);

  const isMultiple = type === "multiple";
  const isOpen = isMultiple
    ? activeItem?.includes(value)
    : activeItem === value;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element
      {...rest}
      ref={ref}
      data-open={isOpen}
      className={styles}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (isMultiple) {
          if (activeItem?.includes(value)) {
            setActiveItem?.((prev) =>
              (prev as string[]).filter((item) => item !== value),
            );
          } else {
            setActiveItem?.((prev) => [...prev, value]);
          }
        } else {
          setActiveItem?.((prev) => (prev === value ? "" : value));
        }

        rest.onClick?.(event);
      }}
    >
      {children}
    </Element>
  );
});

AccordionTrigger.displayName = "MaterialTailwind.AccordionTrigger";

// accordion content
export interface AccordionContentProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const AccordionContent = React.forwardRef<
  HTMLElement,
  AccordionContentProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme.accordionContent || accordionContentTheme;
  const value = React.useContext(AccordionItemContext);
  const { type, activeItem } = React.useContext(AccordionContext);

  const isMultiple = type === "multiple";
  const isOpen = isMultiple
    ? activeItem?.includes(value)
    : activeItem === value;

  const styles = twMerge(theme.baseStyle, className);

  return isOpen ? (
    <Element {...rest} ref={ref} className={styles} data-open={isOpen}>
      {children}
    </Element>
  ) : null;
});

AccordionContent.displayName = "MaterialTailwind.AccordionContent";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export default Accordion;
