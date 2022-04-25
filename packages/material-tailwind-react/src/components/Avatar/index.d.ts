interface AvatarProps {
  variant: "rounded" | "circular";
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  className: string;
}

declare function Avatar(props: AvatarProps): JSX.Element;

export { Avatar, AvatarProps };
export default Avatar;