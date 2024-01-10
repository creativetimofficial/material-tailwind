import { Select } from "@material-tailwind/react/dist";

export function SelectDemo() {
  return (
    <Select>
      <Select.Trigger placeholder="Select" />
      <Select.List>
        <Select.Option>Material Tailwind React</Select.Option>
        <Select.Option>Material Tailwind HTML</Select.Option>
        <Select.Option>Material Tailwind Vue</Select.Option>
        <Select.Option>Material Tailwind Svelte</Select.Option>
      </Select.List>
    </Select>
  );
}
