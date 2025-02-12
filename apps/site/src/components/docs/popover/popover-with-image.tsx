import React from "react";
import { Popover, Button, Typography } from "@material-tailwind/react";
import { NavArrowRight } from "iconoir-react";

export default function PopoverWithImage() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="min-h-80">
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger as={Button} onClick={() => setOpen((cur) => !cur)}>
          More Info
        </Popover.Trigger>
        <Popover.Content className="grid w-[30rem] grid-cols-2 gap-4">
          <div className="pl-1">
            <Typography color="default" className="mb-1 font-semibold">
              Material Tailwind
            </Typography>
            <Typography type="small" className="mb-4 block text-foreground">
              Material Tailwind is an easy to use components library for
              Tailwind CSS and Material Design. It features multiple React and
              HTML components, all written with Tailwind CSS classes and
              Material Design guidelines.
            </Typography>
            <Button as="a" href="#popover-with-image" size="sm">
              Read More
              <NavArrowRight className="ml-1.5 h-4 w-4 stroke-2" />
            </Button>
          </div>
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg"
            alt="image"
            className="h-auto max-h-[220px] w-full rounded-[5px] object-cover"
          />
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  );
}
