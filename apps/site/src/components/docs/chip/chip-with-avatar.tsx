import { Chip, Avatar } from "@material-tailwind/react";

export function ChipWithAvatar() {
  return (
    <Chip>
      <Chip.Icon>
        <Avatar
          size="xs"
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind/team-1.jpg"
          alt="profile-picture"
          className="h-full w-full"
        />
      </Chip.Icon>
      <Chip.Label>Alex Andrew</Chip.Label>
    </Chip>
  );
}
