// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { SelectContextProvider, usePrevious, useSelect } from "./SelectContext";

// types

import type { animate, offset } from "../../types/components/select";
import type {
  arrow,
  color,
  containerProps,
  disabled,
  dismiss,
  error,
  label,
  labelProps,
  lockScroll,
  menuProps,
  name,
  onChange,
  selected,
  size,
  success,
  value,
  variant,
} from "../../types/components/select";

// select components
import type { JSX, ParentComponent } from "solid-js";
import { onCleanup, onMount, Match, Show, Switch } from "solid-js";

import { autoUpdate, flip, offset as fuiOffset, shift } from "@floating-ui/dom";
import { Motion } from "@motionone/solid";

import { useFloating } from "solid-floating-ui";
import { createEffect, createMemo, createSignal, mergeProps, splitProps } from "solid-js";
import type { SelectOptionProps } from "./SelectOption";
import { SelectOption } from "./SelectOption";
import { mergeRefs } from "@solid-primitives/refs";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

export interface SelectProps {
  variant?: variant;
  color?: color;
  size?: size;
  label?: label;
  error?: error;
  success?: success;
  arrow?: arrow;
  value?: value;
  onChange?: onChange;
  selected?: selected;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  lockScroll?: lockScroll;
  labelProps?: labelProps;
  menuProps?: menuProps;
  disabled?: disabled;
  name?: name;
  containerProps?: containerProps;
}

const Select: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement> & SelectProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();

  const animation = {
    unmount: {
      opacity: 0,
      transformOrigin: "top",
      transform: "scale(0.95)",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      opacity: 1,
      transformOrigin: "top",
      transform: "scale(1)",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
  };

  const mergedProps = mergeProps(() => theme().select.defaultProps, { animate: animation }, props);

  // 2. set default props

  const [selectProps, rest] = splitProps(mergedProps, [
    "variant",
    "color",
    "size",
    "label",
    "error",
    "success",
    "arrow",
    "value",
    "onChange",
    "selected",
    "offset",
    "dismiss",
    "animate",
    "lockScroll",
    "labelProps",
    "menuProps",
    "disabled",
    "name",
    "children",
    "containerProps",
    "class",
  ]);
  // 3. @floating-ui
  const listItemsRef: HTMLLIElement[] = [];
  const [open, setOpen] = createSignal(false);
  const [activeIndex, setIndex] = createSignal<HTMLLIElement | null>(null);
  const [prevActiveIndex, setPrevActiveIndex] = createSignal<HTMLLIElement | null>(null);
  const [selectedIndex, setSelectedIndex] = createSignal<HTMLLIElement | null>(null);
  const setActiveIndex = (v: HTMLLIElement | null) => {
    setIndex((prev) => {
      setPrevActiveIndex(prev);
      return v;
    });
  };
  // const [controlledScrolling, setControlledScrolling] = createSignal(false);
  const [reference, setReference] = createSignal<HTMLElement>();
  const [floating, setFloating] = createSignal<HTMLUListElement>();
  let containerRef!: HTMLDivElement;
  const position = useFloating(reference, floating, {
    placement: "bottom-start",
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    middleware: [flip({ padding: 5 }), shift(), fuiOffset(selectProps.offset || 5)],
  });

  const contextValue = createMemo(() => ({
    selectedIndex,
    setSelectedIndex,
    listRef: listItemsRef,
    open,
    setOpen,
    onChange: mergedProps.onChange,
    activeIndex,
    setActiveIndex,
    prevActiveIndex,
    position,
  }));

  const state = createMemo(() => {
    if (open()) return "open";
    if ((!open() && contextValue().selectedIndex()) || (!open() && selectProps.value))
      return "withValue";
    return "close";
  });

  // 4. set styles
  const cProps = createMemo(() => {
    const { valid, styles } = theme().select;
    const { base, variants } = styles;
    const selectVariant = variants[findMatch(valid.variants, selectProps.variant, "outlined")];
    const selectSize = selectVariant.sizes[findMatch(valid.sizes, selectProps.size, "md")];
    const selectError = selectVariant.error.select;
    const selectSuccess = selectVariant.success.select;
    const selectColor =
      selectVariant.colors.select[findMatch(valid.colors, selectProps.color, "blue")];
    const labelError = selectVariant.error.label;
    const labelSuccess = selectVariant.success.label;
    const labelColor =
      selectVariant.colors.label[findMatch(valid.colors, selectProps.color, "blue")];
    const stateClasses = selectVariant.states[state()];
    const containerClasses = classnames(
      objectsToString(base.container),
      objectsToString(selectSize.container),
      selectProps.containerProps?.class,
    );
    const selectClasses = twMerge(
      classnames(
        objectsToString(base.select),
        objectsToString(selectVariant.base.select),
        objectsToString(stateClasses.select),
        objectsToString(selectSize.select),
        { [objectsToString(selectColor[state()])]: !selectProps.error && !selectProps.success },
        { [objectsToString(selectError.initial)]: selectProps.error },
        { [objectsToString(selectError.states[state()])]: selectProps.error },
        { [objectsToString(selectSuccess.initial)]: selectProps.success },
        { [objectsToString(selectSuccess.states[state()])]: selectProps.success },
      ),
      selectProps.class,
    );
    const labelClasses = twMerge(
      classnames(
        objectsToString(base.label),
        objectsToString(selectVariant.base.label),
        objectsToString(stateClasses.label),
        objectsToString(selectSize.label.initial),
        objectsToString(selectSize.label.states[state()]),
        { [objectsToString(labelColor[state()])]: !selectProps.error && !selectProps.success },
        { [objectsToString(labelError.initial)]: selectProps.error },
        { [objectsToString(labelError.states[state()])]: selectProps.error },
        { [objectsToString(labelSuccess.initial)]: selectProps.success },
        { [objectsToString(labelSuccess.states[state()])]: selectProps.success },
      ),
      selectProps.labelProps.class ?? "",
    );
    const arrowClasses = classnames(objectsToString(base.arrow.initial), {
      [objectsToString(base.arrow.active)]: open(),
    });
    const menuClasses = twMerge(
      classnames(objectsToString(base.menu)),
      selectProps.menuProps.class ?? "",
    );
    const buttonContentClasses = classnames(
      "absolute top-2/4 -translate-y-2/4",
      selectProps.variant === "outlined" ? "left-3 pt-0.5" : "left-0 pt-3",
    );
    return {
      buttonContentClasses,
      containerClasses,
      selectClasses,
      labelClasses,
      arrowClasses,
      menuClasses,
      selectVariant,
      selectSize,
      selectError,
      selectSuccess,
      selectColor,
      labelError,
      labelSuccess,
      labelColor,
      stateClasses,
    };
  });

  // 7. validate the controlled and uncontrolled select
  createEffect(() => {
    if (selectProps.value && !props.onChange) {
      console.error(
        "Warning: You provided a `value` prop to a select component without an `onChange` handler. This will render a read-only select. If the field should be mutable use `onChange` handler with `value` together.",
      );
    }
  });

  onMount(() => {
    //close  menu when click outside
    window.addEventListener("click", function (e) {
      if (!containerRef.contains(e.target as Node)) {
        setOpen(false);
      }
    });
  });
  createEffect(() => {
    if (!props.lockScroll) return;
    //disable scroll if lockScroll
    if (open()) disableBodyScroll(containerRef);
    //enable scroll when menu is closed
    if (!open()) clearAllBodyScrollLocks();
  });
  onCleanup(() => {
    window.removeEventListener("click", () => undefined);
    if (props.lockScroll) clearAllBodyScrollLocks();
  });
  // 9. return
  return (
    <SelectContextProvider value={contextValue}>
      <div
        {...selectProps.containerProps}
        class={cProps().containerClasses}
        ref={mergeRefs((el) => {
          if (selectProps.containerProps?.ref) selectProps.containerProps.ref = el;
          containerRef = el;
        })}
      >
        <button
          type="button"
          {...rest}
          disabled={selectProps.disabled}
          class={cProps().selectClasses}
          ref={mergeRefs((el) => setReference(el), rest.ref)}
          onClick={() => setOpen(!open())}
          value={selectProps.value || selectedIndex()?.value + ""}
          name={selectProps.name}
        >
          <Switch
            fallback={
              <span class={cProps().buttonContentClasses}>{selectedIndex()?.innerHTML}</span>
            }
          >
            <Match when={selectProps.selected() !== undefined}>
              <span class={cProps().buttonContentClasses}>
                {selectProps.selected!(selectedIndex(), selectedIndex()?.value + "")}
              </span>
            </Match>
            <Match when={props.value && !props.onChange}>
              <span class={cProps().buttonContentClasses}>{props.value}</span>
            </Match>
          </Switch>

          <Show when={!selectProps.arrow} fallback={selectProps.arrow}>
            <div class={cProps().arrowClasses}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </Show>
        </button>
        <label {...selectProps.labelProps} class={cProps().labelClasses}>
          {selectProps.label}
        </label>

        <Motion.ul
          {...selectProps.menuProps}
          ref={(el) => setFloating(el)}
          role="listbox"
          class={cProps().menuClasses}
          style={{
            position: position.strategy,
            top: position.y + "px" ?? 0,
            left: position.x + "px" ?? 0,
            overflow: "auto",
          }}
          aria-hidden={!open()}
          hidden={!open()}
          // onPointerEnter={(e: PointerEvent) => {
          //   const onPointerEnter = selectProps.menuProps?.onPointerEnter;
          //   if (typeof onPointerEnter === "function") {
          //     onPointerEnter(e);
          //   }
          //   setControlledScrolling(false);
          // }}
          // onPointerMove={(e) => {
          //   const onPointerMove = selectProps.menuProps?.onPointerMove;
          //   if (typeof onPointerMove === "function") {
          //     onPointerMove(e);
          //   }
          //   setControlledScrolling(false);
          // }}
          // onKeyDown={(e) => {
          //   const onKeyDown = selectProps.menuProps?.onKeyDown;
          //   if (typeof onKeyDown === "function") {
          //     onKeyDown(e);
          //     setControlledScrolling(true);
          //   }
          //   setControlledScrolling(true);
          // }}
          initial={selectProps.animate.unmount}
          exit={selectProps.animate.unmount}
          animate={open() ? selectProps.animate.mount : selectProps.animate.unmount}
        >
          {selectProps.children}
        </Motion.ul>
      </div>
    </SelectContextProvider>
  );
};

export type { SelectOptionProps };
export { Select, SelectOption as Option, useSelect, usePrevious };
export default Object.assign(Select, { Option: SelectOption });
