import { Switch, Typography } from "@material-tailwind/react";

export function SwitchWithDescription() {
  return (
    <Switch
      label={
        <div>
          <Typography color="blue-gray" className="font-medium">
            Remember Me
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            You&apos;ll be able to login without password for 24 hours.
          </Typography>
        </div>
      }
      containerProps={{
        className: "-mt-5",
      }}
    />
  );
}
