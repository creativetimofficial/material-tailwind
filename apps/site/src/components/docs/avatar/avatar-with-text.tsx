import { Avatar, Typography } from "@material-tailwind/react";

export function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="avatar" />
        <div>
          <Typography>Tania Andrew</Typography>
          <Typography type="small" className="text-foreground">
            Web Developer
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="avatar" shape="rounded" />
        <div>
          <Typography>Tania Andrew</Typography>
          <Typography type="small" className="text-foreground">
            Web Developer
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="avatar" shape="square" />
        <div>
          <Typography>Tania Andrew</Typography>
          <Typography type="small" className="text-foreground">
            Web Developer
          </Typography>
        </div>
      </div>
    </div>
  );
}
