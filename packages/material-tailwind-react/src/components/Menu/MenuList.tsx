import React from "react";

// framer-motion
import {
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
  useMergeRefs,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";

// utils
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
  dismissible?: boolean;
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
      activeIndex,
      tree,
      allowHover,
      setActiveIndex,
      nested,
    } = useMenu();

    // 2. set default props
    className = className ?? "";

    // 3. set styles
    const menuClasses = twMerge(classnames(objectsToString(base.menu)), className);

    // 4. set refs
    const mergedRef = useMergeRefs([ref, floating]);

    // 5. create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 6. menu component
    const menuComponent = (
      <motion.div
        {...rest}
        ref={mergedRef}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
        className={menuClasses}
        {...getFloatingProps({
          onKeyDown(event) {
            if (event.key === "Tab") {
              handler(false);

              if (event.shiftKey) {
                event.preventDefault();
              }
            }
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
                tabIndex: activeIndex === index ? 0 : -1,
                role: "menuitem",
                className: child.props.className,
                ref(node: HTMLButtonElement) {
                  listItemsRef.current[index] = node;
                },
                onClick(event) {
                  if (child.props.onClick) {
                    child.props.onClick?.(event);
                  }

                  tree?.events.emit("click");
                },
                onMouseEnter() {
                  if (allowHover && open) {
                    setActiveIndex(index);
                  }
                },
              }),
            ),
        )}
      </motion.div>
    );

    // 7. return
    return (
      <FloatingPortal>
        <NewAnimatePresence>
          {open && (
            <>
              {lockScroll ? (
                <FloatingOverlay lockScroll>
                  <FloatingFocusManager
                    context={context}
                    modal={!nested}
                    initialFocus={nested ? -1 : 0}
                    returnFocus={!nested}
                    visuallyHiddenDismiss
                  >
                    {menuComponent}
                  </FloatingFocusManager>
                </FloatingOverlay>
              ) : (
                <FloatingFocusManager
                  context={context}
                  modal={!nested}
                  initialFocus={nested ? -1 : 0}
                  returnFocus={!nested}
                  visuallyHiddenDismiss
                >
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
