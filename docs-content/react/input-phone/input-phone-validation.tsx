import { Input, Typography } from "@material-tailwind/react";

export function InputPhoneValidation() {
  return (
    <div className="space-y-8">
      <div className="w-96">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium"
        >
          Contact Number
        </Typography>
        <Input
          success={true}
          maxLength={16}
          placeholder="e.g., +1 123-456-7890"
          pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
          className="appearance-none !border-t-green-500 placeholder:text-green-300 placeholder:opacity-100 focus:!border-t-green-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography color="green" className="mt-2 text-xs font-normal">
          Great! Your phone number is valid.
        </Typography>
      </div>
      <div className="w-96">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium"
        >
          Contact Number
        </Typography>
        <Input
          error={true}
          maxLength={16}
          placeholder="e.g., +1 123-456-7890"
          pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
          className="appearance-none !border-t-red-500 placeholder:text-red-300 placeholder:opacity-100 focus:!border-t-red-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography
          color="red"
          className="mt-2 flex items-center gap-2 text-xs font-normal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Please match the requested format. e.g., +1 123-456-7890
        </Typography>
      </div>
    </div>
  );
}
