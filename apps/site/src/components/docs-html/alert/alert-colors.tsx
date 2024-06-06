export function AlertColors() {
  return (
    <div className="w-full space-y-2">
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-primary bg-primary p-2 text-primary-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message, with color="primary"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-secondary bg-secondary p-2 text-secondary-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message, with color="secondary"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-info bg-info p-2 text-info-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message, with color="info"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-success bg-success p-2 text-success-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message, with color="success"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-warning bg-warning p-2 text-warning-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message, with color="warning"
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-error bg-error p-2 text-error-foreground"
      >
        <div className="m-1.5 w-full font-sans text-base leading-none">
          A simple alert for showing message, with color="error"
        </div>
      </div>
    </div>
  );
}
