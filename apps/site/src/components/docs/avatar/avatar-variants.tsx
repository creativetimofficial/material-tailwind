import { Avatar } from "@material-tailwind/react";

export function AvatarVariants() {
  return (
    <div className="item-center flex gap-2">
      <Avatar
        shape="circular"
        src="https://dub.sh/TdSBP0D"
        alt="profile-picture"
      />
      <Avatar
        shape="rounded"
        src="https://dub.sh/TdSBP0D"
        alt="profile-picture"
      />
      <Avatar
        shape="square"
        src="https://dub.sh/TdSBP0D"
        alt="profile-picture"
      />
    </div>
  );
}
