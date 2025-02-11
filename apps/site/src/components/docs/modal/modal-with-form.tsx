import {
  Dialog,
  Button,
  Input,
  Checkbox,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export default function DialogWithForm() {
  return (
    <Dialog size="sm">
      <Dialog.Trigger as={Button}>Sign In</Dialog.Trigger>
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
          <Typography type="h6" className="mb-1">
            Sign In
          </Typography>
          <Typography className="text-foreground">
            Enter your email and password to Sign In.
          </Typography>
          <form action="#" className="mt-6">
            <div className="mb-4 mt-2 space-y-1.5">
              <Typography
                as="label"
                htmlFor="email"
                type="small"
                color="default"
                className="font-semibold"
              >
                Email
              </Typography>
              <Input
                id="email"
                type="email"
                placeholder="someone@example.com"
              />
            </div>
            <div className="mb-4 space-y-1.5">
              <Typography
                as="label"
                htmlFor="password"
                type="small"
                color="default"
                className="font-semibold"
              >
                Password
              </Typography>
              <Input id="password" type="password" placeholder="************" />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Checkbox id="checkbox">
                <Checkbox.Indicator />
              </Checkbox>
              <Typography
                as="label"
                htmlFor="checkbox"
                className="text-foreground"
              >
                Remember Me
              </Typography>
            </div>
            <Button isFullWidth>Sign In</Button>
          </form>
          <Typography
            type="small"
            className="mb-2 mt-3 flex items-center justify-center gap-1 text-foreground"
          >
            Don't have an account?
            <Typography
              type="small"
              color="primary"
              as="a"
              href="#"
              className="font-semibold"
            >
              Sign up
            </Typography>
          </Typography>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
