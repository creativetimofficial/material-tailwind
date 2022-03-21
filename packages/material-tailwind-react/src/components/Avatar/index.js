/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { MaterialTailwindTheme } from "context/theme";

export const Avatar = forwardRef(({ variant, size, className, ...rest }, ref) => {
  const { avatar } = useContext(MaterialTailwindTheme);
  const { defaultProps } = avatar;
  const { root, variants, sizes } = avatar.styles;

  variant = variant || defaultProps.variant;
  size = size || defaultProps.size;
  className = className || defaultProps.className;

  const avatarVariant = variants[variant] || "";
  const avatarSize = sizes[size] ? Object.values(sizes[size]).join(" ") : "";

  const classes = classnames(root, avatarVariant, avatarSize, className);

  return <img ref={ref} className={classes} {...rest} />;
});

Avatar.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  variant: PropTypes.oneOf(["rounded", "circular"]),
  className: PropTypes.string,
};

Avatar.displayName = "Avatar";

export default Avatar;
