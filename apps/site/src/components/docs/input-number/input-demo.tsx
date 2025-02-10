"use client";

import { Select } from "@material-tailwind/react";

export function InputNumberDemo() {
  return (
    <Select>
      <Select.Trigger className="w-72" label="Number Input" defaultValue="1" />

      <Select.List>
        <Select.Option>1</Select.Option>

        <Select.Option>2</Select.Option>

        <Select.Option>3</Select.Option>

        <Select.Option>4</Select.Option>
      </Select.List>
    </Select>
  );
}
