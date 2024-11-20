import { IconButton, Typography } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";

export default function SimplePagination() {
  return (
    <div className="flex items-center gap-2">
      <IconButton size="sm" color="secondary" variant="ghost">
        <NavArrowLeft className="h-4 w-4 stroke-2" />
      </IconButton>
      <Typography className="flex items-center gap-1 text-foreground">
        Page
        <Typography as="span" color="default" className="font-semibold">
          2
        </Typography>
        of
        <Typography as="span" color="default" className="font-semibold">
          10
        </Typography>
      </Typography>
      <IconButton size="sm" color="secondary" variant="ghost">
        <NavArrowRight className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
