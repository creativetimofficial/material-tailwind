import { Select } from "@material-tailwind/react/dist";

export function SelectSizes() {
  return (
    <div className="max-w-[240px] space-y-4">
      <Select size="small">
        <Select.Trigger placeholder="Size. e.g. small" />
        <Select.List>
          <Select.Option>Size Small</Select.Option>
          <Select.Option>Size Medium</Select.Option>
          <Select.Option>Size Large</Select.Option>
        </Select.List>
      </Select>
      <Select size="medium">
        <Select.Trigger placeholder="Size. e.g. medium" />
        <Select.List>
          <Select.Option>Size Small</Select.Option>
          <Select.Option>Size Medium</Select.Option>
          <Select.Option>Size Large</Select.Option>
        </Select.List>
      </Select>
      <Select size="large">
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
