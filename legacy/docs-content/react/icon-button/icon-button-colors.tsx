import { IconButton } from "@material-tailwind/react";

export function IconButtonColors() {
  return (
    <div className="flex gap-4">
      <IconButton color="blue">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton color="red">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton color="green">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton color="amber">
        <i className="fas fa-heart" />
      </IconButton>
    </div>
  );
}
