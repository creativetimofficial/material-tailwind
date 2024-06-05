export function ButtonColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Primary
      </button>
      <button
        data-ripple-dark="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-secondary bg-secondary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Secondary
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-info bg-info px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-info-foreground transition-all duration-300 ease-in hover:border-info-light hover:bg-info-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Info
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-success bg-success px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-success-foreground transition-all duration-300 ease-in hover:border-success-light hover:bg-success-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Success
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-warning bg-warning px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-warning-foreground transition-all duration-300 ease-in hover:border-warning-light hover:bg-warning-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Warning
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-error bg-error px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-error-foreground transition-all duration-300 ease-in hover:border-error-light hover:bg-error-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Error
      </button>
    </div>
  );
}
