import React from "react";
import { Select, Option } from "@material-tailwind/react";

export function ControlledSelect() {
  const [value, setValue] = React.useState("react");

  return (
    <div className="w-72">
      <Select
        label="Select Version"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="html">Material Tailwind HTML</Option>
        <Option value="react">Material Tailwind React</Option>
        <Option value="vue">Material Tailwind Vue</Option>
        <Option value="angular">Material Tailwind Angular</Option>
        <Option value="svelte">Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}
