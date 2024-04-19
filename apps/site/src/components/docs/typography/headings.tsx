import { Typography } from "@material-tailwind/react";

export function Headings() {
  return (
    <div className="flex flex-col gap-4">
      <Typography type="h1">Material Tailwind (H1)</Typography>
      <Typography as="div" type="h2">
        Material Tailwind (H2)
      </Typography>
      <Typography as="div" type="h3">
        Material Tailwind (H3)
      </Typography>
      <Typography type="h4">Material Tailwind (H4)</Typography>
      <Typography type="h5">Material Tailwind (H5)</Typography>
      <Typography type="h6">Material Tailwind (H6)</Typography>
    </div>
  );
}
