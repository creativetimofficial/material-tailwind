import { Typography } from "@material-tailwind/react/dist";

export function LeadParagraph() {
  return (
    <Typography as="p" type="h6" className="font-normal">
      Material Tailwind is an easy to use components library for Tailwind CSS
      and Material Design. It provides a simple way to customize your
      components, you can change the colors, fonts, breakpoints and everything
      you need.
    </Typography>
  );
}