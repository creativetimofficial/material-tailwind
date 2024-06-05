export function ButtonGroupDemo() {
  return (
    <div className="inline-flex flex-row">
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md rounded-r-none border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        React
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-none border border-l-0 border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Vue
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Svelte
      </button>
    </div>
  );
}
