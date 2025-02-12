import { Select } from "@material-tailwind/react";

export default function SelectColors() {
  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <Select color="primary">
        <Select.Trigger placeholder="Color. e.g. primary" />
        <Select.List>
          <Select.Option>Color Primary</Select.Option>
          <Select.Option>Color Secondary</Select.Option>
          <Select.Option>Color Info</Select.Option>
          <Select.Option>Color Success</Select.Option>
          <Select.Option>Color Warning</Select.Option>
          <Select.Option>Color Error</Select.Option>
        </Select.List>
      </Select>
      <Select color="secondary">
        <Select.Trigger placeholder="Color. e.g. secondary" />
        <Select.List>
          <Select.Option>Color Primary</Select.Option>
          <Select.Option>Color Secondary</Select.Option>
          <Select.Option>Color Info</Select.Option>
          <Select.Option>Color Success</Select.Option>
          <Select.Option>Color Warning</Select.Option>
          <Select.Option>Color Error</Select.Option>
        </Select.List>
      </Select>
      <Select color="info">
        <Select.Trigger placeholder="Color. e.g. info" />
        <Select.List>
          <Select.Option>Color Primary</Select.Option>
          <Select.Option>Color Secondary</Select.Option>
          <Select.Option>Color Info</Select.Option>
          <Select.Option>Color Success</Select.Option>
          <Select.Option>Color Warning</Select.Option>
          <Select.Option>Color Error</Select.Option>
        </Select.List>
      </Select>
      <Select color="success">
        <Select.Trigger placeholder="Color. e.g. success" />
        <Select.List>
          <Select.Option>Color Primary</Select.Option>
          <Select.Option>Color Secondary</Select.Option>
          <Select.Option>Color Info</Select.Option>
          <Select.Option>Color Success</Select.Option>
          <Select.Option>Color Warning</Select.Option>
          <Select.Option>Color Error</Select.Option>
        </Select.List>
      </Select>
      <Select color="warning">
        <Select.Trigger placeholder="Color. e.g. warning" />
        <Select.List>
          <Select.Option>Color Primary</Select.Option>
          <Select.Option>Color Secondary</Select.Option>
          <Select.Option>Color Info</Select.Option>
          <Select.Option>Color Success</Select.Option>
          <Select.Option>Color Warning</Select.Option>
          <Select.Option>Color Error</Select.Option>
        </Select.List>
      </Select>
      <Select color="error">
        <Select.Trigger placeholder="Color. e.g. error" />
        <Select.List>
          <Select.Option>Color Primary</Select.Option>
          <Select.Option>Color Secondary</Select.Option>
          <Select.Option>Color Info</Select.Option>
          <Select.Option>Color Success</Select.Option>
          <Select.Option>Color Warning</Select.Option>
          <Select.Option>Color Error</Select.Option>
        </Select.List>
      </Select>
    </div>
  );
}
