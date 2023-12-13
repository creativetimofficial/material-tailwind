export function NavbarSimple() {
  return (
    <nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 px-6 py-3 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
        >
          Material Tailwind
        </a>
        <div className="hidden lg:block">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased">
              <a
                href="#"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Pages
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased">
              <a
                href="#"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Account
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased">
              <a
                href="#"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Blocks
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased">
              <a
                href="#"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
