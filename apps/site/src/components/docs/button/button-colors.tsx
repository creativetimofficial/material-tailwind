import { Button } from "@material-tailwind/react";

export default function ButtonColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </div>
  );
}
