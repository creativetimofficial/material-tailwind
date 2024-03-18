import * as React from "react";
import { Alert, Button } from "@material-tailwind/react/dist";
import { WarningTriangleSolid } from "iconoir-react";

export function AlertCustomCloseIcon() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && <Button onClick={() => setOpen(true)}>Open Alert</Button>}
      <Alert open={open}>
        <Alert.Icon>
          <WarningTriangleSolid className="h-full w-full" />
        </Alert.Icon>
        <Alert.Content>
          Sorry, something went wrong please try again.
        </Alert.Content>
        <Alert.DismissTrigger onClick={() => setOpen(false)}>
          Close
        </Alert.DismissTrigger>
      </Alert>
    </>
  );
}
