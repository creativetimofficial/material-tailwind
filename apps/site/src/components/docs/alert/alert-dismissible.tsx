import * as React from "react";
import { Alert, Button } from "@material-tailwind/react/dist";
import { WarningCircle } from "iconoir-react";

export function AlertDismissible() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && <Button onClick={() => setOpen(true)}>Open Alert</Button>}
      <Alert open={open}>
        <Alert.Icon>
          <WarningCircle className="h-full w-full" />
        </Alert.Icon>
        <Alert.Content>A simple alert for showing message.</Alert.Content>
        <Alert.DismissTrigger onClick={() => setOpen(false)} />
      </Alert>
    </>
  );
}
