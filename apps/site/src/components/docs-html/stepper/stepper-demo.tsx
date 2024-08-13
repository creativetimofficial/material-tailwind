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
    </div>
  );
}
