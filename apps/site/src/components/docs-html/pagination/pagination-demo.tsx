export function PaginationDemo() {
  return (
    <div className="flex items-center gap-1">
      <button className="inline-flex select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="mr-1.5 h-4 w-4 stroke-2"
        >
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        Previous
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        1
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-primary bg-primary text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        2
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        3
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        4
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        5
      </button>
      <button className="inline-flex select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
        Next
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="ml-1.5 h-4 w-4 stroke-2"
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
