import { Menu, Avatar } from "@material-tailwind/react";
import { UserCircle, Settings, HeadsetHelp, LogOut } from "iconoir-react";

export default function ProfileMenu() {
  return (
    <Menu>
      <Menu.Trigger
        as={Avatar}
        alt="profile-picture"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
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
        <hr className="!my-1 -mx-1 border-surface" />
        <Menu.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error dark:hover:text-error dark:focus:text-error">
          <LogOut className="mr-2 h-[18px] w-[18px]" />
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
