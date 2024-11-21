import { Input, Typography } from "@material-tailwind/react";
import { InfoCircle } from "iconoir-react";

export function InputWithHelperText() {
  return (
    <div className="w-72 space-y-2">
      <Input type="password" placeholder="Password" />
      <div className="flex gap-1.5 text-foreground">
        <InfoCircle className="h-3.5 w-3.5 shrink-0 translate-y-[3px] stroke-2" />
        <Typography type="small">
          Use at least 8 characters, one uppercase, one lowercase and one
          number.
        </Typography>
      </div>
    </div>
  );
}
