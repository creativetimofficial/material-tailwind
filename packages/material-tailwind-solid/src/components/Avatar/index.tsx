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
  const mergedProps = mergeProps(() => theme().avatar.defaultProps, props);
  const [avatarProps, rest] = splitProps(mergedProps, ["variant", "size", "class"]);

  // 3. set styles
  const styles = createMemo(() => {
    const { valid, styles } = theme().avatar;
    const { base, variants } = styles;

    const avatarVariant = objectsToString(
      variants[findMatch(valid.variants, avatarProps.variant, "rounded")],
    );

    const size = findMatch(valid.sizes, avatarProps.size, "md");
    const styleSize = styles.sizes[size];
    const avatarSize = objectsToString(styleSize);

    const classes = twMerge(
      classnames(objectsToString(base), avatarVariant, avatarSize),
      avatarProps.class,
    );
    return { classes };
  });

  // 4. return
  return <img {...rest} class={styles().classes} />;
};

export default Avatar;
