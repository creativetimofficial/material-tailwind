import { Avatar, Typography } from "@material-tailwind/react";

export function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          variant="rounded"
        />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          variant="square"
        />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer
          </Typography>
        </div>
      </div>
    </div>
  );
}
