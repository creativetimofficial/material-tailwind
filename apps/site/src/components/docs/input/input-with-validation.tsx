import { Input, Typography } from "@material-tailwind/react";

export default function InputWithValidation() {
  return (
    <div className="w-72 space-y-6">
      <div>
        <Input
          isError
          color="error"
          placeholder="Input Error"
          className="w-full"
        />
        <Typography type="small" color="error" className="mt-1 block">
          Something went wrong!
        </Typography>
      </div>
      <div>
        <Input
          isSuccess
          color="success"
          placeholder="Input Success"
          className="w-full"
        />
        <Typography type="small" color="success" className="mt-1 block">
          Congratulations 🎉
        </Typography>
      </div>
    </div>
  );
}
