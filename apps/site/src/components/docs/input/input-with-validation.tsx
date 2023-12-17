import { Input, Typography } from "@material-tailwind/react/dist";

export function InputWithValidation() {
  return (
    <div className="w-[240px] space-y-6">
      <div className="w-full space-y-1">
        <Input color="error" isError>
          <Input.Field placeholder="Input Error" />
        </Input>
        <Typography variant="small" color="error">
          Something went wrong!
        </Typography>
      </div>
      <div className="w-full space-y-1">
        <Input color="success" isSuccess>
          <Input.Field placeholder="Input Success" />
        </Input>
        <Typography variant="small" color="success">
          Congratulations 🎉
        </Typography>
      </div>
    </div>
  );
}
