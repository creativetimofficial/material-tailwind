// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Component, JSX } from "solid-js";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type { size, variant } from "../../types/components/avatar";
export interface AvatarProps {
  variant?: variant;
  size?: size;
}

export const Avatar: Component<JSX.ImgHTMLAttributes<HTMLImageElement> & AvatarProps> = (props) => {
  // 1. init
  const theme = useTheme();
  const [avatarProps, rest] = splitProps(props, ["variant", "size", "class"]);

  const defaultProps = mergeProps(() => theme().avatar.defaultProps, avatarProps);

  // 3. set styles
  const avatarVariant = createMemo(() =>
    objectsToString(
      theme().avatar.styles.variants[
        findMatch(theme().avatar.valid.variants, defaultProps.variant, "rounded")
      ],
    ),
  );

  const avatarSize = createMemo(() => {
    const size = findMatch(theme().avatar.valid.sizes, defaultProps.size, "md");
    const styleSize = theme().avatar.styles.sizes[size];
    return objectsToString(styleSize);
  });

  const classes = createMemo(() =>
    twMerge(
      classnames(objectsToString(theme().avatar.styles.base), avatarVariant(), avatarSize()),
      defaultProps.class,
    ),
  );

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
