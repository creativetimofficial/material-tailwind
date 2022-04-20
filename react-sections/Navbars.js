import Link from "next/Link";
import { useState, cloneElement } from "react";
import Navbar from "components/Navbar";
import { Menu, MenuItem } from "components/Menu";
import Button from "components/Button";
import Typography from "components/Typography";

export default function Menus() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const closeMenu = () => setOpen(false);
  const closeMenu2 = () => setOpen2(false);

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 opacity-75"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Navbars</h2>
      <div className="py-8 px-4 bg-gradient-to-tr from-light-blue-600 to-light-blue-400 mb-4 -mx-[16.5rem]">
        <Navbar className="max-w-screen-xl mx-auto">
          <div className="container flex justify-between items-center text-blue-grey-900">
            <Link href="/react">
              <Typography
                as="a"
                variant="small"
                className="py-1.5 mr-4 font-normal cursor-pointer"
              >
                Material Tailwind
              </Typography>
            </Link>
            <ul className="flex items-center gap-6">
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Pages&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Account&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Blocks&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Docs&nbsp;{icon}</a>
                </Link>
              </Typography>
            </ul>
            <Button variant="gradient" size="sm">
              Buy Now
            </Button>
          </div>
        </Navbar>
      </div>
      <div className="mb-4 -mx-[16.5rem]">
        <Navbar
          className="bg-gradient-to-tr from-[#191919] to-[#42424a]"
          fullWidth
        >
          <div className="container max-w-screen-xl mx-auto flex justify-between items-center">
            <Link href="/react">
              <Typography
                as="a"
                variant="small"
                className="py-1.5 mr-4 font-normal cursor-pointer"
              >
                Material Tailwind
              </Typography>
            </Link>
            <ul className="flex items-center gap-6">
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Pages&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Account&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Blocks&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Docs&nbsp;{icon}</a>
                </Link>
              </Typography>
            </ul>
            <Button variant="gradient" size="sm">
              Buy Now
            </Button>
          </div>
        </Navbar>
      </div>
      <div className="mb-4 -mx-[16.5rem]">
        <Navbar fullWidth>
          <div className="container max-w-screen-xl mx-auto flex justify-between items-center text-blue-grey-900">
            <Link href="/react">
              <Typography
                as="a"
                variant="small"
                className="py-1.5 mr-4 font-normal cursor-pointer"
              >
                Material Tailwind
              </Typography>
            </Link>
            <ul className="flex items-center gap-6">
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Pages&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Account&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Blocks&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Docs&nbsp;{icon}</a>
                </Link>
              </Typography>
            </ul>
            <Button variant="gradient" size="sm">
              Buy Now
            </Button>
          </div>
        </Navbar>
      </div>
      <div className="mb-4 -mx-[16.5rem]">
        <Navbar color="transparent" fullWidth>
          <div className="container max-w-screen-xl mx-auto flex justify-between items-center text-blue-grey-900">
            <Link href="/react">
              <Typography
                as="a"
                variant="small"
                className="py-1.5 mr-4 font-normal cursor-pointer"
              >
                Material Tailwind
              </Typography>
            </Link>
            <ul className="flex items-center gap-6">
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Pages&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Account&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Blocks&nbsp;{icon}</a>
                </Link>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="/react">
                  <a className="flex items-center">Docs&nbsp;{icon}</a>
                </Link>
              </Typography>
            </ul>
            <Button variant="gradient" size="sm">
              Buy Now
            </Button>
          </div>
        </Navbar>
      </div>
    </div>
  );
}
