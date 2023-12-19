export function MegaMenuDefault() {
  return (
    <nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 px-4 py-2 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased lg:ml-2"
        >
          Material Tailwind
        </a>
        <div className="hidden lg:block">
          <nav className="mt-4 mb-6 flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <a
              href="#"
              className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
            >
              <div
                role="button"
                className="flex w-full items-center gap-2 rounded-lg p-3 py-2 pr-4 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                Home
              </div>
            </a>
            <div
              aria-expanded="true"
              aria-haspopup="menu"
              id=":r9:"
              className="block font-sans text-sm font-medium leading-normal text-inherit antialiased"
              aria-controls=":r8:"
            >
              <div
                role="button"
                className="flex w-full items-center gap-2 rounded-lg bg-blue-gray-50/50 p-3 py-2 pr-4 text-start font-medium leading-tight text-gray-900 outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="hidden h-3 w-3 rotate-180 transition-transform lg:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="block h-3 w-3 transition-transform lg:hidden "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </div>
            </div>

            <a
              href="#"
              className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
            >
              <div
                role="button"
                className="flex w-full items-center gap-2 rounded-lg p-3 py-2 pr-4 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                Contact Us
              </div>
            </a>
          </nav>
        </div>
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
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
