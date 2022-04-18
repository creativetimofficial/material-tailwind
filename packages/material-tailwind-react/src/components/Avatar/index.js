/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";
import { useTheme } from "context/theme";

export const Avatar = forwardRef(({ variant, size, className, ...rest }, ref) => {
  // 1. init
  const { avatar } = useTheme();
  const { valid, defaultProps } = avatar;
  const { base, variants, sizes } = avatar.styles;

  // 2. set default props
  variant = variant ?? defaultProps.variant;
  size = size ?? defaultProps.size;
  className = className ?? defaultProps.className;

  // 3. set styles
  const avatarVariant = variants[findMatch(valid.variants, variant, "rounded")];
  const avatarSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
  const classes = classnames(objectsToString(base), avatarVariant, avatarSize, className);

  // 4. return
  return <img {...rest} ref={ref} className={classes} />;
});

Avatar.propTypes = {
  variant: PropTypes.oneOf(["rounded", "circular"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  className: PropTypes.string,
};

Avatar.displayName = "Avatar";

export default Avatar;
