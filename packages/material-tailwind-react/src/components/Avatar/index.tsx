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
import type { variant, size, className } from "../../types/components/avatar";
import { propTypesVariant, propTypesSize, propTypesClassName } from "../../types/components/avatar";

export interface AvatarProps extends React.ComponentProps<"img"> {
  variant?: variant;
  size?: size;
  className?: className;
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ variant, size, className, ...rest }, ref) => {
    // 1. init
    const { avatar } = useTheme();
    const { valid, defaultProps, styles } = avatar;
    const { base, variants, sizes } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    className = className ?? defaultProps.className;

    // 3. set styles
    const avatarVariant = objectsToString(variants[findMatch(valid.variants, variant, "rounded")]);
    const avatarSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
    const classes = twMerge(
      classnames(objectsToString(base), avatarVariant, avatarSize),
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
};

Avatar.displayName = "MaterialTailwind.Avatar";

export default Avatar;
