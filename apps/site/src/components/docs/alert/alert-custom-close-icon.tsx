import { Alert, Button } from "@material-tailwind/react";
import { WarningCircleSolid } from "iconoir-react";

export function AlertCustomCloseIcon() {
  return (
    <Alert className="items-center">
      <Alert.Icon>
        <WarningCircleSolid className="h-5 w-5" />
      </Alert.Icon>
      <Alert.Content>
        Sorry, something went wrong please try again.
      </Alert.Content>
      <Alert.DismissTrigger as={Button} size="sm">
        Close
      </Alert.DismissTrigger>
    </Alert>
  );
}
