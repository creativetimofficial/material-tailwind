import { Avatar } from "@material-tailwind/react";

export function AvatarVariants() {
  return (
    <div className="flex gap-4">
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        variant="rounded"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        variant="square"
      />
    </div>
  );
}
