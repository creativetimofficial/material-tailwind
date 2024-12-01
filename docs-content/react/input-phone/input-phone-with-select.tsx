import { Select, Option } from "@material-tailwind/react";

export function InputPhoneWithSelect() {
  return (
    <div className="w-96">
      <Select label="Contact Number">
        <Option value="+33">(+33) 123-456-7890</Option>
        <Option value="+49">(+49) 123-456-7890</Option>
        <Option value="+31">(+31) 123-456-7890</Option>
        <Option value="+34">(+34) 123-456-7890</Option>
      </Select>
    </div>
  );
}
