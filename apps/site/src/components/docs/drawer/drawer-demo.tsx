import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export function DrawerDemo() {
  return (
    <Drawer>
      <Drawer.Trigger as={Button}>Open Drawer</Drawer.Trigger>
      <Drawer.Overlay>
        <Drawer.Panel>
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
  );
}
