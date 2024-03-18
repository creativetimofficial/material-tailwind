import { Alert } from "@material-tailwind/react/dist";
import { CheckCircleSolid } from "iconoir-react";

export function AlertCustomStyles() {
  return (
    <Alert className="rounded-none border-b-0 border-l-4 border-r-0 border-t-0 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]">
      <Alert.Icon>
        <CheckCircleSolid className="h-full w-full translate-y-0.5" />
      </Alert.Icon>
      <Alert.Content className="pt-1">
        A simple alert for showing message.
      </Alert.Content>
    </Alert>
  );
}
