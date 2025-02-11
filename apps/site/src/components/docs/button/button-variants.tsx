import { Button } from "@material-tailwind/react";

export default function ButtonVariants() {
  return (
    <div className="item flex flex-wrap justify-center gap-4">
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="gradient">Gradient</Button>
    </div>
  );
}
