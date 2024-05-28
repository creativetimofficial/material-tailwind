import { Textarea, Typography } from "@material-tailwind/react";

export function TextareaWithLabel() {
  return (
    <div className="w-full space-y-1.5">
      <Typography
        as="label"
        htmlFor="message"
        type="small"
        color="default"
        className="font-semibold"
      >
        Message
      </Typography>
      <Textarea id="message" placeholder="Your message..." />
    </div>
  );
}
