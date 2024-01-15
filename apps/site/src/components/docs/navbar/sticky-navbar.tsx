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
  MediaImage,
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
            variant="small"
            className="flex items-center gap-x-2 p-1 hover:text-info-main dark:hover:text-info-dm-main"
          >
            <Icon className="h-4 w-4" />
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="h-96 w-full overflow-scroll">
      <Card
        as="nav"
        className="sticky top-0 mx-auto w-full max-w-screen-xl p-2"
      >
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="ml-2 mr-2 block py-1 font-semibold"
          >
            Material Tailwind
          </Typography>
          <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block dark:border-secondary-dm-main" />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Button size="sm" className="hidden lg:ml-auto lg:inline-block">
            Sign In
          </Button>
          <IconButton
            size="sm"
            variant="ghost"
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
          <Button isFullWidth size="sm" className="mt-4">
            Sign In
          </Button>
        </Collapse>
      </Card>
      <main className="w-full">
        <div className="mx-auto max-w-xl">
          <div className="my-8">
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
          </div>
          <div className="mb-6 max-w-xl">
            <div className="flex h-56 w-full items-center justify-center rounded bg-secondary-dark dark:bg-secondary-dm-main">
              <MediaImage className="h-16 w-16 text-primary-light dark:text-primary-dm-light" />
            </div>
          </div>
          <div className="my-8">
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
          </div>
          <div className="my-8">
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
          </div>
          <div className="my-8">
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
          </div>
          <div className="my-8">
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
            <div className="mb-2 h-2 w-full rounded-full bg-secondary-dark dark:bg-secondary-dm-main"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
