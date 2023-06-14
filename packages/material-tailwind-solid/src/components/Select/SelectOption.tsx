// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useSelect } from "./SelectContext";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import type { disabled, index, value } from "../../types/components/select";

export interface SelectOptionProps {
  value?: value;
  index?: index;
  disabled?: disabled;
}

export const SelectOption: ParentComponent<
  JSX.HTMLAttributes<HTMLLIElement> & SelectOptionProps
> = (props) => {
  let ref!: HTMLLIElement;
  const theme = useTheme();
  const context = useSelect();
  const [itemProps, rest] = splitProps(props, ["disabled", "value", "index", "class", "children"]);

  function handleSelect() {
    context()?.setSelectedIndex(ref);
    if (typeof context()?.onChange === "function") context()?.onChange!(itemProps.value || "");
    context()?.setOpen(false);
    context()?.setActiveIndex(null);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (
      event.key === "Enter" ||
      event.key === " "
      // && !dataRef.current.typing
    ) {
      event.preventDefault();
      handleSelect();
    }
  }

  // 3. set styles
  const cProps = createMemo(() => {
    const { styles } = theme().select;
    const { base } = styles;
    const optionBaseClasses = objectsToString(base.option.initial);
    const optionActiveClasses = objectsToString(base.option.active);
    const optionDisabledClasses = objectsToString(base.option.disabled);
    const classes = twMerge(
      classnames(optionBaseClasses, {
        [optionActiveClasses]: context()?.selectedIndex() === ref,
        [optionDisabledClasses]: itemProps.disabled,
      }),
      itemProps.class ?? "",
    );
    return { classes };
  });

  // 4. return
  return (
    <li
      {...rest}
      role="option"
      ref={ref}
      class={cProps().classes}
      //@ts-ignore
      disabled={itemProps.disabled}
      value={itemProps.value || ""}
      tabIndex={context()?.activeIndex() === itemProps.index ? 0 : 1}
      aria-selected={
        context()?.activeIndex === itemProps.index && context()?.selectedIndex() === itemProps.index
      }
      data-selected={context()?.selectedIndex() === itemProps.index}
      onClick={(e: any) => {
        const onClick = rest?.onClick;
        if (typeof onClick === "function") {
          onClick(e);
          handleSelect();
        }
        handleSelect();
      }}
      onKeyDown={(e: any) => {
        const onKeyDown = rest?.onKeyDown;
        if (typeof onKeyDown === "function") onKeyDown(e);
        handleKeyDown(e);
      }}
    >
      {itemProps.children}
    </li>
  );
};

export default SelectOption;
