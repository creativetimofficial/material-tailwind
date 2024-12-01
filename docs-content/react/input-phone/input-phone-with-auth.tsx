import { Input, Typography, Button } from "@material-tailwind/react";

export function InputPhoneWithAuth() {
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
      <Button className="mt-4" fullWidth>
        Continue
      </Button>
      <div className="my-4 flex items-center gap-2">
        <span className="h-[1px] w-1/2 bg-blue-gray-100" />
        <Typography variant="small" color="blue-gray">
          Or
        </Typography>
        <span className="h-[1px] w-1/2 bg-blue-gray-100" />
      </div>
      <Button
        variant="outlined"
        className="flex w-full items-center justify-center gap-2"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="google"
          className="h-4 w-4"
        />
        Sign in with Google
      </Button>
    </div>
  );
}
