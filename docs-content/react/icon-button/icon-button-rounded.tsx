import { IconButton } from "@material-tailwind/react";

export function IconButtonRounded() {
  return (
    <div className="flex items-center gap-4">
      <IconButton className="rounded-full">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton variant="gradient" className="rounded-full">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton variant="outlined" className="rounded-full">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton variant="text" className="rounded-full">
        <i className="fas fa-heart" />
      </IconButton>
    </div>
  );
}
