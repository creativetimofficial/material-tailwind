import { Dialog, Button, Typography } from "@material-tailwind/react";
import { AppNotification } from "iconoir-react";

export function DialogNotification() {
  return (
    <Dialog size="sm">
      <Dialog.Trigger as={Button}>Open Notification</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content className="p-8">
          <Typography type="h6" className="text-center">
            Your Attention is Required!
          </Typography>
          <Typography className="text-center text-foreground">
            Choose which card you want to connect
          </Typography>
          <div className="mt-12 flex flex-col items-center text-center">
            <AppNotification className="mb-6 h-24 w-24" />
            <Typography type="h6">You should read this!</Typography>
            <Typography className="mt-2 text-center  text-foreground">
              Many people limit themselves by their own self-doubt, slowing
              their progress. Fortunately, I was raised with the belief that I
              could achieve anything.
            </Typography>
          </div>
          <div className="mb-1 mt-8 flex items-center justify-center gap-2">
            <Dialog.DismissTrigger as={Button} variant="ghost" color="error">
              Cancel
            </Dialog.DismissTrigger>
            <Button>Got it</Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
