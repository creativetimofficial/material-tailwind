import React from "react";

// framer-motion
import {
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";

// utils
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useMenu } from "./MenuContext";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type { className, children } from "../../types/components/menu";
import { propTypesClassName, propTypesChildren } from "../../types/components/menu";

export interface MenuListProps extends React.ComponentProps<"ul"> {
  className?: className;
  children: children;
}

export const MenuList = React.forwardRef<HTMLUListElement, MenuListProps>(
  ({ children, className, ...rest }, ref) => {
    // 1. init
    const { menu } = useTheme();
    const {
      styles: { base },
    } = menu;
    const {
      open,
      handler,
      setInternalOpen,
      strategy,
      x,
      y,
      floating,
      listItemsRef,
      getFloatingProps,
      getItemProps,
      appliedAnimation,
      lockScroll,
      context,
    } = useMenu();

    // 2. set default props
    className = className ?? "";

    // 3. set styles
    const menuClasses = twMerge(classnames(objectsToString(base.menu)), className);

    // 4. set refs
    const mergedRef = React.useMemo(() => mergeRefs([ref, floating]), [ref, floating]);

    // 5. create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 6. menu component
    const menuComponent = (
      <motion.ul
        {...getFloatingProps({
          ...rest,
          ref: mergedRef,
          className: menuClasses,
          style: {
            position: strategy,
            top: y ?? "",
            left: x ?? "",
          },
        })}
        initial="unmount"
        exit="unmount"
        animate={open ? "mount" : "unmount"}
        variants={appliedAnimation}
      >
        {React.Children.map(
          children,
          (child, index) =>
            React.isValidElement(child) &&
            React.cloneElement(
              child,
              getItemProps({
                ...child.props,
                onClick: (e) => {
                  const onClickFunction = child.props?.onClick;

                  if (typeof onClickFunction === "function" && handler) {
                    onClickFunction(e);
                  } else if (typeof onClickFunction === "function") {
                    setInternalOpen(false);
                    onClickFunction(e);
                  }

                  setInternalOpen(false);
                },
                ref(nodeElement) {
                  listItemsRef.current[index] = nodeElement;
                },
              }),
            ),
        )}
      </motion.ul>
    );

    // 7. return
    return (
      <FloatingPortal>
        <NewAnimatePresence>
          {open && (
            <>
              {lockScroll ? (
                <FloatingOverlay lockScroll>
                  <FloatingFocusManager context={context} preventTabbing>
                    {menuComponent}
                  </FloatingFocusManager>
                </FloatingOverlay>
              ) : (
                <FloatingFocusManager context={context} preventTabbing>
                  {menuComponent}
                </FloatingFocusManager>
              )}
            </>
          )}
        </NewAnimatePresence>
      </FloatingPortal>
    );
  },
);

MenuList.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

MenuList.displayName = "MaterialTailwind.MenuList";

export default MenuList;
