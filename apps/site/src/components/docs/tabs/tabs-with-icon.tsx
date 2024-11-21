import { Tabs } from "@material-tailwind/react";
import { SelectFace3d, ProfileCircle, Settings } from "iconoir-react";

export function TabsWithIcon() {
  return (
    <Tabs defaultValue="dashboard">
      <Tabs.List className="w-full">
        <Tabs.Trigger className="w-full" value="dashboard">
          <SelectFace3d className="mr-2 h-4 w-4" />
          Dashboard
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="profile">
          <ProfileCircle className="mr-2 h-4 w-4" />
          User Profile
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Tabs.Trigger>
        <Tabs.TriggerIndicator />
      </Tabs.List>
      <Tabs.Panel value="dashboard">
        It really matters and then like it really doesn&apos;t matter. What
        matters is the people who are sparked by it. And the people who are like
        offended by it, it doesn&apos;t matter.
      </Tabs.Panel>
      <Tabs.Panel value="profile">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire other people to follow their dreams, too.
      </Tabs.Panel>
      <Tabs.Panel value="settings">
        We&apos;re not always in the position that we want to be at. We&apos;re
        constantly growing. We&apos;re constantly making mistakes. We&apos;re
        constantly trying to express ourselves and actualize our dreams.
      </Tabs.Panel>
    </Tabs>
  );
}
