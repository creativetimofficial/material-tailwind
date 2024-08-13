export function StepperWithDots() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row items-center">
        <div className="group w-full">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-surface"></div>
            <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-primary text-primary-foreground"></span>
          </div>
        </div>
        <div className="group pointer-events-none block w-full select-none">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-surface"></div>
            <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-surface text-surface-foreground"></span>
          </div>
        </div>
        <div className="group pointer-events-none block select-none">
          <div className="relative">
            <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-surface text-surface-foreground"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
