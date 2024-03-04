import * as React from "react";
import { Menu, Button, Card, Typography } from "@material-tailwind/react/dist";
import { NavArrowDown, Rocket } from "iconoir-react";

const NavItem = React.forwardRef<any, any>(
  ({ title, description, ...rest }, ref) => {
    return (
      <Menu.Item ref={ref} {...rest} className="flex-col items-start">
        <Typography as="h6" className="font-semibold">
          {title}
        </Typography>
        <Typography type="small" className="text-gray-600">
          {description}
        </Typography>
      </Menu.Item>
    );
  },
);

export function NavMenu() {
  return (
    <Menu>
      <Menu.Trigger
        as={Button}
        variant="ghost"
        size="sm"
        className="flex items-center gap-1"
      >
        Versions{" "}
        <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
      </Menu.Trigger>
      <Menu.Content className="grid max-w-lg grid-cols-5 gap-1">
        <Card
          color="primary"
          className="text-primary-content col-span-2 grid place-items-center rounded-[5px] px-8 py-4 shadow-none"
        >
          <div>
            <Rocket className="mx-auto h-12 w-12" />
            <Typography className="mt-5 text-center" type="h5">
              Material Tailwind PRO
            </Typography>
          </div>
        </Card>
        <ul className="col-span-3">
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
