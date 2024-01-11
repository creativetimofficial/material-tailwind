import { Avatar } from "@material-tailwind/react/dist";

export function AvatarVariants() {
  return (
    <div className="item-center flex gap-2">
      <Avatar
        variant="circular"
        src="https://dub.sh/TdSBP0D"
        alt="profile-picture"
      />
      <Avatar
        variant="rounded"
        src="https://dub.sh/TdSBP0D"
        alt="profile-picture"
      />
      <Avatar
        variant="square"
        src="https://dub.sh/TdSBP0D"
        alt="profile-picture"
      />
    </div>
  );
}
