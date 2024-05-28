"use client";

import * as React from "react";

// @components
import {
  FloatingPortal,
  FloatingFocusManager,
  FloatingNode,
  FloatingList,
  FloatingTree,
} from "@floating-ui/react";

// @hooks
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useHover,
  useInteractions,
  useMergeRefs,
  useFloatingTree,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useListItem,
  useListNavigation,
} from "@floating-ui/react";
import { useTheme } from "@context";

// @utils
import {
  autoUpdate,
  flip as fuiFlip,
  offset as fuiOffset,
  shift,
  safePolygon,
} from "@floating-ui/react";
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @types
import type {
  OffsetOptions,
  Placement,
  UseFloatingReturn,
  FloatingFocusManagerProps,
} from "@floating-ui/react";

// @theme
import {
  menuTheme,
  menuTriggerTheme,
  menuContentTheme,
  menuItemTheme,
} from "@theme";

// menu context
type FloatingType = Partial<UseFloatingReturn> &
  Partial<ReturnType<typeof useInteractions>>;

export interface MenuContextProps extends FloatingType {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  item?: ReturnType<typeof useListItem>;
  isNested?: boolean;
  activeIndex?: number | null;
  elementsRef?: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  labelsRef?: React.MutableRefObject<React.ReactNode[]>;
}

export const MenuContext = React.createContext<MenuContextProps>({
  open: false,
  setOpen: () => {},
} as MenuContextProps);

// menu root
export interface MenuProps {
  open?: boolean;
  onOpenChange?: () => void;
  placement?: Placement;
  offset?: OffsetOptions;
  children: React.ReactNode;
}

function MenuCore({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement,
  offset,
  children,
}: MenuProps) {
  const contextTheme = useTheme();
  const theme = contextTheme?.menu ?? menuTheme;
  const defaultProps = theme?.defaultProps;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = React.useRef<Array<React.ReactNode | null>>([]);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const isNested = parentId != null;
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  placement ??= isNested
    ? "right-start"
    : (defaultProps?.placement as MenuProps["placement"]) ?? "bottom";

  offset ??= isNested ? 8 : (defaultProps?.offset as MenuProps["offset"]) ?? 5;

  const { floatingStyles, refs, context } = useFloating({
    nodeId,
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [fuiOffset(offset), fuiFlip(), shift({ padding: 5 })],
  });

  const hover = useHover(context, {
    enabled: isNested,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const click = useClick(context, {
    event: "mousedown",
    toggle: !isNested,
    ignoreMouse: isNested,
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, { bubbles: true });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation],
  );

  const contextValue = React.useMemo(
    () => ({
      open,
      setOpen,
      getReferenceProps,
      getFloatingProps,
      getItemProps,
      floatingStyles,
      refs,
      context,
      item,
      isNested,
      activeIndex,
      elementsRef,
      labelsRef,
    }),
    [
      open,
      setOpen,
      getReferenceProps,
      getFloatingProps,
      getItemProps,
      floatingStyles,
      refs,
      context,
      item,
      isNested,
      activeIndex,
      elementsRef,
      labelsRef,
    ],
  );

  React.useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setOpen(false);
      }
    }

    tree.events.on("click", handleTreeClick);
    tree.events.on("menuopen", onSubMenuOpen);

    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("menuopen", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  React.useEffect(() => {
    if (open && tree) {
      tree.events.emit("menuopen", { parentId, nodeId });
    }
  }, [tree, open, nodeId, parentId]);

  return (
    <FloatingNode id={nodeId}>
      <MenuContext.Provider value={contextValue}>
        {children}
      </MenuContext.Provider>
    </FloatingNode>
  );
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/menu) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/menu#menu-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/menu#menu-theme)
 */
export function MenuRoot(props: MenuProps) {
  const parentId = useFloatingParentNodeId();

  return parentId === null ? (
    <FloatingTree>
      <MenuCore {...props} />
    </FloatingTree>
  ) : (
    <MenuCore {...props} />
  );
}

MenuRoot.displayName = "MaterialTailwind.Menu";

// menu trigger
export interface MenuTriggerProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const MenuTrigger = React.forwardRef<HTMLElement, MenuTriggerProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as || "button";
    const contextTheme = useTheme();
    const theme = contextTheme?.menuTrigger ?? menuTriggerTheme;
    const {
      refs,
      item,
      activeIndex,
      isNested,
      getReferenceProps,
      getItemProps,
      open,
    } = React.useContext(MenuContext);

    const styles = twMerge(theme.baseStyle, className);
    const elementRef = useMergeRefs([refs?.setReference, item?.ref, ref]);

    return (
      <Element
        {...rest}
        ref={elementRef}
        data-open={open}
        data-nested={isNested}
        tabIndex={!isNested ? undefined : activeIndex === item?.index ? 0 : -1}
        role={isNested ? "menuitem" : undefined}
        className={styles}
        {...(getReferenceProps &&
          getItemProps &&
          getReferenceProps(getItemProps()))}
      >
        {children}
      </Element>
    );
  },
);

MenuTrigger.displayName = "MaterialTailwind.MenuTrigger";

// menu content
type MenuContentBaseProps = Omit<React.AllHTMLAttributes<HTMLElement>, "as"> &
  FloatingFocusManagerProps;

export interface MenuContentProps
  extends Omit<MenuContentBaseProps, "context" | "children"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const MenuContent = React.forwardRef<HTMLElement, MenuContentProps>(
  (
    {
      as,
      className,
      children,
      disabled,
      initialFocus,
      returnFocus,
      guards,
      modal,
      visuallyHiddenDismiss,
      closeOnFocusOut,
      order,
      ...rest
    },
    ref,
  ) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.menuContent ?? menuContentTheme;
    const defaultProps = theme.defaultProps;
    const {
      elementsRef,
      labelsRef,
      context,
      refs,
      getFloatingProps,
      open,
      floatingStyles,
      isNested,
    } = React.useContext(MenuContext);

    disabled ??=
      (defaultProps?.disabled as MenuContentProps["disabled"]) ?? false;
    initialFocus ??=
      (defaultProps?.initialFocus as MenuContentProps["initialFocus"]) ?? 0;
    returnFocus ??=
      (defaultProps?.returnFocus as MenuContentProps["returnFocus"]) ?? true;
    guards ??= (defaultProps?.guards as MenuContentProps["guards"]) ?? true;
    modal ??= (defaultProps?.modal as MenuContentProps["modal"]) ?? false;
    visuallyHiddenDismiss ??=
      (defaultProps?.visuallyHiddenDismiss as MenuContentProps["visuallyHiddenDismiss"]) ??
      true;
    closeOnFocusOut ??=
      (defaultProps?.closeOnFocusOut as MenuContentProps["closeOnFocusOut"]) ??
      true;
    order ??= (defaultProps?.order as MenuContentProps["order"]) ?? ["content"];

    const styles = twMerge(theme.baseStyle, className);
    const elementRef = useMergeRefs([refs?.setFloating, ref]);

    return (
      <FloatingList
        elementsRef={elementsRef as any}
        labelsRef={labelsRef as any}
      >
        {open && (
          <FloatingPortal>
            <FloatingFocusManager
              order={order}
              modal={modal}
              guards={guards}
              disabled={disabled}
              initialFocus={isNested ? -1 : initialFocus}
              returnFocus={isNested ? false : returnFocus}
              closeOnFocusOut={closeOnFocusOut}
              visuallyHiddenDismiss={visuallyHiddenDismiss}
              context={context as FloatingFocusManagerProps["context"]}
            >
              <Element
                {...rest}
                ref={elementRef}
                data-open={open}
                style={{ ...floatingStyles, ...rest?.style }}
                className={styles}
                {...(getFloatingProps && getFloatingProps())}
              >
                {children}
              </Element>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </FloatingList>
    );
  },
);

MenuContent.displayName = "MaterialTailwind.MenuContent";

// menu item
export interface MenuItemProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  ripple?: boolean;
  disabled?: boolean;
  closeOnClick?: boolean;
  children: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLElement, MenuItemProps>(
  (
    { as, className, ripple, disabled, closeOnClick, children, ...rest },
    ref,
  ) => {
    const Element = as || "button";
    const contextTheme = useTheme();
    const theme = contextTheme?.menuItem ?? menuItemTheme;
    const defaultProps = theme.defaultProps;
    const { activeIndex, getItemProps } = React.useContext(MenuContext);

    ripple ??= (defaultProps?.ripple as MenuItemProps["ripple"]) ?? true;
    closeOnClick ??=
      (defaultProps?.closeOnClick as MenuItemProps["closeOnClick"]) ?? true;

    const rippleEffect = ripple !== undefined && new Ripple();
    const item = useListItem({
      label: disabled ? null : (children as string),
    });
    const tree = useFloatingTree();
    const isActive = item.index === activeIndex;

    const elementRef = useMergeRefs([item.ref, ref]);

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element
        {...rest}
        ref={elementRef}
        role="menuitem"
        aria-disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={styles}
        {...(getItemProps &&
          getItemProps({
            onClick(event: React.MouseEvent<HTMLElement>) {
              rest.onClick?.(event);

              if (closeOnClick) {
                tree?.events.emit("click");
              }

              if (ripple) {
                rippleEffect.create(event, "dark");
              }
            },
          }))}
      >
        {children}
      </Element>
    );
  },
);

export const Menu = Object.assign(MenuRoot, {
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
});

export default Menu;
