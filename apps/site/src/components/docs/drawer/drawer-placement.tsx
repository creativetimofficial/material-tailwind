import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export function DrawerPlacement() {
  return (
    <div className="flex gap-4">
      <Drawer>
        <Drawer.Trigger as={Button}>Open Drawer Top</Drawer.Trigger>
        <Drawer.Overlay>
          <Drawer.Panel placement="top">
            <div className="flex items-center justify-between gap-4">
              <Typography type="h6">Material Tailwind</Typography>
              <Drawer.DismissTrigger
                as={IconButton}
                size="sm"
                variant="ghost"
                color="secondary"
                className="absolute right-2 top-2"
                isCircular
              >
                <Xmark className="h-5 w-5" />
              </Drawer.DismissTrigger>
            </div>
            <Typography className="mb-6 mt-2 text-foreground">
              Material Tailwind features multiple React and HTML components, all
              written with Tailwind CSS classes and Material Design guidelines.
            </Typography>
            <div className="mb-1 flex items-center gap-2">
              <Button>Get Started</Button>
              <Button color="secondary">Documentation</Button>
            </div>
          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
      <Drawer>
        <Drawer.Trigger as={Button}>Open Drawer Right</Drawer.Trigger>
        <Drawer.Overlay>
          <Drawer.Panel placement="right">
            <div className="flex items-center justify-between gap-4">
              <Typography type="h6">Material Tailwind</Typography>
              <Drawer.DismissTrigger
                as={IconButton}
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2"
                isCircular
                color="secondary"
              >
                <Xmark className="h-5 w-5" />
              </Drawer.DismissTrigger>
            </div>
            <Typography className="mb-6 mt-2 text-foreground">
              Material Tailwind features multiple React and HTML components, all
              written with Tailwind CSS classes and Material Design guidelines.
            </Typography>
            <div className="mb-1 flex items-center gap-2">
              <Button>Get Started</Button>
              <Button color="secondary">Documentation</Button>
            </div>
          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
      <Drawer>
        <Drawer.Trigger as={Button}>Open Drawer Bottom</Drawer.Trigger>
        <Drawer.Overlay>
          <Drawer.Panel placement="bottom">
            <div className="flex items-center justify-between gap-4">
              <Typography type="h6">Material Tailwind</Typography>
              <Drawer.DismissTrigger
                as={IconButton}
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2"
                isCircular
                color="secondary"
              >
                <Xmark className="h-5 w-5" />
              </Drawer.DismissTrigger>
            </div>
            <Typography className="mb-6 mt-2 text-foreground">
              Material Tailwind features multiple React and HTML components, all
              written with Tailwind CSS classes and Material Design guidelines.
            </Typography>
            <div className="mb-1 flex items-center gap-2">
              <Button>Get Started</Button>
              <Button color="secondary">Documentation</Button>
            </div>
          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
      <Drawer>
        <Drawer.Trigger as={Button}>Open Drawer Left</Drawer.Trigger>
        <Drawer.Overlay>
          <Drawer.Panel placement="left">
            <div className="flex items-center justify-between gap-4">
              <Typography type="h6">Material Tailwind</Typography>
              <Drawer.DismissTrigger
                as={IconButton}
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2"
                isCircular
                color="secondary"
              >
                <Xmark className="h-5 w-5" />
              </Drawer.DismissTrigger>
            </div>
            <Typography className="mb-6 mt-2 text-foreground">
              Material Tailwind features multiple React and HTML components, all
              written with Tailwind CSS classes and Material Design guidelines.
            </Typography>
            <div className="mb-1 flex items-center gap-2">
              <Button>Get Started</Button>
              <Button color="secondary">Documentation</Button>
            </div>
          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
    </div>
  );
}
