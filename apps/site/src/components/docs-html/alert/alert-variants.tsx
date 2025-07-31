export function AlertVariants() {
  return (
    <div className="w-full space-y-2">
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-transparent bg-primary/10 p-2 text-primary"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message, with variant="ghost"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-primary bg-transparent p-2 text-primary"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message. with variant="outline"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-primary bg-primary p-2 text-primary-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message. with variant="solid"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-primary bg-linear-to-tr from-primary-dark to-primary-light p-2 text-primary-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message. with variant="gradient"
        </div>
      </div>
    </div>
  );
}
