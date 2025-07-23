export function SimpleNavbar() {
  return (
    <nav className="mx-auto w-full max-w-(--breakpoint-xl) overflow-hidden rounded-lg border border-surface bg-background p-2 shadow-lg shadow-black/5">
      <div className="flex items-center">
        <a
          href="#"
          className="mx-2 block py-1 font-sans text-sm font-semibold text-inherit antialiased"
        >
          Material Tailwind
        </a>
        <div className="hidden lg:ml-auto lg:mr-2 lg:block">
          <ul className="m-2 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center">
            <li>
              <a
                href="#"
                className="p-1 font-sans text-sm text-inherit antialiased hover:text-primary"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-1 font-sans text-sm text-inherit antialiased hover:text-primary"
              >
                Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-1 font-sans text-sm text-inherit antialiased hover:text-primary"
              >
                Blocks
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-1 font-sans text-sm text-inherit antialiased hover:text-primary"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>
        <button
          className="ml-auto grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none data-[shape=circular]:rounded-full lg:hidden"
          data-shape="default"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-4 w-4"
          >
            <path
              d="M3 5H21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 12H21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
