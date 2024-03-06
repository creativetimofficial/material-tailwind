import * as React from "react";
import { Avatar, Typography } from "@material-tailwind/react/dist";

export function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar src="https://dub.sh/TdSBP0D" alt="avatar" />
        <div>
          <Typography>Tania Andrew</Typography>
          <Typography type="small" className="text-foreground">
            Web Developer
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar src="https://dub.sh/TdSBP0D" alt="avatar" variant="rounded" />
        <div>
          <Typography>Tania Andrew</Typography>
          <Typography type="small" className="text-foreground">
            Web Developer
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar src="https://dub.sh/TdSBP0D" alt="avatar" variant="square" />
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
