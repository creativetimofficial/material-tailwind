import { Select, Option } from "@material-tailwind/react";

export default function Test() {
  return (
    <div className="w-24">
      <Select
        containerProps={{
          className: "min-w-[90px]",
        }}
      >
        <Option>Hello 1</Option>
        <Option>Hello 2</Option>
        <Option>Hello 3</Option>
      </Select>
    </div>
  );
}
