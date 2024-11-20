import { Chip, Avatar } from "@material-tailwind/react";

export default function ChipWithAvatar() {
  return (
    <Chip>
      <Chip.Icon>
        <Avatar
          size="xs"
          src="https://dub.sh/TdSBP0D"
          alt="profile-picture"
          className="h-full w-full"
        />
      </Chip.Icon>
      <Chip.Label>Alex Andrew</Chip.Label>
    </Chip>
  );
}
