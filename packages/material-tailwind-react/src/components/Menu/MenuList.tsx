import React from "react";

// @floating-ui
import { FloatingPortal } from "@floating-ui/react-dom-interactions";

// framer-motion
import { AnimatePresence, motion } from "framer-motion";

// utils
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
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
      defaultProps,
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
    } = useMenu();

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const menuClasses = classnames(objectsToString(base.menu), className);

    // 4. set refs
    const mergedRef = React.useMemo(() => mergeRefs([ref, floating]), [ref, floating]);

    // 5. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 6. return
    return (
      <FloatingPortal>
        <NewAnimatePresence>
          {open && (
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
