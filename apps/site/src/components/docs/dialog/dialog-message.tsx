import {
  Dialog,
  Button,
  Input,
  Typography,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export function DialogMessage() {
  return (
    <Dialog size="sm">
      <Dialog.Trigger as={Button}>Open Message</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            isCircular
            color="secondary"
            className="absolute right-2 top-2"
          >
            <Xmark className="h-5 w-5" />
          </Dialog.DismissTrigger>
          <Typography type="h6" className="mb-1">
            New message to @{" "}
          </Typography>
          <Typography className="text-foreground">
            Write the message and then click button.
          </Typography>
          <form action="#" className="mt-6">
            <div className="mb-4 mt-2 space-y-1.5">
              <Typography
                as="label"
                htmlFor="username"
                type="small"
                color="default"
                className="font-semibold"
              >
                Username
              </Typography>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                isFullWidth
              />
            </div>
            <div className="w-full space-y-1.5">
              <Typography
                as="label"
                htmlFor="message"
                type="small"
                color="default"
                className="font-medium"
              >
                Message
              </Typography>
              <Textarea id="message" placeholder="Your message..." />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Dialog.DismissTrigger as={Button} color="secondary">
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
