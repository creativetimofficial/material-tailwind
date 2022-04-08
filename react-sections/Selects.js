import Select, { Option } from "components/Select";

export default function Selects() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Select Varaints</h2>
      <div className="grid grid-cols-3 items-end gap-4">
        <Select label="Outlined" id="select-1">
          <Option>Hello 1</Option>
          <Option>Hello 2</Option>
          <Option>Hello 3</Option>
        </Select>
        <Select variant="standard" label="Standard" id="select-2">
          <Option>Hello 1</Option>
          <Option>Hello 2</Option>
          <Option>Hello 3</Option>
        </Select>
        <Select variant="static" label="Static" id="select-3">
          <Option>Hello 1</Option>
          <Option>Hello 2</Option>
          <Option>Hello 3</Option>
        </Select>
      </div>

      <div className="bg-blue-grey-50 text-red-500 mt-12 p-4 rounded-md">
        The sizes, colors, error, success and disabled estates are the same as{" "}
        {`<Input />`} component.
      </div>
    </div>
  );
}
