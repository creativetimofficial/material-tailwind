import React, { forwardRef } from "react";
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react-dom-interactions";
import PropTypes from "prop-types";
import { useTheme } from "context/theme";
import MenuCore from "components/Menu/MenuCore";
import MenuItem from "components/Menu/MenuItem";

const Menu = forwardRef(
  ({ open, handler, node, placement, offset, dismiss, className, children, ...rest }, ref) => {
    // 1. init
    const parentId = useFloatingParentNodeId();
    const { menu } = useTheme();
    const { defaultProps } = menu;

    // 2. set default props
    placement = placement || defaultProps.placement;
    offset = offset || defaultProps.offset;
    dismiss = dismiss || defaultProps.dismiss;
    className = className || defaultProps.className;

    // 3. set props object
    const props = {
      open,
      handler,
      node,
      placement,
      offset,
      dismiss,
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
  offset: PropTypes.shape({
    mainAxis: PropTypes.number,
    crossAxis: PropTypes.number,
    alignmentAxis: PropTypes.number,
  }),
  dismiss: PropTypes.shape({
    enabled: PropTypes.bool,
    escapeKey: PropTypes.bool,
    referencePointerDown: PropTypes.bool,
    outsidePointerDown: PropTypes.bool,
    ancestorScroll: PropTypes.bool,
    bubbles: PropTypes.bool,
  }),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Menu.Item = MenuItem;
Menu.displayName = "Menu";

export { Menu, MenuItem };
export default Menu;
