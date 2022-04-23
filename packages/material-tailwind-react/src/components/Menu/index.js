import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// @floating-ui
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react-dom-interactions";

// context
import { useTheme } from "../../context/theme";

// menu components
import MenuCore from "./MenuCore";
import MenuItem from "./MenuItem";

const Menu = forwardRef(
  (
    { open, handler, node, placement, offset, dismiss, animate, className, children, ...rest },
    ref,
  ) => {
    // 1. init
    const parentId = useFloatingParentNodeId();
    const { menu } = useTheme();
    const { defaultProps } = menu;

    // 2. set default props
    placement = placement ?? defaultProps.placement;
    offset = offset ?? defaultProps.offset;
    dismiss = dismiss ?? defaultProps.dismiss;
    className = className ?? defaultProps.className;

    // 3. set props object
    const props = {
      open,
      handler,
      node,
      placement,
      offset,
      dismiss,
      animate,
      className,
    };

    // 4. return
    if (parentId == null) {
      return (
        <FloatingTree>
          <MenuCore {...rest} ref={ref} {...props}>
            {children}
          </MenuCore>
        </FloatingTree>
      );
    }

    return (
      <MenuCore {...rest} ref={ref} {...props}>
        {children}
      </MenuCore>
    );
  },
);

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  node: PropTypes.node.isRequired,
  placement: PropTypes.oneOf([
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
  ]),
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      mainAxis: PropTypes.number,
      crossAxis: PropTypes.number,
      alignmentAxis: PropTypes.number,
    }),
  ]),
  dismiss: PropTypes.shape({
    enabled: PropTypes.bool,
    escapeKey: PropTypes.bool,
    referencePointerDown: PropTypes.bool,
    outsidePointerDown: PropTypes.bool,
    ancestorScroll: PropTypes.bool,
    bubbles: PropTypes.bool,
  }),
  animate: PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object),
  }),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Menu.displayName = "Menu";

export { Menu, MenuItem };
export default Object.assign(Menu, { Item: MenuItem });
