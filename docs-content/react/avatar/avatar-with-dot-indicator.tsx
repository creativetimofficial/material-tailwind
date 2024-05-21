import { Avatar } from "@material-tailwind/react";

export function AvatarWithDotIndicator() {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <span className="absolute -right-0.5 top-0.5 !z-20 h-3.5 w-3.5 rounded-full  border-2 border-white bg-green-500 " />
      </div>
      <div className="relative">
        <Avatar
          variant="rounded"
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <span className="absolute -right-1 -top-1 !z-20 h-3.5 w-3.5 rounded-full  border-2 border-white bg-green-500" />
      </div>
      <div className="relative">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <span className="absolute -right-0.5 bottom-0.5 !z-20 h-3.5 w-3.5 rounded-full  border-2 border-white bg-red-500" />
      </div>
      <div className="relative">
        <Avatar
          variant="rounded"
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <span className="absolute -bottom-1 -right-1 !z-20 h-3.5 w-3.5 rounded-full  border-2 border-white bg-red-500 " />
      </div>
    </div>
  );
}
