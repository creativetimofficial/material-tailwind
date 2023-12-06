import { Input, Typography } from "@material-tailwind/react/dist";

export function InputWithValidation() {
  return (
    <div className="w-[240px] space-y-6">
      <div className="w-full space-y-1">
        <Input color="error" placeholder="Input Error" isError />
        <Typography variant="small" color="error">
          Something went wrong!
        </Typography>
      </div>
      <div className="w-full space-y-1">
        <Input color="success" placeholder="Input Success" isSuccess />
        <Typography variant="small" color="success">
          Congratulations 🎉
        </Typography>
      </div>
    </div>
  );
}
