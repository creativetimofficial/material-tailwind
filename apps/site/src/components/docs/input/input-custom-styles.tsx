import { Input } from "@material-tailwind/react";
import { ProfileCircle } from "iconoir-react";

export function InputCustomStyles() {
  return (
    <div className="w-72">
      <Input
        placeholder="Username"
        className="rounded-none border-0 border-b border-gray-400 pr-0.5 shadow-none ring-0 hover:border-gray-900 focus:border-gray-900 data-[icon-placement=start]:!pl-[26px] dark:border-gray-600 dark:hover:border-gray-50 dark:focus:border-gray-50"
      >
        <Input.Icon className="data-[placement=start]:left-px">
          <ProfileCircle className="h-full w-full" />
        </Input.Icon>
      </Input>
    </div>
  );
}
