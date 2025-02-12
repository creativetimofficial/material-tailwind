import { Card, List, Typography, Chip } from "@material-tailwind/react";
import {
  Archive,
  EmptyPage,
  Mail,
  Pin,
  SendDiagonal,
  Bin,
} from "iconoir-react";

const Links = [
  {
    icon: Mail,
    title: "Inbox",
    href: "#",
    badge: 14,
  },
  {
    icon: SendDiagonal,
    title: "Sent",
    href: "#",
  },
  {
    icon: EmptyPage,
    title: "Drafts",
    href: "#",
  },
  {
    icon: Pin,
    title: "Pins",
    href: "#",
  },
  {
    icon: Archive,
    title: "Archive",
    href: "#",
  },
  {
    icon: Bin,
    title: "Trash",
    href: "#",
  },
];

export default function SidebarDemo() {
  return (
    <Card className="max-w-[280px]">
      <Card.Header className="mx-4 mb-0 mt-3 h-max">
        <Typography className="font-semibold">Material Tailwind</Typography>
      </Card.Header>
      <Card.Body className="p-3">
        <List>
          {Links.map(({ icon: Icon, title, href, badge }) => (
            <List.Item key={title} href={href}>
              <List.ItemStart>
                <Icon className="h-[18px] w-[18px]" />
              </List.ItemStart>
              {title}
              {badge && (
                <List.ItemEnd>
                  <Chip size="sm" variant="ghost">
                    <Chip.Label>{badge}</Chip.Label>
                  </Chip>
                </List.ItemEnd>
              )}
            </List.Item>
          ))}
        </List>
      </Card.Body>
    </Card>
  );
}
