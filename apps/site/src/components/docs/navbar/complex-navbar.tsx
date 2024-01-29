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
} from "@material-tailwind/react/dist";
import {
  Archive,
  HeadsetHelp,
  LogOut,
  Menu as MenuIcon,
  MultiplePages,
  NavArrowDown,
  ProfileCircle,
  Rocket,
  SelectFace3d,
  Settings,
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

function NavList() {
  return LINKS.map(({ icon: Icon, title, href }) => (
    <List.Item key={title} as="a" href={href}>
      <List.ItemStart className="mr-1.5">
        <Icon className="h-4 w-4" />
      </List.ItemStart>
      <Typography variant="small">{title}</Typography>
    </List.Item>
  ));
}

function ProfileMenu() {
  return (
    <Menu>
      <Menu.Trigger
        as={Avatar}
        src="https://dub.sh/iu8bOfU"
        alt="profile-picture"
        size="sm"
        className="border border-primary-main p-0.5 lg:ml-auto"
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
        <Menu.Item className="text-error-main hover:bg-error-main/10 focus:bg-error-main/10">
          <LogOut className="mr-2 h-[18px] w-[18px]" />
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}

const MenuItem = React.forwardRef<any, any>(
  ({ title, description, ...rest }, ref) => {
    return (
      <List.Item ref={ref} {...rest} className="flex-col items-start">
        <Typography as="h6" className="font-semibold">
          {title}
        </Typography>
        <Typography variant="small" className="text-gray-600">
          {description}
        </Typography>
      </List.Item>
    );
  },
);

export function ComplexNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

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
          variant="small"
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
                  <Typography variant="small">Pages</Typography>
                  <List.ItemEnd className="ps-1">
                    <NavArrowDown className="h-3.5 w-3.5 group-data-[open=true]:rotate-180" />
                  </List.ItemEnd>
                </List.Item>
              </Tooltip.Trigger>
              <Tooltip.Content className="grid max-w-lg grid-cols-5 gap-1 rounded-lg border border-secondary-dark bg-white p-1 shadow-xl shadow-primary-main/[0.025]">
                <Card
                  color="primary"
                  className="col-span-2 grid place-items-center rounded-[5px] px-8 py-4 text-primary-content shadow-none"
                >
                  <div>
                    <Rocket className="mx-auto h-12 w-12" />
                    <Typography className="mt-5 text-center" variant="h5">
                      Material Tailwind
                    </Typography>
                  </div>
                </Card>
                <ul className="col-span-3">
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
                </ul>
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
                <Typography variant="small">Pages</Typography>
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
