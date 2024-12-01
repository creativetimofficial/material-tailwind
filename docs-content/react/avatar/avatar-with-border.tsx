import { Avatar } from "@material-tailwind/react";

export function AvatarWithBorder() {
  return (
    <div className="flex gap-4">
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        withBorder={true}
        className="p-0.5"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        variant="rounded"
        withBorder={true}
        color="green"
        className="p-0.5"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        variant="square"
        withBorder={true}
        color="pink"
        className="p-0.5"
      />
    </div>
  );
}
