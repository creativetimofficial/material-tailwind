export function StepperDemo() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row items-center">
        <div className="group block w-full aria-disabled:pointer-events-none aria-disabled:select-none">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-surface"></div>
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              1
            </span>
          </div>
        </div>
        <div
          aria-disabled="true"
          className="group block w-full aria-disabled:pointer-events-none aria-disabled:select-none"
        >
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-surface"></div>
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-surface text-surface-foreground">
              2
            </span>
          </div>
        </div>
        <div
          aria-disabled="true"
          className="group block aria-disabled:pointer-events-none aria-disabled:select-none"
        >
          <div className="relative">
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-surface text-surface-foreground">
              3
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14 flex w-full justify-between gap-4">
        <button
          disabled={true}
          className="inline-flex cursor-not-allowed select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground opacity-50 shadow-none transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light"
        >
          Previous
        </button>
        <button className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light">
          Next
        </button>
      </div>
    </div>
  );
}
