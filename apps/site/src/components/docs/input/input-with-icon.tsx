import { Input } from "@material-tailwind/react/dist";
import { ProfileCircle, Lock } from "iconoir-react";

export function InputWithIcon() {
  return (
    <div className="w-[240px] space-y-4">
      <Input>
        <Input.Field placeholder="Username" />
        <Input.Icon>
          <ProfileCircle className="h-full w-full" />
        </Input.Icon>
      </Input>
      <Input>
        <Input.Field type="password" placeholder="Password" />
        <Input.Icon placement="end">
          <Lock className="h-full w-full" />
        </Input.Icon>
      </Input>
    </div>
  );
}
