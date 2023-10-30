import { Typography } from "@material-tailwind/react/dist";

export function Headings() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Material Tailwind (H1)</Typography>
      <Typography as="div" variant="h2">
        Material Tailwind (H2)
      </Typography>
      <Typography as="div" variant="h3">
        Material Tailwind (H3)
      </Typography>
      <Typography variant="h4">Material Tailwind (H4)</Typography>
      <Typography variant="h5">Material Tailwind (H5)</Typography>
      <Typography variant="h6">Material Tailwind (H6)</Typography>
    </div>
  );
}
