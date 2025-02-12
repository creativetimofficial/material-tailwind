import { Alert, Typography } from "@material-tailwind/react";
import { CheckCircleSolid } from "iconoir-react";

export default function AlertWithContent() {
  return (
    <Alert>
      <Alert.Icon>
        <CheckCircleSolid className="h-5 w-5" />
      </Alert.Icon>
      <Alert.Content className="mt-0.5">
        <Typography className="mb-1 font-bold">Success</Typography>
        <Typography>
          I don't know what that word means. I'm happy. But success, that goes
          back to what in somebody's eyes success means. For me, success is
          inner peace. That's a good day for me.
        </Typography>
      </Alert.Content>
      <Alert.DismissTrigger />
    </Alert>
  );
}
