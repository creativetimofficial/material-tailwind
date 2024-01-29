import {
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react/dist";
import { Xmark } from "iconoir-react";

export function DialogDemo() {
  return (
    <Dialog>
      <Dialog.Trigger as={Button}>Open Dialog</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <div className="flex items-center justify-between gap-4">
            <Typography variant="h5">Material Tailwind</Typography>
            <Dialog.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              isCircular
              className="absolute top-2 right-2"
            >
              <Xmark className="h-5 w-5" />
            </Dialog.DismissTrigger>
          </div>
          <Typography className="mb-6 mt-3 text-gray-600 dark:text-gray-400">
            Material Tailwind is an open-source library that uses the power of
            Tailwind CSS and React to help you build unique web projects faster
            and easier. The stunning design inspired by Material Design is a
            bonus! Get Material Tailwind and take advantage of its free
            components and features that will help you set up your web project
            quickly.
          </Typography>
          <div className="mb-1 flex items-center justify-end gap-2">
            <Dialog.DismissTrigger as={Button} variant="ghost" color="error">
              Cancel
            </Dialog.DismissTrigger>
            <Button>Get Started</Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
