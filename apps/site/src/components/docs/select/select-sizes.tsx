import { Select } from "@material-tailwind/react";

export default function SelectSizes() {
  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <Select size="sm">
        <Select.Trigger placeholder="Size. e.g. small" />
        <Select.List>
          <Select.Option>Size Small</Select.Option>
          <Select.Option>Size Medium</Select.Option>
          <Select.Option>Size Large</Select.Option>
        </Select.List>
      </Select>
      <Select size="md">
        <Select.Trigger placeholder="Size. e.g. medium" />
        <Select.List>
          <Select.Option>Size Small</Select.Option>
          <Select.Option>Size Medium</Select.Option>
          <Select.Option>Size Large</Select.Option>
        </Select.List>
      </Select>
      <Select size="lg">
        <Select.Trigger placeholder="Size. e.g. large" />
        <Select.List>
          <Select.Option>Size Small</Select.Option>
          <Select.Option>Size Medium</Select.Option>
          <Select.Option>Size Large</Select.Option>
        </Select.List>
      </Select>
    </div>
  );
}
