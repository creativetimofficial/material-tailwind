import { Alert } from "@material-tailwind/react";

export function AlertColors() {
  return (
    <div className="w-full space-y-2">
      <Alert color="primary">
        <Alert.Content>
          A simple alert for showing message, with color="primary"
        </Alert.Content>
      </Alert>
      <Alert color="secondary">
        <Alert.Content>
          A simple alert for showing message, with color="secondary"
        </Alert.Content>
      </Alert>
      <Alert color="info">
        <Alert.Content>
          A simple alert for showing message, with color="info"
        </Alert.Content>
      </Alert>
      <Alert color="success">
        <Alert.Content>
          A simple alert for showing message, with color="success"
        </Alert.Content>
      </Alert>
      <Alert color="warning">
        <Alert.Content>
          A simple alert for showing message, with color="warning"
        </Alert.Content>
      </Alert>
      <Alert color="error">
        <Alert.Content>
          A simple alert for showing message, with color="error"
        </Alert.Content>
      </Alert>
    </div>
  );
}
