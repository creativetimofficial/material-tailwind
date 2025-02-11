import React from "react";
import { Select } from "@material-tailwind/react";

export default function SelectControlled() {
  const [value, setValue] = React.useState();

  return (
    <Select value={value} onValueChange={(val) => setValue(val)}>
      <Select.Trigger className="w-72" placeholder="Select Version" />
      <Select.List>
        <Select.Option value="Material Tailwind React">
          Material Tailwind React
        </Select.Option>
        <Select.Option value="Material Tailwind HTML">
          Material Tailwind HTML
        </Select.Option>
        <Select.Option value="Material Tailwind Vue">
          Material Tailwind Vue
        </Select.Option>
        <Select.Option value="Material Tailwind Svelte">
          Material Tailwind Svelte
        </Select.Option>
      </Select.List>
    </Select>
  );
}
