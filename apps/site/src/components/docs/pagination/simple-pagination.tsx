import { Button, IconButton, Typography } from "@material-tailwind/react/dist";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";

export function SimplePagination() {
  return (
    <div className="flex items-center gap-2">
      <IconButton size="sm" variant="ghost">
        <NavArrowLeft className="h-4 w-4 stroke-2" />
      </IconButton>
      <Typography className="flex items-center gap-1 text-foreground">
        Page
        <Typography as="span" color="primary" className="font-semibold">
          2
        </Typography>
        of
        <Typography as="span" color="primary" className="font-semibold">
          10
        </Typography>
      </Typography>
      <IconButton size="sm" variant="ghost">
        <NavArrowRight className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
