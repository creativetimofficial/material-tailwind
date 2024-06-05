export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Small
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Medium
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-lg border border-primary bg-primary px-5 py-3.5 text-center align-middle font-sans text-base font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Large
      </button>
    </div>
  );
}
