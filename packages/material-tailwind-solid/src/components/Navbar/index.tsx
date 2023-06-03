// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type {
  blurred,
  children,
  color,
  fullWidth,
  shadow,
  variant,
} from "../../types/components/navbar";

export interface NavbarProps {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  blurred?: blurred;
  fullWidth?: fullWidth;
  children: children;
}

export const Navbar: ParentComponent<JSX.HTMLAttributes<HTMLElement> & NavbarProps> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().navbar.defaultProps, props);
  const [navbarProps, rest] = splitProps(mergedProps, [
    "variant",
    "color",
    "shadow",
    "blurred",
    "fullWidth",
    "class",
    "children",
  ]);

  // 3. set styles
  const cProps = createMemo(() => {
    const { valid, styles } = theme().navbar;
    const { base, variants } = styles;
    const navbarRoot = classnames(objectsToString(base.navbar.initial), {
      [objectsToString(base.navbar.shadow)]: navbarProps.shadow,
      [objectsToString(base.navbar.blurred)]: navbarProps.blurred && navbarProps.color === "white",
      [objectsToString(base.navbar.fullWidth)]: navbarProps.fullWidth,
    });
    const navbarVariant = classnames(
      objectsToString(
        variants[findMatch(valid.variants, navbarProps.variant, "filled")][
          findMatch(valid.colors, navbarProps.color, "white")
        ],
      ),
    );
    const navbarClasses = twMerge(classnames(navbarRoot, navbarVariant), navbarProps.class);

    return { navbarRoot, navbarVariant, navbarClasses };
  });
  // 4. return
  return (
    <nav {...rest} class={cProps().navbarClasses}>
      {props.children}
    </nav>
  );
};

export default Navbar;
