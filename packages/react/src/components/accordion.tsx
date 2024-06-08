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

// @types
import type { BaseProps } from "@types";

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

export type AccordionItemProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value: string;
    disabled?: boolean;
  }
>;

function AccordionItemRoot<T extends React.ElementType = "div">(
  { as, value, disabled, className, children, ...props }: AccordionItemProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
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
      <Component
        {...props}
        ref={ref}
        data-open={isOpen}
        className={styles}
        aria-disabled={disabled}
      >
        {children}
      </Component>
    </AccordionItemContext.Provider>
  );
}

AccordionItemRoot.displayName = "MaterialTailwind.AccordionItem";

export const AccordionItem = React.forwardRef(AccordionItemRoot) as <
  T extends React.ElementType = "div",
>(
  props: AccordionItemProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// accordion trigger
export type AccordionTriggerProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function AccordionTriggerRoot<T extends React.ElementType = "button">(
  { as, className, children, ...props }: AccordionTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);
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
    <Component
      {...props}
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

        props.onClick?.(event);
      }}
    >
      {children}
    </Component>
  );
}

AccordionTriggerRoot.displayName = "MaterialTailwind.AccordionTrigger";

export const AccordionTrigger = React.forwardRef(AccordionTriggerRoot) as <
  T extends React.ElementType = "button",
>(
  props: AccordionTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// accordion content
export type AccordionContentProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function AccordionContentRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: AccordionContentProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
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
    <Component {...props} ref={ref} className={styles} data-open={isOpen}>
      {children}
    </Component>
  ) : null;
}

AccordionContentRoot.displayName = "MaterialTailwind.AccordionContent";

export const AccordionContent = React.forwardRef(AccordionContentRoot) as <
  T extends React.ElementType = "div",
>(
  props: AccordionContentProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export default Accordion;
