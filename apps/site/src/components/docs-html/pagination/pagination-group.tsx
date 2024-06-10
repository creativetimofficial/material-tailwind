export function PaginationGroup() {
  return (
    <div className="inline-flex flex-row">
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md rounded-r-none border border-primary bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
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
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-none border border-l-0 border-primary bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        1
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-none border border-l-0 border-primary bg-primary text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        2
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-none border border-l-0 border-primary bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        3
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-none border border-l-0 border-primary bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        4
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-none border border-l-0 border-primary bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        5
      </button>
      <button className="inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md rounded-l-none border border-l-0 border-primary bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
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
