import { Select, Option, Typography } from "@material-tailwind/react";

export function InputNumberWithSelect() {
  return (
    <div className="w-72">
      <Select label="Number Input" defaultValue="1">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="3">4</Option>
      </Select>
    </div>
  );
}
