import * as React from "react";
import {
  Card,
  List,
  Typography,
  Chip,
  Collapse,
  Button,
  Input,
} from "@material-tailwind/react/dist";
import {
  Archive,
  EmptyPage,
  Folder,
  LogOut,
  Mail,
  MoreHorizCircle,
  NavArrowRight,
  Pin,
  Search,
  SelectFace3d,
  SendDiagonal,
  Trash,
  UserXmark,
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
    icon: Trash,
    title: "Trash",
    href: "#",
  },
];

export function SidebarWithSearch() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className="max-w-[280px]">
      <Card.Header className="mx-3 mb-0 mt-3 flex h-max items-center gap-2">
        <img src="/logo.png" alt="brand" className="h-7 w-7 rounded-md" />
        <Typography className="font-semibold">E-Mail Demo</Typography>
      </Card.Header>
      <Card.Body className="p-3">
        <Input>
          <Input.Icon>
            <Search className="h-full w-full" />
          </Input.Icon>
          <Input.Field type="search" placeholder="Search here..." />
        </Input>
        <List className="mt-3">
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
          <hr className="border-secondary-main -mx-3 my-3" />
          <List.Item onClick={() => setIsOpen((cur) => !cur)}>
            <List.ItemStart>
              <MoreHorizCircle className="h-[18px] w-[18px]" />
            </List.ItemStart>
            More
            <List.ItemEnd>
              <NavArrowRight
                className={`h-4 w-4 ${isOpen ? "rotate-90" : ""}`}
              />
            </List.ItemEnd>
          </List.Item>
          <Collapse open={isOpen}>
            <List>
              <List.Item>
                <List.ItemStart>
                  <Folder className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Spam
              </List.Item>
              <List.Item>
                <List.ItemStart>
                  <UserXmark className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Blocked
              </List.Item>
              <List.Item>
                <List.ItemStart>
                  <Folder className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Important
              </List.Item>
            </List>
          </Collapse>
          <hr className="border-secondary-main -mx-3 my-3" />
          <List.Item className="text-error-main hover:bg-error-main/10 focus:bg-error-main/10">
            <List.ItemStart>
              <LogOut className="h-[18px] w-[18px]" />
            </List.ItemStart>
            Logout
          </List.Item>
        </List>
      </Card.Body>
      <Card.Footer className="mt-8">
        <Card color="primary">
          <Card.Header className="m-3">
            <SelectFace3d className="text-primary-content h-10 w-10" />
          </Card.Header>
          <Card.Body>
            <Typography type="h6" color="secondary" className="mb-1">
              Upgrade to PRO
            </Typography>
            <Typography type="small" className="text-secondary-dark">
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </Typography>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" as="a" href="#" color="secondary">
              Upgrade Now
            </Button>
          </Card.Footer>
        </Card>
      </Card.Footer>
    </Card>
  );
}
