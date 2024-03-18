import { Menu, Avatar } from "@material-tailwind/react/dist";
import { UserCircle, Settings, HeadsetHelp, LogOut } from "iconoir-react";

export function ProfileMenu() {
  return (
    <Menu>
      <Menu.Trigger
        as={Avatar}
        src="https://dub.sh/iu8bOfU"
        alt="profile-picture"
      />
      <Menu.Content>
        <Menu.Item>
          <UserCircle className="mr-2 h-[18px] w-[18px]" /> My Profile
        </Menu.Item>
        <Menu.Item>
          <Settings className="mr-2 h-[18px] w-[18px]" /> Edit Profile
        </Menu.Item>
        <Menu.Item>
          <HeadsetHelp className="mr-2 h-[18px] w-[18px]" /> Support
        </Menu.Item>
        <hr className="-mx-1 my-1 border-secondary-dark" />
        <Menu.Item className="text-error hover:bg-error/10 focus:bg-error/10">
          <LogOut className="mr-2 h-[18px] w-[18px]" />
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
