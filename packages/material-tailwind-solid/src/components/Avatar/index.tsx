// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import { createEffect, createMemo, mergeProps, splitProps } from "solid-js";
import type { Component, JSX } from "solid-js";
import type { size, variant } from "../../types/components/avatar";
export interface AvatarProps {
  variant?: variant;
  size?: size;
}

export const Avatar: Component<JSX.ImgHTMLAttributes<HTMLImageElement> & AvatarProps> = (props) => {
  // ({ variant, size, className, ...rest }, ref) => {
  // 1. init
  const { avatar } = useTheme();
  const [avatarProps, rest] = splitProps(props, ["variant", "size", "class"]);
  // const { valid, defaultProps, styles } = avatar;
  // const { base, variants, sizes } = styles;
  const defaultProps = mergeProps(avatar.defaultProps, avatarProps);

  // 2. set default props
  // variant = variant ?? defaultProps.variant;
  // size = size ?? defaultProps.size;

  // 3. set styles
  const avatarVariant = createMemo(() =>
    objectsToString(
      avatar.styles.variants[findMatch(avatar.valid.variants, defaultProps.variant, "rounded")],
    ),
  );

  const avatarSize = createMemo(() => {
    const size = findMatch(avatar.valid.sizes, defaultProps.size, "md");
    const styleSize = avatar.styles.sizes[size];
    return objectsToString(styleSize);
  });
  const classes = createMemo(() =>
    twMerge(
      classnames(objectsToString(avatar.styles.base), avatarVariant(), avatarSize()),
      defaultProps.class,
    ),
  );

  createEffect(() => console.log(avatarVariant(), avatarSize(), classes()));
  // 4. return
  return <img {...rest} class={classes()} />;
};

// Avatar.propTypes = {
//   variant: PropTypes.oneOf(propTypesVariant),
//   size: PropTypes.oneOf(propTypesSize),
//   className: propTypesClassName,
// };

// Avatar.displayName = "MaterialTailwind.Avatar";

export default Avatar;
