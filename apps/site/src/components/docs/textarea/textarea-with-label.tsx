import { Textarea, Typography } from "@material-tailwind/react/dist";

export function TextareaWithLabel() {
  return (
    <div className="w-full space-y-1.5">
      <Typography
        as="label"
        htmlFor="message"
        variant="small"
        color="primary"
        className="font-medium"
      >
        Message
      </Typography>
      <Textarea id="message" placeholder="Your message..." />
    </div>
  );
}
