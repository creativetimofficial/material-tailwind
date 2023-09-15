import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useSelect } from "./SelectContext";

// types
import type { value, index, disabled, className, children } from "../../types/components/select";
import {
  propTypesValue,
  propTypesIndex,
  propTypesDisabled,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/select";

export interface SelectOptionProps extends React.ComponentProps<"li"> {
  value?: value;
  index?: index;
  disabled?: disabled;
  className?: className;
  children: children;
}

export const SelectOption = ({
  value = "",
  index = 0,
  disabled = false,
  className = "",
  children,
  ...rest
}: SelectOptionProps) => {
  const { select } = useTheme();
  const { styles } = select;
  const { base } = styles;

  // 2. set @floating-ui
  const {
    selectedIndex,
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef,
  } = useSelect();

  function handleSelect() {
    setSelectedIndex(index);
    onChange(value);
    setOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || (event.key === " " && !dataRef.current.typing)) {
      event.preventDefault();
      handleSelect();
    }
  }

  // 3. set styles
  const optionBaseClasses = objectsToString(base.option.initial);
  const optionActiveClasses = objectsToString(base.option.active);
  const optionDisabledClasses = objectsToString(base.option.disabled);
  const classes = twMerge(
    classnames(optionBaseClasses, {
      [optionActiveClasses]: selectedIndex === index,
      [optionDisabledClasses]: disabled,
    }),
    className ?? "",
  );

  // 4. return
  return (
    <li
      {...rest}
      role="option"
      ref={(node) => (listRef.current[index] = node)}
      className={classes}
      disabled={disabled}
      tabIndex={activeIndex === index ? 0 : 1}
      aria-selected={activeIndex === index && selectedIndex === index}
      data-selected={selectedIndex === index}
      {...getItemProps({
        onClick: (e: any) => {
          const onClick = rest?.onClick;

          if (typeof onClick === "function") {
            onClick(e);
            handleSelect();
          }

          handleSelect();
        },
        onKeyDown: (e: any) => {
          const onKeyDown = rest?.onKeyDown;

          if (typeof onKeyDown === "function") {
            onKeyDown(e);
            handleKeyDown(e);
          }

          handleKeyDown(e);
        },
      })}
    >
      {children}
    </li>
  );
};

SelectOption.propTypes = {
  value: propTypesValue,
  index: propTypesIndex,
  disabled: propTypesDisabled,
  className: propTypesClassName,
  children: propTypesChildren,
};

SelectOption.displayName = "MaterialTailwind.SelectOption";

export default SelectOption;
