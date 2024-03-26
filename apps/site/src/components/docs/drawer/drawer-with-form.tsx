import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react/dist";
import { Xmark } from "iconoir-react";

export function DrawerWithForm() {
  return (
    <Drawer>
      <Drawer.Trigger as={Button}>Open Drawer</Drawer.Trigger>
      <Drawer.Overlay>
        <Drawer.Panel>
          <div className="flex items-center justify-between gap-4">
            <Typography type="h6">Contact Us</Typography>
            <Drawer.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              className="absolute right-2 top-2"
              isCircular
            >
              <Xmark className="w-5 h-5" />
            </Drawer.DismissTrigger>
          </div>
          <Typography type="small" className="mt-4 mb-6 text-foreground">
            Write the message and then click button.{" "}
          </Typography>
          <div className="space-y-4">
            <Input className="space-y-1.5">
              <Typography
                as="label"
                htmlFor="email"
                color="primary"
                className="[type=small]:font-semibold"
              >
                Your Email
              </Typography>
              <Input.Field id="email" type="email" placeholder="Email" />
            </Input>{" "}
            <Input>
              <Input.Field placeholder="Subject" />
            </Input>
            <Textarea placeholder="Message" />
            <Button isFullWidth>Send message</Button>
          </div>
        </Drawer.Panel>
      </Drawer.Overlay>
    </Drawer>
  );
}
