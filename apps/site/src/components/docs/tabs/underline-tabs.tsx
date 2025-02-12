import { Tabs } from "@material-tailwind/react";

export default function UnderlineTabs() {
  return (
    <Tabs defaultValue="html">
      <Tabs.List className="w-full rounded-none border-b border-secondary-dark bg-transparent py-0">
        <Tabs.Trigger className="w-full" value="html">
          HTML
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="react">
          React
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="vue">
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="angular">
          Angular
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="svelte">
          Svelte
        </Tabs.Trigger>
        <Tabs.TriggerIndicator className="rounded-none border-b-2 border-primary bg-transparent shadow-none" />
      </Tabs.List>
      <Tabs.Panel value="html">
        It really matters and then like it really doesn&apos;t matter. What
        matters is the people who are sparked by it. And the people who are like
        offended by it, it doesn&apos;t matter.
      </Tabs.Panel>
      <Tabs.Panel value="react">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire other people to follow their dreams, too.
      </Tabs.Panel>
      <Tabs.Panel value="vue">
        We&apos;re not always in the position that we want to be at. We&apos;re
        constantly growing. We&apos;re constantly making mistakes. We&apos;re
        constantly trying to express ourselves and actualize our dreams.
      </Tabs.Panel>
      <Tabs.Panel value="angular">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire other people to follow their dreams, too.
      </Tabs.Panel>
      <Tabs.Panel value="svelte">
        We&apos;re not always in the position that we want to be at. We&apos;re
        constantly growing. We&apos;re constantly making mistakes. We&apos;re
        constantly trying to express ourselves and actualize our dreams.
      </Tabs.Panel>
    </Tabs>
  );
}
