import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export default function DrawerWithForm() {
  return (
    <Drawer>
      <Drawer.Trigger as={Button}>Open Drawer</Drawer.Trigger>
      <Drawer.Overlay>
        <Drawer.Panel placement="left">
          <div className="flex items-center justify-between gap-4">
            <Typography type="h6">Contact Us</Typography>
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
          <Typography type="small" className="mb-6 mt-4 text-foreground">
            Write the message and then click button.
          </Typography>
          <div className="mt-6 space-y-4">
            <Input id="email" type="email" placeholder="Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" />
            <Button isFullWidth>Send message</Button>
          </div>
        </Drawer.Panel>
      </Drawer.Overlay>
    </Drawer>
  );
}
