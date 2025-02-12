import { Alert } from "@material-tailwind/react";
import { CheckCircleSolid } from "iconoir-react";

export default function AlertCustomStyles() {
  return (
    <Alert className="rounded-none border-b-0 border-l-4 border-r-0 border-t-0 border-green-500 bg-green-500/10 font-medium text-green-500">
      <Alert.Icon>
        <CheckCircleSolid className="h-5 w-5" />
      </Alert.Icon>
      <Alert.Content>A simple alert for showing message.</Alert.Content>
    </Alert>
  );
}
