import * as React from "react";
import { Avatar } from "@material-tailwind/react/dist";

export function AvatarStack() {
  return (
    <div className="flex items-center -space-x-4">
      <Avatar
        variant="circular"
        alt="user 1"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://dub.sh/TdSBP0D"
      />
      <Avatar
        variant="circular"
        alt="user 2"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://dub.sh/TdSBP0D"
      />
      <Avatar
        variant="circular"
        alt="user 3"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://dub.sh/TdSBP0D"
      />
      <Avatar
        variant="circular"
        alt="user 4"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://dub.sh/TdSBP0D"
      />
      <Avatar
        variant="circular"
        alt="user 5"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://dub.sh/TdSBP0D"
      />
    </div>
  );
}
