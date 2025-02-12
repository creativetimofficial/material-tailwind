import { Textarea, Typography } from "@material-tailwind/react";
import { InfoCircle } from "iconoir-react";

export default function TextareaWithHelperText() {
  return (
    <div className="w-full space-y-2">
      <Textarea placeholder="Your message..." />
      <div className="flex gap-1.5 text-foreground">
        <InfoCircle className="h-3.5 w-3.5 shrink-0 translate-y-[3px] stroke-2" />
        <Typography type="small">
          Use at least 255 characters and a maximum of 1000 characters.
        </Typography>
      </div>
    </div>
  );
}
