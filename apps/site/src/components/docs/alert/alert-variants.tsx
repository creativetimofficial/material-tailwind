import { Alert } from "@material-tailwind/react";

export default function AlertVariants() {
  return (
    <div className="w-full space-y-2">
      <Alert variant="ghost">
        <Alert.Content>
          A simple alert for showing message, with variant="ghost"
        </Alert.Content>
      </Alert>
      <Alert variant="outline">
        <Alert.Content>
          A simple alert for showing message. with variant="outline"
        </Alert.Content>
      </Alert>
      <Alert variant="solid">
        <Alert.Content>
          A simple alert for showing message. with variant="solid"
        </Alert.Content>
      </Alert>
      <Alert variant="gradient">
        <Alert.Content>
          A simple alert for showing message. with variant="gradient"
        </Alert.Content>
      </Alert>
    </div>
  );
}
