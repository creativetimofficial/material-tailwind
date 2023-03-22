import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { variant, size, className, withBorder, color } from "../../types/components/avatar";
import {
  propTypesVariant,
  propTypesSize,
  propTypesClassName,
  propTypesColor,
  propTypesWithBorder,
} from "../../types/components/avatar";

export interface AvatarProps extends React.ComponentProps<"img"> {
  variant?: variant;
  size?: size;
  className?: className;
  withBorder?: withBorder;
  color?: color;
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ variant, size, className, color, withBorder, ...rest }, ref) => {
    // 1. init
    const { avatar } = useTheme();
    const { valid, defaultProps, styles } = avatar;
    const { base, variants, sizes, borderColor } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    className = className ?? defaultProps.className;
    withBorder = withBorder ?? defaultProps.withBorder;
    color = color ?? defaultProps.color;

    // 3. set styles
    const avatarVariant = objectsToString(variants[findMatch(valid.variants, variant, "rounded")]);
    const avatarSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
    const avatarBorderColor = objectsToString(borderColor[findMatch(valid.colors, color, "blue")]);
    const classes = twMerge(
      classnames(objectsToString(base.initial), avatarVariant, avatarSize, {
        [objectsToString(base.withBorder)]: withBorder,
        [avatarBorderColor]: withBorder,
      }),
      className,
    );

    // 4. return
    return <img {...rest} ref={ref} className={classes} />;
  },
);

Avatar.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
  withBorder: propTypesWithBorder,
  color: PropTypes.oneOf(propTypesColor),
};

Avatar.displayName = "MaterialTailwind.Avatar";

export default Avatar;
