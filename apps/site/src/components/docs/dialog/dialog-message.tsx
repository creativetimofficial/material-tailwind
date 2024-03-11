import {
  Dialog,
  Button,
  Input,
  Checkbox,
  Typography,
  IconButton,
  Textarea,
} from "@material-tailwind/react/dist";

import { Xmark } from "iconoir-react";

export function DialogMessage() {
  return (
    <Dialog size="sm">
      <Dialog.Trigger as={Button}>Message Dialog</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            isCircular
            className="absolute right-2 top-2"
          >
            <Xmark className="h-5 w-5" />
          </Dialog.DismissTrigger>
          <Typography type="h5" className="mb-2">
            New message to @{" "}
          </Typography>
          <Typography className="text-gray-600">
            Write the message and then click button.
          </Typography>
          <form action="#" className="mt-6">
            <Input isFullWidth className="mb-4 mt-2 space-y-1.5">
              <Typography
                as="label"
                htmlFor="username"
                type="small"
                color="primary"
                className="font-semibold"
              >
                Username
              </Typography>
              <Input.Field id="username" type="text" placeholder="Username" />
            </Input>
            <div className="w-full space-y-1.5">
              <Typography
                as="label"
                htmlFor="message"
                type="small"
                color="primary"
                className="font-medium"
              >
                Message
              </Typography>
              <Textarea id="message" placeholder="Your message..." />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Dialog.DismissTrigger as={Button} variant="ghost">
                Cancel
              </Dialog.DismissTrigger>
              <Button>Send Message</Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
