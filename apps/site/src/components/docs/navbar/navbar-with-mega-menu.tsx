import * as React from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Card,
  List,
  Avatar,
  Menu,
  Tooltip,
  Accordion,
  type MenuItemProps,
} from "@material-tailwind/react/dist";

import {
  Archive,
  Community,
  Globe,
  GridPlus,
  Hashtag,
  HeadsetHelp,
  JournalPage,
  LogOut,
  Menu as MenuIcon,
  MultiplePages,
  NavArrowDown,
  Phone,
  Post,
  ProfileCircle,
  SelectFace3d,
  Settings,
  SunLight,
  UserCircle,
  Xmark,
} from "iconoir-react";

const LINKS = [
  {
    icon: ProfileCircle,
    title: "Account",
    href: "#",
  },
  {
    icon: SelectFace3d,
    title: "Blocks",
    href: "#",
  },
  {
    icon: Archive,
    title: "Docs",
    href: "#",
  },
];

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: GridPlus,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: Community,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Post,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunLight,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: Globe,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: Phone,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: JournalPage,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SelectFace3d,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: Hashtag,
  },
];

function NavList() {
  return (
    <>
      {LINKS.map(({ icon: Icon, title, href }) => (
        <List.Item key={title} as="a" href={href}>
          <List.ItemStart className="mr-1.5">
            <Icon className="h-4 w-4" />
          </List.ItemStart>
          <Typography type="small">{title}</Typography>
        </List.Item>
      ))}
    </>
  );
}

function ProfileMenu() {
  return (
    <Menu>
      <Menu.Trigger
        as={Avatar}
        src="https://dub.sh/iu8bOfU"
        alt="profile-picture"
        size="sm"
        className="border border-primary p-0.5 lg:ml-auto"
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
        <hr className="!my-1 -mx-1 border-secondary-dark" />
        <Menu.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error">
          <LogOut className="mr-2 h-[18px] w-[18px]" />
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}

const MenuItem = React.forwardRef<
  typeof Menu.Item,
  {
    title: string;
    description: string;
    icon?: React.ElementType;
  }
>(({ title, description, icon: Icon, ...rest }, ref) => {
  return (
    <List.Item ref={ref} as="a" href="#" className="p-1.5" {...rest}>
      {Icon && (
        <List.ItemStart>
          <div className="flex items-center justify-center rounded-[5px] bg-primary/5 p-2">
            <Icon className="h-6 w-6" />
          </div>
        </List.ItemStart>
      )}
      <div>
        <Typography
          color="primary"
          className="data-[type=p]:text-sm data-[type=p]:font-semibold"
        >
          {title}
        </Typography>
        <Typography
          type="small"
          className="data-[type=p]:text-xs data-[type=p]:text-foreground"
        >
          {description}
        </Typography>
      </div>
    </List.Item>
  );
});

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <MenuItem key={key} title={title} description={description} icon={icon} />
    ),
  );

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Card as="nav" className="mx-auto w-full max-w-screen-xl p-2">
      <div className="flex items-center">
        <Typography
          as="a"
          href="#"
          type="small"
          className="ml-2 mr-2 block py-1 font-semibold"
        >
          Material Tailwind
        </Typography>
        <hr className="mx-1 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
        <div className="hidden lg:block">
          <List className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center">
            <Tooltip placement="bottom" interactive>
              <Tooltip.Trigger>
                <List.Item>
                  <List.ItemStart className="me-1.5">
                    <MultiplePages className="h-4 w-4" />
                  </List.ItemStart>
                  <Typography type="small">Pages</Typography>
                  <List.ItemEnd className="ps-1">
                    <NavArrowDown className="h-3.5 w-3.5 group-data-[open=true]:rotate-180" />
                  </List.ItemEnd>
                </List.Item>
              </Tooltip.Trigger>
              <Tooltip.Content className="z-[100000] grid max-w-screen-xl rounded-lg border border-surface bg-background p-2 shadow-xl shadow-surface/10">
                <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
            <NavList />
          </List>
        </div>
        <IconButton
          size="sm"
          variant="ghost"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto mr-2 grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <MenuIcon className="h-4 w-4" />
          )}
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={openNav}>
        <Accordion>
          <Accordion.Item value="react" className="mt-2 border-none">
            <Accordion.Trigger className="p-0">
              <List.Item className="w-full">
                <List.ItemStart className="me-1.5">
                  <MultiplePages className="h-4 w-4" />
                </List.ItemStart>
                <Typography type="small">Pages</Typography>
                <List.ItemEnd className="ps-1">
                  <NavArrowDown className="h-3.5 w-3.5 group-data-[open=true]:rotate-180" />
                </List.ItemEnd>
              </List.Item>
            </Accordion.Trigger>
            <Accordion.Content>
              <MenuItem
                title="@material-tailwind/html"
                description="Learn how to use @material-tailwind/html, packed with rich components and widgets."
              />
              <MenuItem
                title="@material-tailwind/react"
                description="Learn how to use @material-tailwind/react, packed with rich components for React."
              />
              <MenuItem
                title="Material Tailwind PRO"
                description="A complete set of UI Elements for building faster websites in less time."
              />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <NavList />
      </Collapse>
    </Card>
  );
}