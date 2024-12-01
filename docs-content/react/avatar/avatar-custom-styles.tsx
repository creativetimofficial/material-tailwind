import { Avatar } from "@material-tailwind/react";

export function AvatarCustomStyles() {
  return (
    <Avatar
      size="lg"
      alt="avatar"
      src="https://docs.material-tailwind.com/img/face-2.jpg"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  );
}
