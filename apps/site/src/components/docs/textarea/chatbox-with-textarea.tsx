import { IconButton, Textarea } from "@material-tailwind/react";
import { Emoji, GifFormat, MediaImage, Send } from "iconoir-react";

export default function ChatboxWithTextarea() {
  return (
    <form action="#" className="flex w-full items-center gap-4">
      <div className="flex items-center gap-1">
        <IconButton variant="ghost">
          <MediaImage className="h-5 w-5" />
        </IconButton>
        <IconButton variant="ghost">
          <GifFormat className="h-5 w-5" />
        </IconButton>
        <IconButton variant="ghost">
          <Emoji className="h-5 w-5" />
        </IconButton>
      </div>
      <Textarea placeholder="Send a new message" rows={1} />
      <IconButton variant="ghost">
        <Send className="h-5 w-5" />
      </IconButton>
    </form>
  );
}
