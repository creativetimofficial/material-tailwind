import { Input, Typography } from "@material-tailwind/react";

export function InputSimplePhone() {
  return (
    <div className="w-96">
      <Typography
        variant="small"
        color="blue-gray"
        className="mb-1 font-medium"
      >
        Contact Number
      </Typography>
      <Input
        maxLength={16}
        placeholder="e.g., +1 123-456-7890"
        pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
        className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <Typography className="mt-2 text-xs font-normal text-blue-gray-500">
        Include your country code for international numbers.
      </Typography>
    </div>
  );
}
