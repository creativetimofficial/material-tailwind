import { Select } from "@material-tailwind/react";

export default function SelectDemo() {
  return (
    <Select>
      <Select.Trigger className="w-72" placeholder="Select Version" />
      <Select.List>
        <Select.Option>Material Tailwind React</Select.Option>
        <Select.Option>Material Tailwind HTML</Select.Option>
        <Select.Option>Material Tailwind Vue</Select.Option>
        <Select.Option>Material Tailwind Svelte</Select.Option>
      </Select.List>
    </Select>
  );
}
