import { Input } from "@material-tailwind/react/dist";
import { ProfileCircle } from "iconoir-react";

export function InputCustomStyles() {
  return (
    <Input className="w-72">
      <Input.Field
        placeholder="Username"
        className="rounded-none border-0 border-b border-gray-400 pr-0.5 ring-0 hover:border-gray-900 focus:border-gray-900 data-[icon-placement=start]:pl-[26px]"
      />
      <Input.Icon className="data-[placement=start]:left-px">
        <ProfileCircle className="h-full w-full" />
      </Input.Icon>
    </Input>
  );
}
