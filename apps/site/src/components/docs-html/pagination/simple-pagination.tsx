export function SimplePagination() {
  return (
    <div className="flex items-center gap-2">
      <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="h-4 w-4 stroke-2"
        >
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <p className="flex items-center gap-1 font-sans text-base text-foreground antialiased">
        Page
        <span className="font-sans text-base font-semibold text-black antialiased dark:text-white">
          2
        </span>
        of
        <span className="font-sans text-base font-semibold text-black antialiased dark:text-white">
          10
        </span>
      </p>
      <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="h-4 w-4 stroke-2"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}
