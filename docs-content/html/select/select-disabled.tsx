import { Select, Option } from "@material-tailwind/react";

export function SelectDisabled() {
  return (
    <div className="w-72">
      <Select label="Select Version" disabled>
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}
