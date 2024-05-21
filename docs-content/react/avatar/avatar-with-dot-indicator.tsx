import { Avatar, Badge } from "@material-tailwind/react";

export function AvatarWithDotIndicator() {
  return (
    <div className="flex gap-4">
      <Badge placement="top-end" overlap="circular" color="green" withBorder>
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
      </Badge>
      <Badge placement="top-end" color="green" withBorder>
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          variant="rounded"
        />
      </Badge>
      <Badge placement="bottom-end" overlap="circular" color="red" withBorder>
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
      </Badge>
      <Badge placement="bottom-end" color="red" withBorder>
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          variant="rounded"
        />
      </Badge>
    </div>
  );
}
