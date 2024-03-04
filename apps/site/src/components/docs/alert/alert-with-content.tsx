import * as React from "react";
import { Alert, Button, Typography } from "@material-tailwind/react/dist";
import { WarningCircle } from "iconoir-react";

export function AlertWithContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && <Button onClick={() => setOpen(true)}>Open Alert</Button>}
      <Alert open={open} className="items-baseline">
        <Alert.Icon>
          <WarningCircle className="h-full w-full translate-y-0.5" />
        </Alert.Icon>
        <Alert.Content>
          <Typography type="h5">Success</Typography>
          <Typography color="secondary">
            I don't know what that word means. I'm happy. But success, that goes
            back to what in somebody's eyes success means. For me, success is
            inner peace. That's a good day for me.
          </Typography>
        </Alert.Content>
        <Alert.DismissTrigger
          className="-translate-y-1"
          onClick={() => setOpen(false)}
        />
      </Alert>
    </>
  );
}
