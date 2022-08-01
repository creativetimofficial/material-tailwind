import { Dispatch, SetStateAction } from "react";

// page components
import Navbar from "components/layout/navbar";

// prop-types
interface Props {
  slug: string;
  setMobileNav: Dispatch<SetStateAction<boolean>>;
}

export default function DocsNavbar({ slug, setMobileNav }: Props) {
  return (
    <Navbar
      container="mt-0 max-w-full px-0 border-b border-blue-gray-50"
      className="!text-blue-gray-900 mx-auto !max-w-[1440px]"
      mobileNavClassName="text-blue-gray-900"
      fullWidth
      shadow={false}
      sidenavMenu={
        <div className="border-blue-gray-50 mt-2 flex items-center border-t pt-4 pb-2 lg:hidden">
          <button
            type="button"
            className="text-blue-gray-900"
            onClick={() => setMobileNav(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <ol className="text-blue-gray-700 ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
            <li className="flex items-center">
              React
              <svg
                width="3"
                height="6"
                className="text-blue-gray-300 mx-3 overflow-visible"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </li>
            <li className="text-blue-gray-900 truncate font-semibold capitalize">
              {slug.includes("-") ? slug.split("-").join(" ") : slug}
            </li>
          </ol>
        </div>
      }
    />
  );
}
