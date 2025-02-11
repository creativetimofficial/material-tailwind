import { Input } from "@material-tailwind/react";
import { ProfileCircle, Lock } from "iconoir-react";

export default function InputWithIcon() {
  return (
    <div className="w-72 space-y-4">
      <Input placeholder="Username">
        <Input.Icon>
          <ProfileCircle className="h-full w-full" />
        </Input.Icon>
      </Input>
      <Input placeholder="Password">
        <Input.Icon placement="end">
          <Lock className="h-full w-full" />
        </Input.Icon>
      </Input>
    </div>
  );
}
