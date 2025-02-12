import React from "react";
import { Input, IconButton, Typography } from "@material-tailwind/react";
 
export default function InputAmountButtons() {
  const [value, setValue] = React.useState(0);
 
  return (
    <div className="w-80">
      <Typography
        variant="small"
        color="primary"
        className="mb-1 font-medium"
      >
        Select Amount
      </Typography>
      <div className="relative w-full">
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="placeholder:text-primary placeholder:opacity-100  appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
        />
        <div className="absolute right-1 top-1 flex gap-0.5">
          <IconButton
            size="sm"
            className="rounded"
            onClick={() => setValue((cur) => (cur === 0 ? 0 : cur - 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          </IconButton>
          <IconButton
            size="sm"
            className="rounded"
            onClick={() => setValue((cur) => cur + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </IconButton>
        </div>
      </div>
      <Typography variant="small" color="primary" className="mt-2 font-normal">
        Adjust the number using the + and - controls.
      </Typography>
    </div>
  );
}