import { Chip } from "@material-tailwind/react";

export function ChipColors() {
  return (
    <div className="flex gap-2">
      <Chip color="blue" value="blue" />
      <Chip color="red" value="red" />
      <Chip color="green" value="green" />
      <Chip color="amber" value="amber" />
      <Chip color="pink" value="pink" />
      <Chip color="indigo" value="indigo" />
      <Chip color="purple" value="purple" />
      <Chip color="teal" value="teal" />
      <Chip color="cyan" value="cyan" />
    </div>
  );
}
