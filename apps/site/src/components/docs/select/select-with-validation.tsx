import { Select, Typography } from "@material-tailwind/react";

export function SelectWithValidation() {
  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <div className="w-full">
        <Select isError color="error">
          <Select.Trigger placeholder="Select Version" />
          <Select.List>
            <Select.Option>Material Tailwind React</Select.Option>
            <Select.Option>Material Tailwind HTML</Select.Option>
            <Select.Option>Material Tailwind Vue</Select.Option>
            <Select.Option>Material Tailwind Svelte</Select.Option>
          </Select.List>
        </Select>
        <Typography type="small" color="error" className="mt-1 block">
          Something went wrong!
        </Typography>
      </div>
      <div className="w-full">
        <Select isSuccess color="success">
          <Select.Trigger placeholder="Select Version" />
          <Select.List>
            <Select.Option>Material Tailwind React</Select.Option>
            <Select.Option>Material Tailwind HTML</Select.Option>
            <Select.Option>Material Tailwind Vue</Select.Option>
            <Select.Option>Material Tailwind Svelte</Select.Option>
          </Select.List>
        </Select>
        <Typography type="small" color="success" className="mt-1 block">
          Congratulations 🎉
        </Typography>
      </div>
    </div>
  );
}
