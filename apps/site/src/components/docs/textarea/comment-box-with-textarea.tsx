import { Button, IconButton, Textarea } from "@material-tailwind/react";
import { Attachment } from "iconoir-react";

export function CommentBoxWithTextarea() {
  return (
    <form action="#" className="w-full">
      <Textarea type="email" placeholder="someone@example.com" />
      <div className="flex w-full justify-between py-3">
        <IconButton variant="ghost" color="secondary" size="sm">
          <Attachment className="h-4 w-4" />
        </IconButton>
        <div className="flex gap-2">
          <Button size="sm" color="secondary">
            Cancel
          </Button>
          <Button size="sm">Post Comment</Button>
        </div>
      </div>
    </form>
  );
}
