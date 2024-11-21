import { Alert } from "@material-tailwind/react";
import { WarningCircle } from "iconoir-react";

export function AlertIcon() {
  return (
    <Alert>
      <Alert.Icon>
        <WarningCircle className="h-5 w-5" />
      </Alert.Icon>
      <Alert.Content>A simple alert for showing message.</Alert.Content>
    </Alert>
  );
}
