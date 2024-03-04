import { Textarea, Typography } from "@material-tailwind/react/dist";

export function TextareaWithLabel() {
  return (
    <div className="w-full space-y-1.5">
      <Typography
        as="label"
        htmlFor="message"
        type="small"
        color="primary"
        className="font-semibold"
      >
        Message
      </Typography>
      <Textarea id="message" placeholder="Your message..." />
    </div>
  );
}
