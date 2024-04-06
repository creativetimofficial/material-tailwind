import * as React from "react";
import {
  Button,
  IconButton,
  Typography,
  Collapse,
  Card,
} from "@material-tailwind/react/dist";
import {
  Archive,
  Menu,
  MultiplePages,
  ProfileCircle,
  SelectFace3d,
  Xmark,
} from "iconoir-react";

const LINKS = [
  {
    icon: MultiplePages,
    title: "Pages",
    href: "#",
  },
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
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            color="secondary"
            className="flex items-center gap-x-2 p-1 hover:text-info"
          >
            <Icon className="h-4 w-4" />
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export function DarkNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Card
      as="nav"
      color="primary"
      className="mx-auto w-full max-w-screen-xl p-2"
    >
      <div className="flex items-center">
        <Typography
          as="a"
          href="#"
          type="small"
          color="secondary"
          className="ml-2 mr-2 block py-1 font-semibold"
        >
          Material Tailwind
        </Typography>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-primary-light lg:block" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button
          size="sm"
          color="secondary"
          className="hidden lg:ml-auto lg:inline-block"
        >
          Sign In
        </Button>
        <IconButton
          size="sm"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Button isFullWidth size="sm" color="secondary" className="mt-4">
          Sign In
        </Button>
      </Collapse>
    </Card>
  );
}