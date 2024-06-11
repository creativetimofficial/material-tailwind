export function StepperCustomStyles() {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-full border border-primary-dark bg-primary p-6 shadow-lg shadow-primary-dark/25">
      <div className="flex w-full flex-row items-center">
        <div className="group block w-full">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-300 "></div>
            <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-white text-primary-foreground"></span>
          </div>
        </div>
        <div className="group block w-full">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-300 "></div>
            <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 text-surface-foreground"></span>
          </div>
        </div>
        <div className="group block w-full">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-300 "></div>
            <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 text-surface-foreground"></span>
          </div>
        </div>
        <div className="group block">
          <div className="relative">
            <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 text-surface-foreground"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
