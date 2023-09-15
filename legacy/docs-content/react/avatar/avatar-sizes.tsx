import { Avatar } from "@material-tailwind/react";

export function AvatarSizes() {
  return (
    <div className="flex w-max items-end gap-4">
      <Avatar src="/img/face-2.jpg" alt="avatar" size="xs" />
      <Avatar src="/img/face-2.jpg" alt="avatar" size="sm" />
      <Avatar src="/img/face-2.jpg" alt="avatar" size="md" />
      <Avatar src="/img/face-2.jpg" alt="avatar" size="lg" />
      <Avatar src="/img/face-2.jpg" alt="avatar" size="xl" />
      <Avatar src="/img/face-2.jpg" alt="avatar" size="xxl" />
    </div>
  );
}
