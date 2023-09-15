import { Button } from "@material-tailwind/react";

export function ButtonWithLink() {
  return (
    <div className="flex items-center gap-4">
      <a href="#buttons-with-link">
        <Button>Filled</Button>
      </a>
      <a href="#buttons-with-link">
        <Button variant="gradient">Gradient</Button>
      </a>
      <a href="#buttons-with-link">
        <Button variant="outlined">Outlined</Button>
      </a>
      <a href="#buttons-with-link">
        <Button variant="text">Text</Button>
      </a>
    </div>
  );
}
