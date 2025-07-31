import * as React from "react";
import { Menu, Button, Card, Typography } from "@material-tailwind/react";
import { NavArrowDown, Rocket } from "iconoir-react";

const NavItem = React.forwardRef<
  typeof Menu.Item,
  {
    title: string;
    description: string;
  }
>(({ title, description, ...rest }, ref) => {
  return (
    <Menu.Item ref={ref} {...rest} className="flex-col items-start">
      <Typography color="default" className="font-semibold">
        {title}
      </Typography>
      <Typography type="small" className="text-foreground">
        {description}
      </Typography>
    </Menu.Item>
  );
});

export function NavMenu() {
  return (
    <Menu>
      <Menu.Trigger
        as={Button}
        size="sm"
        variant="ghost"
        className="flex items-center gap-1"
      >
        Versions{" "}
        <NavArrowDown className="h-3.5 w-3.5 stroke-2 group-data-[open=true]:rotate-180" />
      </Menu.Trigger>
      <Menu.Content className="grid max-w-lg grid-cols-5 gap-1">
        <Card
          color="primary"
          className="col-span-2 grid place-items-center rounded-[5px] px-8 py-4 text-primary-foreground shadow-none"
        >
          <div>
            <Rocket className="mx-auto h-12 w-12" />
            <Typography type="h6" className="mt-5 text-center leading-snug">
              Material Tailwind PRO
            </Typography>
          </div>
        </Card>
        <ul className="col-span-3 m-0!">
          <NavItem
            title="@material-tailwind/html"
            description="Learn how to use @material-tailwind/html, packed with rich components and widgets."
          />
          <NavItem
            title="@material-tailwind/react"
            description="Learn how to use @material-tailwind/react, packed with rich components for React."
          />
          <NavItem
            title="Material Tailwind PRO"
            description="A complete set of UI Elements for building faster websites in less time."
          />
        </ul>
      </Menu.Content>
    </Menu>
  );
}
