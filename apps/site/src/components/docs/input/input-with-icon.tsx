import { Input } from "@material-tailwind/react/dist";
import { ProfileCircle, Lock } from "iconoir-react";

export function InputWithIcon() {
  return (
    <div className="w-[240px] space-y-4">
      <Input
        placeholder="Username"
        startIcon={<ProfileCircle className="h-5 w-5" />}
      />
      <Input
        type="password"
        placeholder="Password"
        endIcon={<Lock className="h-5 w-5" />}
      />
    </div>
  );
}
