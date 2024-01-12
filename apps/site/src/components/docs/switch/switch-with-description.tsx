import { Switch, Typography } from "@material-tailwind/react/dist";

const ID = "switch-description";

export function SwitchWithDescription() {
  return (
    <div className="flex gap-2">
      <Switch id={ID} />
      <label htmlFor={ID} className="-translate-y-1">
        <Typography color="gray" className="font-semibold">
          Remember Me
        </Typography>
        <Typography
          variant="small"
          className="text-gray-500 dark:text-gray-400"
        >
          You&apos;ll be able to login without password for 24 hours.
        </Typography>
      </label>
    </div>
  );
}
