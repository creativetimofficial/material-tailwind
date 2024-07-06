import { IconButton } from "@material-tailwind/react";

export function IconButtonWithLink() {
  return (
    <div className="flex items-center gap-4">
      <a href="#buttons-with-link">
        <IconButton>
          <i className="fas fa-heart" />
        </IconButton>
      </a>
      <a href="#buttons-with-link">
        <IconButton variant="gradient">
          <i className="fas fa-heart" />
        </IconButton>
      </a>
      <a href="#buttons-with-link">
        <IconButton variant="outlined">
          <i className="fas fa-heart" />
        </IconButton>
      </a>
      <a href="#buttons-with-link">
        <IconButton variant="text">
          <i className="fas fa-heart" />
        </IconButton>
      </a>
    </div>
  );
}
