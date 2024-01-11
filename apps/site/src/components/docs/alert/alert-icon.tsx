import { Alert } from "@material-tailwind/react/dist";
import { WarningCircle } from "iconoir-react";

export function AlertIcon() {
  return (
    <Alert>
      <Alert.Icon>
        <WarningCircle className="h-full w-full" />
      </Alert.Icon>
      <Alert.Content>A simple alert for showing message.</Alert.Content>
    </Alert>
  );
}
