import { IconButton } from "@material-tailwind/react";

export function IconButtonSizes() {
  return (
    <div className="flex items-end gap-4">
      <IconButton size="sm">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton size="md">
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton size="lg">
        <i className="fas fa-heart fa-lg" />
      </IconButton>
    </div>
  );
}
