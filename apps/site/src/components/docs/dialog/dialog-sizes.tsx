import {
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export default function DialogSizes() {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Dialog size="xs">
          <Dialog.Trigger as={Button}>Open XS</Dialog.Trigger>
          <Dialog.Overlay>
            <Dialog.Content>
              <Dialog.DismissTrigger
                as={IconButton}
                size="sm"
                variant="ghost"
                color="secondary"
                className="absolute right-2 top-2"
                isCircular
              >
                <Xmark className="h-5 w-5" />
              </Dialog.DismissTrigger>
              <Typography type="h6">Material Tailwind</Typography>
              <Typography className="mb-6 mt-2 text-foreground">
                Material Tailwind is an open-source library that uses the power
                of Tailwind CSS and React to help you build unique web projects
                faster and easier. The stunning design inspired by Material
                Design is a bonus! Get Material Tailwind and take advantage of
                its free components and features that will help you set up your
                web project quickly.
              </Typography>
              <div className="mb-1 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  variant="ghost"
                  color="error"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button>Get Started</Button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog>
        <Dialog size="sm">
          <Dialog.Trigger as={Button}>Open SM</Dialog.Trigger>
          <Dialog.Overlay>
            <Dialog.Content>
              <div className="flex items-center justify-between gap-4">
                <Typography type="h6">Material Tailwind</Typography>
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
              </div>
              <Typography className="mb-6 mt-2 text-foreground">
                Material Tailwind is an open-source library that uses the power
                of Tailwind CSS and React to help you build unique web projects
                faster and easier. The stunning design inspired by Material
                Design is a bonus! Get Material Tailwind and take advantage of
                its free components and features that will help you set up your
                web project quickly.
              </Typography>
              <div className="mb-1 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  variant="ghost"
                  color="error"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button>Get Started</Button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog>
        <Dialog size="md">
          <Dialog.Trigger as={Button}>Open MD</Dialog.Trigger>
          <Dialog.Overlay>
            <Dialog.Content>
              <div className="flex items-center justify-between gap-4">
                <Typography type="h6">Material Tailwind</Typography>
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
              </div>
              <Typography className="mb-6 mt-2 text-foreground">
                Material Tailwind is an open-source library that uses the power
                of Tailwind CSS and React to help you build unique web projects
                faster and easier. The stunning design inspired by Material
                Design is a bonus! Get Material Tailwind and take advantage of
                its free components and features that will help you set up your
                web project quickly.
              </Typography>
              <div className="mb-1 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  variant="ghost"
                  color="error"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button>Get Started</Button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Dialog size="lg">
          <Dialog.Trigger as={Button}>Open LG</Dialog.Trigger>
          <Dialog.Overlay>
            <Dialog.Content>
              <div className="flex items-center justify-between gap-4">
                <Typography type="h6">Material Tailwind</Typography>
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
              </div>
              <Typography className="mb-6 mt-2 text-foreground">
                Material Tailwind is an open-source library that uses the power
                of Tailwind CSS and React to help you build unique web projects
                faster and easier. The stunning design inspired by Material
                Design is a bonus! Get Material Tailwind and take advantage of
                its free components and features that will help you set up your
                web project quickly.
              </Typography>
              <div className="mb-1 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  variant="ghost"
                  color="error"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button>Get Started</Button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog>
        <Dialog size="xl">
          <Dialog.Trigger as={Button}>Open XL</Dialog.Trigger>
          <Dialog.Overlay>
            <Dialog.Content>
              <div className="flex items-center justify-between gap-4">
                <Typography type="h6">Material Tailwind</Typography>
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
              </div>
              <Typography className="mb-6 mt-2 text-foreground">
                Material Tailwind is an open-source library that uses the power
                of Tailwind CSS and React to help you build unique web projects
                faster and easier. The stunning design inspired by Material
                Design is a bonus! Get Material Tailwind and take advantage of
                its free components and features that will help you set up your
                web project quickly.
              </Typography>
              <div className="mb-1 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  variant="ghost"
                  color="error"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button>Get Started</Button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog>
        <Dialog size="screen">
          <Dialog.Trigger as={Button}>Open Screen</Dialog.Trigger>
          <Dialog.Overlay>
            <Dialog.Content>
              <div className="flex items-center justify-between gap-4">
                <Typography type="h6">Material Tailwind</Typography>
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
              </div>
              <Typography className="mb-6 mt-2 text-foreground">
                Material Tailwind is an open-source library that uses the power
                of Tailwind CSS and React to help you build unique web projects
                faster and easier. The stunning design inspired by Material
                Design is a bonus! Get Material Tailwind and take advantage of
                its free components and features that will help you set up your
                web project quickly.
              </Typography>
              <div className="mb-1 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  variant="ghost"
                  color="error"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button>Get Started</Button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog>
      </div>
    </>
  );
}
