import React from "react";
import { Avatar } from "@material-tailwind/react/dist";

export function AvatarCustomStyles() {
  return (
    <Avatar
      size="lg"
      alt="avatar"
      src="https://dub.sh/TdSBP0D"
      className="border border-success shadow-xl shadow-success/20 ring-4 ring-success/30"
    />
  );
}
