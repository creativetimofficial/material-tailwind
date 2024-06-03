"use client";

import * as React from "react";

// @components
import { FloatingList, FloatingFocusManager } from "@floating-ui/react";

// @hooks
import {
  useFloating,
  useInteractions,
  useRole,
  useClick,
  useTypeahead,
  useListNavigation,
  useDismiss,
  useListItem,
  useMergeRefs,
} from "@floating-ui/react";
import { useTheme } from "@context";

// @utils
import {
  flip as fuiFlip,
  offset as fuiOffset,
  size as fuiSize,
  autoUpdate,
} from "@floating-ui/react";
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @types
import type {
  OffsetOptions,
  Placement,
  UseFloatingReturn,
  FloatingFocusManagerProps,
} from "@floating-ui/react";
import type { BaseComponent } from "@types";

// @theme
import {
  selectTheme,
  selectTriggerTheme,
  selectListTheme,
  selectOptionTheme,
} from "@theme";

// select context
export interface SelectContextProps
  extends Omit<BaseComponent<HTMLElement>, "variant" | "selected"> {
  isError?: boolean;
  isSuccess?: boolean;
  isPill?: boolean;
  disabled?: boolean;
  placement?: Placement;
  offset?: OffsetOptions;
  activeIndex?: number | null;
  selectedIndex?: number | null;
  refs?: UseFloatingReturn["refs"];
  selected?: {
    value: string;
    element: React.ReactNode;
  };
  setSelected?: React.Dispatch<
    React.SetStateAction<{
      value: string;
      element: React.ReactNode;
    }>
  >;
  getItemProps?: ReturnType<typeof useInteractions>["getItemProps"];
  getReferenceProps?: ReturnType<typeof useInteractions>["getReferenceProps"];
  getFloatingProps?: ReturnType<typeof useInteractions>["getFloatingProps"];
  handleSelect?: (index: number | null) => void;
  context?: UseFloatingReturn["context"];
  elementsRef?: React.MutableRefObject<(HTMLElement | string | null)[]>;
  labelsRef?: React.MutableRefObject<
    ({
      value: string;
      element: React.ReactNode;
    } | null)[]
  >;
  floatingStyles?: UseFloatingReturn["floatingStyles"];
  isOpen?: boolean;
  controlledValue?: string;
}

export const SelectContext = React.createContext<SelectContextProps>({
  size: "md",
  color: "primary",
  isError: false,
  isSuccess: false,
  disabled: false,
  placement: "bottom",
  offset: 5,
} as SelectContextProps);

// select root
export interface SelectProps {
  size?: BaseComponent<HTMLElement>["size"];
  color?: BaseComponent<HTMLElement>["color"];
  isPill?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  placement?: Placement;
  offset?: OffsetOptions;
  value?: string;
  name?: string;
  onChange?: (arg: string) => void;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/select) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/select#select-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/select#select-theme)
 */
export function SelectRoot({
  size,
  color,
  isPill,
  isError,
  isSuccess,
  disabled,
  placement,
  offset,
  value,
  name,
  onChange,
  children,
}: SelectProps) {
  const contextTheme = useTheme();
  const theme = contextTheme?.select ?? selectTheme;
  const defaultProps = theme?.defaultProps;
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<any>(() => ({
    value,
    element: null,
  }));
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  size ??= (defaultProps?.size as SelectProps["size"]) ?? "md";
  color ??= (defaultProps?.color as SelectProps["color"]) ?? "primary";
  isPill ??= (defaultProps?.isPill as SelectProps["isPill"]) ?? false;
  isError ??= (defaultProps?.isError as SelectProps["isError"]) ?? false;
  isSuccess ??= (defaultProps?.isSuccess as SelectProps["isSuccess"]) ?? false;
  placement ??=
    (defaultProps?.placement as SelectProps["placement"]) ?? "bottom";
  offset ??= (defaultProps?.offset as SelectProps["offset"]) ?? 5;

  const { refs, floatingStyles, context } = useFloating({
    placement: placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      fuiFlip(),
      fuiOffset(offset),
      fuiSize({
        apply({ rects, elements, availableHeight }: any) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
            zIndex: 9999,
          });
        },
        padding: 10,
      }),
    ],
  });

  const labelsRef = React.useRef<
    Array<{ value: string; element: React.ReactNode } | null>
  >([]);
  const elementsRef = React.useRef<Array<HTMLElement | null>>([]);

  const handleSelect = React.useCallback((index: number | null) => {
    setSelectedIndex(index);
    setIsOpen(false);

    if (index !== null) {
      setSelected(labelsRef.current[index]);
      onChange?.(labelsRef.current[index]?.value as any);
    }
  }, []);

  function handleTypeaheadMatch(index: number | null) {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
  });

  const labelsRefTypehead = React.useRef<Array<string | null>>(
    labelsRef.current.map((item: any) => item?.value),
  );

  const typeahead = useTypeahead(context, {
    listRef: labelsRefTypehead,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, typeahead, click, dismiss, role],
  );

  const contextValue = React.useMemo(
    () => ({
      color,
      size,
      isPill,
      isError,
      isSuccess,
      disabled,
      selected,
      activeIndex,
      selectedIndex,
      context,
      refs,
      floatingStyles,
      elementsRef,
      labelsRef,
      setSelected,
      getItemProps,
      handleSelect,
      getReferenceProps,
      getFloatingProps,
      isOpen,
      controlledValue: value,
    }),
    [
      color,
      size,
      isPill,
      isError,
      isSuccess,
      disabled,
      selected,
      activeIndex,
      selectedIndex,
      context,
      refs,
      floatingStyles,
      elementsRef,
      labelsRef,
      getItemProps,
      handleSelect,
      getReferenceProps,
      getFloatingProps,
      isOpen,
      value,
    ],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      {children}
      <input
        readOnly
        name={name}
        style={{ display: "none" }}
        value={value || selected?.value || ""}
      />
    </SelectContext.Provider>
  );
}

SelectRoot.displayName = "MaterialTailwind.Select";

// select trigger
export interface SelectTriggerProps
  extends Omit<Omit<React.AllHTMLAttributes<HTMLElement>, "as">, "children"> {
  as?: React.ElementType;
  indicator: React.ReactNode;
  placeholder?: string;
  className?: string;
  children?: ({
    value,
    element,
  }: {
    value?: string;
    element?: React.ReactNode;
  }) => React.ReactNode;
}

export const SelectTrigger = React.forwardRef<HTMLElement, SelectTriggerProps>(
  ({ as, indicator, placeholder, className, children, ...rest }, ref) => {
    const Element = as || "button";
    const contextTheme = useTheme();
    const theme = contextTheme?.selectTrigger ?? selectTriggerTheme;
    const defaultProps = theme?.defaultProps;
    const {
      refs,
      getReferenceProps,
      selected,
      isPill,
      color,
      size,
      isOpen,
      isError,
      isSuccess,
      disabled,
    } = React.useContext(SelectContext);

    const value = selected?.value;
    const element = selected?.element;

    const elementRef = useMergeRefs([refs?.setReference, ref]);

    indicator ??=
      (defaultProps?.indicator as SelectTriggerProps["indicator"]) ?? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="h-[1em] w-[1em] translate-x-0.5 stroke-[1.5]"
        >
          <path
            d="M17 8L12 3L7 8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 16L12 21L7 16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    const styles = twMerge(
      theme.baseStyle,
      theme.size[size!],
      theme.color[color!],
      isPill && theme.isPill,
      className,
    );

    return (
      <Element
        {...rest}
        ref={elementRef}
        tabIndex={0}
        type="button"
        className={styles}
        data-open={isOpen}
        disabled={disabled}
        data-error={isError}
        data-success={isSuccess}
        {...(getReferenceProps && getReferenceProps())}
      >
        {children
          ? children({ value, element })
          : element ?? (
              <span data-slot="placeholder" className={theme.placeholder}>
                {placeholder}
              </span>
            )}
        {indicator}
      </Element>
    );
  },
);

SelectTrigger.displayName = "MaterialTailwind.SelectTrigger";

// select list
type SelectListBaseProps = Omit<React.AllHTMLAttributes<HTMLElement>, "as"> &
  FloatingFocusManagerProps;

export interface SelectListProps
  extends Omit<SelectListBaseProps, "context" | "children"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const SelectList = React.forwardRef<HTMLElement, SelectListProps>(
  (
    {
      as,
      className,
      children,
      disabled,
      initialFocus,
      returnFocus,
      guards,
      modal,
      visuallyHiddenDismiss,
      closeOnFocusOut,
      order,
      ...rest
    },
    ref,
  ) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.selectList ?? selectListTheme;
    const defaultProps = theme?.defaultProps;
    const {
      context,
      refs,
      getFloatingProps,
      floatingStyles,
      elementsRef,
      labelsRef,
      isOpen,
      selected,
      setSelected,
      controlledValue,
    } = React.useContext(SelectContext);

    disabled ??=
      (defaultProps?.disabled as SelectListProps["disabled"]) ?? false;
    initialFocus ??=
      (defaultProps?.initialFocus as SelectListProps["initialFocus"]) ?? 0;
    returnFocus ??=
      (defaultProps?.returnFocus as SelectListProps["returnFocus"]) ?? true;
    guards ??= (defaultProps?.guards as SelectListProps["guards"]) ?? true;
    modal ??= (defaultProps?.modal as SelectListProps["modal"]) ?? true;
    visuallyHiddenDismiss ??=
      (defaultProps?.visuallyHiddenDismiss as SelectListProps["visuallyHiddenDismiss"]) ??
      true;
    closeOnFocusOut ??=
      (defaultProps?.closeOnFocusOut as SelectListProps["closeOnFocusOut"]) ??
      true;
    order ??= (defaultProps?.order as SelectListProps["order"]) ?? ["content"];

    const styles = twMerge(theme.baseStyle, className);
    const elementRef = useMergeRefs([refs?.setFloating, ref]);

    React.useEffect(() => {
      if (controlledValue) {
        const label = (children as any)?.find(
          (el: any) => selected?.value === el.props.value,
        );

        if (label) {
          setSelected?.({
            value: label?.props?.value || "",
            element: label?.props?.children || "",
          });
        }
      }
    }, []);

    return isOpen ? (
      <FloatingFocusManager
        order={order}
        modal={modal}
        guards={guards}
        disabled={disabled}
        returnFocus={returnFocus}
        initialFocus={initialFocus}
        closeOnFocusOut={closeOnFocusOut}
        visuallyHiddenDismiss={visuallyHiddenDismiss}
        context={context as FloatingFocusManagerProps["context"]}
      >
        <Element
          {...rest}
          ref={elementRef}
          data-open={isOpen}
          style={{ ...floatingStyles, ...rest?.style }}
          className={styles}
          {...(getFloatingProps && getFloatingProps())}
        >
          <FloatingList
            elementsRef={elementsRef as any}
            labelsRef={labelsRef as any}
          >
            {children}
          </FloatingList>
        </Element>
      </FloatingFocusManager>
    ) : null;
  },
);

SelectList.displayName = "MaterialTailwind.SelectList";

// select option
export interface SelectOptionProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  value?: string;
  ripple?: boolean;
  indicator?: React.ReactNode;
  children: React.ReactNode;
}

export const SelectOption = React.forwardRef<HTMLElement, SelectOptionProps>(
  ({ as, className, value, ripple, indicator, children, ...rest }, ref) => {
    const Element = as || "button";
    const contextTheme = useTheme();
    const theme = contextTheme?.selectOption ?? selectOptionTheme;
    const defaultProps = theme?.defaultProps;
    const { getItemProps, handleSelect, activeIndex, selectedIndex, selected } =
      React.useContext(SelectContext);

    ripple ??= (defaultProps?.ripple as SelectOptionProps["ripple"]) ?? true;
    indicator ??=
      (defaultProps?.indicator as SelectOptionProps["indicator"]) ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      );

    const { ref: itemRef, index } = useListItem({
      label: { value, element: children } as any,
    });

    const rippleEffect = ripple !== undefined && new Ripple();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const onClick = rest?.onClick;

      if (ripple) {
        rippleEffect.create(e, "dark");
      }

      handleSelect && handleSelect(index);

      onClick?.(e);
    };

    const curValue = selected?.value || "";
    const isActive = activeIndex === index;
    const isSelected = selectedIndex === index || curValue === value;

    const styles = twMerge(theme.baseStyle, className);

    const elementRef = useMergeRefs([itemRef, ref]);

    return (
      <Element
        {...rest}
        ref={elementRef}
        role="option"
        data-selected={isActive && isSelected}
        aria-selected={isActive && isSelected}
        tabIndex={isActive ? 0 : -1}
        className={styles}
        {...(getItemProps &&
          getItemProps({
            onClick: handleClick,
          }))}
      >
        {children}
        {isSelected && indicator}
      </Element>
    );
  },
);

SelectOption.displayName = "MaterialTailwind.SelectOption";

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  List: SelectList,
  Option: SelectOption,
});

export default Select;