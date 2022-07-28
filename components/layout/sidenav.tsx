import { Dispatch, SetStateAction } from "react";

// nest.js components
import Link from "next/link";

// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

// prop-types
interface Props {
  routes: {
    name: string;
    icon: string;
    pages: string[];
  }[];
  type: "html" | "react" | "vue" | "angular" | "svelte";
  slug: string;
  mobileNav: boolean;
  setMobileNav: Dispatch<SetStateAction<boolean>>;
}

function Sidenav({ routes, type, slug, mobileNav, setMobileNav }: Props) {
  const colors = {
    html: "from-pink-400 to-pink-600",
    react: "from-blue-400 to-blue-600",
  };

  return (
    <aside
      className={`fixed z-[999] h-screen w-80 pb-4 pr-4 transition-all duration-300 lg:relative lg:left-0 lg:z-10 lg:w-64 lg:pt-20 ${
        mobileNav ? "left-0" : "-left-96"
      }`}
    >
      <div
        className={`bg-gray-900/20 fixed top-0 left-0 h-screen w-screen backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileNav
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      <div className="fixed h-screen w-80 overflow-y-scroll bg-white pb-48 pt-6 pl-6 lg:w-64 lg:bg-transparent lg:pt-0 lg:pl-0">
        <div className="flex items-center justify-between">
          <Typography variant="h4" color="blue-gray">
            Documentation
          </Typography>
          <Typography
            variant="h5"
            className="!text-blue-gray-500 hover:!text-blue-gray-900 mr-3 mt-px cursor-pointer p-2 transition-colors lg:hidden"
            onClick={() => setMobileNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Typography>
        </div>
        <div className="mt-4">
          {routes.map(({ name, icon, pages }, key): any => (
            <div key={key}>
              <div className="mt-8 flex items-center">
                <div
                  className={`${colors[type]} mr-3 grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-tr text-xs text-white`}
                >
                  <i className={icon} />
                </div>
                <Typography color="blue-gray" className="font-bold capitalize">
                  {name}
                </Typography>
              </div>
              <ul className="space-y-1 py-2 pr-2 pl-9">
                {pages.map((page, key) => (
                  <li key={key}>
                    <Link href={`/docs/${type}/${page}`}>
                      <a>
                        <Typography
                          color="gray"
                          className={`before:content-[' '] hover:text-blue-gray-900 hover:before:bg-blue-gray-900 relative list-item w-full py-1 px-1 capitalize transition-colors before:absolute before:-left-[25px] before:top-2/4 before:h-1.5 before:w-1.5 before:-translate-y-2/4 before:rounded-full before:transition-colors ${
                            page === slug
                              ? "text-blue-gray-900 before:bg-blue-gray-900 font-medium"
                              : "text-blue-gray-400 before:bg-blue-gray-300 font-normal"
                          }`}
                          onClick={() => setMobileNav(false)}
                        >
                          {page.includes("-")
                            ? page
                                .split("-")
                                .map((el) => (el === "css" ? "CSS" : el))
                                .join(" ")
                            : page}
                        </Typography>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidenav;
