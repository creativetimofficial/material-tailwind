import { Textarea } from "@material-tailwind/react";

export default function TextareaColors() {
  return (
    <div className="w-full space-y-4">
      <Textarea color="primary" placeholder="Textarea Primary" />
      <Textarea color="secondary" placeholder="Textarea Secondary" />
      <Textarea color="info" placeholder="Textarea Info" />
      <Textarea color="success" placeholder="Textarea Success" />
      <Textarea color="warning" placeholder="Textarea Warning" />
      <Textarea color="error" placeholder="Textarea Error" />
    </div>
  );
}
