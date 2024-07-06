import { Alert } from "@material-tailwind/react";

export function AlertColors() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert color="blue">An info alert for showing message.</Alert>
      <Alert color="red">An error alert for showing message.</Alert>
      <Alert color="green">A success alert for showing message.</Alert>
      <Alert color="amber">A warning alert for showing message.</Alert>
    </div>
  );
}
