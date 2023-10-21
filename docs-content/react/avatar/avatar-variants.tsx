import { Avatar } from "@material-tailwind/react";

export function AvatarVariants() {
  return (
    <div className="flex gap-4">
      <Avatar src="/img/face-2.jpg" alt="avatar" />
      <Avatar src="/img/face-2.jpg" alt="avatar" variant="rounded" />
      <Avatar src="/img/face-2.jpg" alt="avatar" variant="square" />
    </div>
  );
}
