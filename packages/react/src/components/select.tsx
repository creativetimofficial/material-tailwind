import React from "react";

// @floating-ui
import {
  flip as fuiFlip,
  offset as fuiOffset,
  size as fuiSize,
  useRole,
  useClick,
  autoUpdate,
  useDismiss,
  useFloating,
  useTypeahead,
  useInteractions,
  useListNavigation,
  FloatingList,
  useListItem,
  FloatingFocusManager,
  type Placement,
  type OffsetOptions,
  type FlipOptions,
} from "@floating-ui/react";

// @utils
import { mergeRefs } from "@utils";
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";
import { useElementSize } from "usehooks-ts";

// @theme
import { selectTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";

export interface SelectProps
  extends Omit<BaseComponent<"button">, "variant" | "onChange"> {
  as?: React.ElementType;
  rounded?: boolean;
  fullWidth?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  className?: string;
  selectClassName?: string;
  listClassName?: string;
  placeholder?: string;
  placement?: Placement;
  offset?: OffsetOptions;
  flip?: FlipOptions;
  value?: string;
  onChange?: (args: {
    value: string;
    children: string | React.ReactElement;
  }) => void;
  children: React.ReactNode;
  selectRef?: React.RefObject<HTMLButtonElement>;
  listRef?: React.RefObject<HTMLDivElement>;
}

export interface OptionProps extends React.ComponentProps<any> {
  value?: string;
  children: React.ReactNode;
  className?: string;
}

interface SelectContextValue {
  color: SelectProps["color"];
  size: SelectProps["size"];
  rounded: SelectProps["rounded"];
  activeIndex: number | null;
  selectedIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
  handleSelect: (index: number | null) => void;
}

const SelectContext = React.createContext<SelectContextValue>(
  {} as SelectContextValue,
);

export const Option = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  OptionProps
>(({ value, children, className, ...rest }, ref) => {
  const contextTheme = useTheme();
  const theme = contextTheme?.select ?? selectTheme;
  const {
    color,
    size,
    rounded,
    activeIndex,
    selectedIndex,
    getItemProps,
    handleSelect,
  } = React.useContext(SelectContext);

  const { ref: itemRef, index } = useListItem({
    label: { value, children } as any,
  });

  // const refs = mergeRefs([ref, itemRef]);

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  const styles = twMerge(
    theme.optionStyle,
    theme.optionSize[size as string],
    rounded && theme.rounded,
    isSelected
      ? theme.optionSelectColor[color as string]
      : theme.optionColor[color as string],
    className,
  );

  return (
    <button
      {...rest}
      ref={itemRef}
      role="option"
      aria-selected={isActive && isSelected}
      tabIndex={isActive ? 0 : -1}
      className={styles}
      {...getItemProps({
        onClick: () => handleSelect(index),
      })}
    >
      {children}
    </button>
  );
});

export function Select({
  as,
  color,
  size,
  rounded,
  fullWidth,
  isError,
  isSuccess,
  className,
  selectClassName,
  listClassName,
  placeholder,
  placement,
  offset,
  flip,
  value,
  onChange,
  children,
  selectRef,
  listRef,
  ...rest
}: SelectProps) {
  const Element = as ?? "div";
  const contextTheme = useTheme();
  const theme = contextTheme?.select ?? selectTheme;
  const defaultProps = contextTheme?.select?.defaultProps;

  size ??= (defaultProps?.size as SelectProps["size"]) ?? "md";
  color ??= (defaultProps?.color as SelectProps["color"]) ?? "primary";
  rounded ??= (defaultProps?.rounded as SelectProps["rounded"]) ?? false;
  fullWidth ??= (defaultProps?.fullWidth as SelectProps["fullWidth"]) ?? false;
  isError ??= (defaultProps?.isError as SelectProps["isError"]) ?? false;
  isSuccess ??= (defaultProps?.isSuccess as SelectProps["isSuccess"]) ?? false;
  placement ??=
    (defaultProps?.placement as SelectProps["placement"]) ?? "bottom";
  offset ??= (defaultProps?.offset as SelectProps["offset"]) ?? 5;
  flip ??= (defaultProps?.flip as any) ?? true;

  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<any>(null);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement: placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip && fuiFlip(),
      fuiOffset(offset ?? 5),
      fuiSize({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
            zIndex: 99,
          });
        },
        padding: 10,
      }),
    ],
  });

  const labelsRef = React.useRef<Array<string | null>>([]);
  const elementsRef = React.useRef<Array<HTMLElement | null>>([]);

  const handleSelect = React.useCallback((index: number | null) => {
    setSelectedIndex(index);
    setIsOpen(false);

    if (index !== null) {
      setSelected(labelsRef.current[index]);
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

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
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

  const selectContext = React.useMemo(
    () => ({
      color,
      size,
      rounded,
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect,
    }),
    [
      color,
      size,
      rounded,
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect,
    ],
  );

  const baseStyles = twMerge(
    theme.baseStyle,
    fullWidth && theme["fullWidth"],
    className,
  );

  const selectStyles = twMerge(
    theme.selectStyle,
    theme.selectColor[color],
    theme.selectSize[size],
    rounded && theme["rounded"],
    fullWidth && theme["fullWidth"],
    isError && theme["isError"],
    isSuccess && theme["isSuccess"],
    selectClassName,
  );

  const listStyles = twMerge(theme.listStyle, listClassName);

  return (
    <Element className={baseStyles}>
      <button
        {...rest}
        ref={refs.setReference}
        tabIndex={0}
        {...getReferenceProps()}
        className={selectStyles}
      >
        {selected?.children ?? placeholder ?? <>&nbsp;</>}
      </button>
      <SelectContext.Provider value={selectContext}>
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className={listStyles}
            >
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                {children}
              </FloatingList>
            </div>
          </FloatingFocusManager>
        )}
      </SelectContext.Provider>
    </Element>
  );
}

Select.displayName = "MaterialTailwind.Select";
Option.displayName = "MaterialTailwind.Select.Option";
