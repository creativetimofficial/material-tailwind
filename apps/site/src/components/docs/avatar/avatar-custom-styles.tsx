import { Avatar } from "@material-tailwind/react";

export default function AvatarCustomStyles() {
  return (
    <Avatar
      size="lg"
      alt="avatar"
      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
      className="border border-green-500 ring-4 ring-green-500/20"
    />
  );
}
