import { Avatar } from "@material-tailwind/react/dist";

export function AvatarVariants() {
  return (
    <div className="flex gap-2 item-center">
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
