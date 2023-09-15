import { IconButton } from "@material-tailwind/react";

export function IconButtonRippleEffect() {
  return (
    <div className="flex w-max gap-4">
      <IconButton ripple={true}>
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton ripple={false}>
        <i className="fas fa-heart" />
      </IconButton>
    </div>
  );
}
