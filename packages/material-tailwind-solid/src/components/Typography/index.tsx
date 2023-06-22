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
import { Dynamic } from "solid-js/web";
import type {
  asType,
  children,
  color,
  textGradient,
  variant,
} from "../../types/components/typography";

export interface TypographyProps {
  variant?: variant;
  color?: color;
  textGradient?: textGradient;
  as: asType;
  children: children;
}

export const Typography: ParentComponent<JSX.HTMLAttributes<HTMLElement> & TypographyProps> = (
  props,
) => {
  // = React.forwardRef<HTMLElement, TypographyProps>(
  //   ({ variant, color, textGradient, as, className, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().typography.defaultProps, props);
  const [typographyProps, rest] = splitProps(mergedProps, [
    "variant",
    "color",
    "textGradient",
    "as",
    "class",
    "children",
  ]);

  // 3. set styles
  const styles = createMemo(() => {
    const { valid, styles } = theme().typography;
    const { variants, colors, textGradient: gradient } = styles;
    const typographyVariant = objectsToString(
      variants[findMatch(valid.variants, typographyProps.variant, "paragraph")],
    );
    const typographyColor = colors[findMatch(valid.colors, typographyProps.color, "inherit")];
    const gradientTextClasses = objectsToString(gradient);
    const classes = twMerge(
      classnames(
        typographyVariant,
        { [typographyColor.color]: !typographyProps.textGradient },
        { [gradientTextClasses]: typographyProps.textGradient },
        "gradient" in typographyColor && {
          [typographyColor.gradient]: typographyProps.textGradient,
        },
      ),
      typographyProps.class,
    );
    return { classes };
  });

  // 5. return
  return (
    <Dynamic component={typographyProps.as} {...rest} class={styles().classes}>
      {typographyProps.children}
    </Dynamic>
  );
};

export default Typography;
