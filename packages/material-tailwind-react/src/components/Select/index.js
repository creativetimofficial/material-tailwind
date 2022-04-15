/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  forwardRef,
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
  cloneElement,
  Children,
} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useSelect } from "downshift";
import { AnimatePresence, motion } from "framer-motion";
import merge from "deepmerge";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";
import { useTheme } from "context/theme";

const SelectContext = createContext(null);
SelectContext.displayName = "SelectContextProvider";

const Option = forwardRef(({ disabled, value, children, ...rest }, ref) => {
  const { getItemProps } = useContext(SelectContext);

  return (
    <li
      {...getItemProps({
        ref,
        disabled,
        ...rest,
      })}
    >
      {children}
    </li>
  );
});

Option.defaultProps = {
  disabled: false,
  value: "",
};

Option.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

const Select = forwardRef(
  (
    {
      variant,
      color,
      size,
      label,
      error,
      success,
      arrow,
      open,
      value,
      onChange,
      labelProps,
      menuProps,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { select } = useTheme();
    const { defaultProps, valid } = select;
    const { base, variants } = select.styles;
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
      openMenu,
      closeMenu,
      onHighlightedIndexChange,
    } = useSelect({
      items: children,
      selectedItem: value,
      onSelectedItemChange: onChange,
      id: rest && rest.id ? rest.id : "select",
    });

    const [state, setState] = useState("close");
    useEffect(() => {
      if (isOpen) {
        setState("open");
      } else if (!isOpen && Boolean(selectedItem)) {
        setState("withValue");
      } else {
        setState("close");
      }
    }, [isOpen, selectedItem]);

    useEffect(() => {
      if (open) openMenu();
      if (open === false) closeMenu();
    }, [closeMenu, open, openMenu]);

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    arrow = arrow ?? defaultProps.arrow;
    labelProps = labelProps ?? defaultProps.labelProps;
    menuProps = menuProps ?? defaultProps.menuProps;
    className = className ?? defaultProps.className;

    // 3. set styles
    const selectVariant = variants[findMatch(valid.variants, variant, "outlined")];
    const selectSize = selectVariant.sizes[findMatch(valid.sizes, size, "md")];
    const selectError = selectVariant.error.select;
    const selectSuccess = selectVariant.success.select;
    const selectColor = selectVariant.colors.select[findMatch(valid.colors, color, "light-blue")];
    const labelError = selectVariant.error.label;
    const labelSuccess = selectVariant.success.label;
    const labelColor = selectVariant.colors.label[findMatch(valid.colors, color, "light-blue")];
    const stateStyles = selectVariant.states[state];
    const containerClasses = classnames(
      objectsToString(base.container),
      objectsToString(selectSize.container),
    );
    const selectClasses = classnames(
      objectsToString(base.select),
      objectsToString(selectVariant.base.select),
      objectsToString(stateStyles.select),
      objectsToString(selectSize.select),
      { [objectsToString(selectColor[state])]: !error && !success },
      { [objectsToString(selectError.base)]: error },
      { [objectsToString(selectError.states[state])]: error },
      { [objectsToString(selectSuccess.base)]: success },
      { [objectsToString(selectSuccess.states[state])]: success },
      className,
    );
    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(selectVariant.base.label),
      objectsToString(stateStyles.label),
      objectsToString(selectSize.label.base),
      objectsToString(selectSize.label.states[state]),
      { [objectsToString(labelColor[state])]: !error && !success },
      { [objectsToString(labelError.base)]: error },
      { [objectsToString(labelError.states[state])]: error },
      { [objectsToString(labelSuccess.base)]: success },
      { [objectsToString(labelSuccess.states[state])]: success },
      labelProps.className ?? "",
    );
    const arrowClasses = classnames(objectsToString(base.arrow.base), {
      [objectsToString(base.arrow.active)]: state === "open",
    });
    const menuClasses = classnames(objectsToString(base.menu), menuProps.className ?? "");
    const optionClasses = objectsToString(base.option);
    const optionActiveClasses = objectsToString(base.optionActive);
    const optionDisabledClasses = objectsToString(base.optionDisabled);

    // 4. set animation
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
    const appliedAnimation = merge(animation, menuProps.animate ?? {});

    const contextValue = useMemo(
      () => ({ getItemProps, highlightedIndex, onHighlightedIndexChange }),
      [getItemProps, highlightedIndex, onHighlightedIndexChange],
    );

    // 5. return
    return (
      <SelectContext.Provider value={contextValue}>
        <div ref={ref} className={containerClasses}>
          <button type="button" {...getToggleButtonProps({ ...rest, className: selectClasses })}>
            <span
              className={`absolute top-2/4 -translate-y-2/4 ${
                variant === "outlined" ? "left-3 pt-0.5" : "left-0 pt-3"
              }`}
            >
              {selectedItem && selectedItem.props.children}
            </span>
            <div className={arrowClasses}>
              {arrow === false
                ? null
                : arrow || (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
            </div>
          </button>
          <label {...getLabelProps({ ...labelProps, className: labelClasses })}>{label}</label>
          <div {...getMenuProps()}>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  {...getMenuProps({
                    ...menuProps,
                    className: menuClasses,
                    initial: "unmount",
                    exit: "unmount",
                    animate: isOpen ? "mount" : "unmount",
                    variants: appliedAnimation,
                  })}
                >
                  {Children.map(children, (child, index) =>
                    cloneElement(child, {
                      item: children,
                      index,
                      className: classnames(
                        optionClasses,
                        {
                          [optionDisabledClasses]: child.props?.disabled,
                          [optionActiveClasses]: highlightedIndex === index,
                        },
                        child.props?.className,
                      ),
                    }),
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SelectContext.Provider>
    );
  },
);

Select.propTypes = {
  variant: PropTypes.oneOf(["standard", "outlined", "static"]),
  size: PropTypes.oneOf(["md", "lg"]),
  color: PropTypes.oneOf([
    "blue-grey",
    "grey",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  label: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  arrow: PropTypes.node,
  open: PropTypes.bool,
  value: PropTypes.node,
  onChange: PropTypes.func,
  labelProps: PropTypes.instanceOf(Object),
  menuProps: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Select.displayName = "Select";
Option.displayName = "Option";
Select.Option = Option;

export { Select, Option };
export default Select;
