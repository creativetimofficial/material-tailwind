import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "../packages/material-tailwind-react/src";

export default function NavTabs() {
  const data = [
    {
      icon: "🏆",
      label: "Champions",
      value: "champions",
      desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed."
    },
    {
      icon: "🥇",
      label: "First Grade",
      value: "first",
      desc: (
        <>
          It really matters and then like it really doesn&apos;t matter. What
          matters is the people who are sparked by it. And the people who are
          like offended by it, it doesn&apos;t matter. Because it&apos;s about
          motivating the doers. Because I&apos;m here to follow my dreams and
          inspire other people to follow their dreams, too.
          <br /> We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play this game of life you need
          to appreciate every moment. A lot of people don&apos;t appreciate the
          moment until it&apos;s passed.
        </>
      )
    },
    {
      icon: "🥈",
      label: "Second Grade",
      value: "second",
      desc: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how."
    },
    {
      icon: "🥉",
      label: "Third Grade",
      value: "third",
      desc: (
        <>
          I always felt like I could do anything. That&apos;s the main thing
          people are controlled by! Thoughts- their perception of themselves!
          They&apos;re slowed down by their perception of themselves. If
          you&apos;re taught you can&apos;t do anything, you won&apos;t do
          anything. I was taught I could do everything.
          <br />
          <br /> If everything I did failed - which it doesn&apos;t, it actually
          succeeds - just the fact that I&apos;m willing to fail is an
          inspiration. People are so scared to lose that they don&apos;t even
          try. Like, one thing people can&apos;t say is that I&apos;m not
          trying, and I&apos;m not trying my hardest, and I&apos;m not trying to
          do the best way I know how.
        </>
      )
    }
  ];

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
      <Tabs value="champions">
        <TabsHeader>
          {data.map(({ icon, label, value }) => (
            <Tab key={value} value={value}>
              {icon} &nbsp; {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
