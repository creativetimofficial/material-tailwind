export function BlockLevelButtonGroup() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="inline-flex w-full flex-row">
        <button
          data-ripple-dark="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          React
        </button>
        <button
          data-ripple-dark="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Vue
        </button>
        <button
          data-ripple-dark="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Svelte
        </button>
      </div>
      <div className="inline-flex w-full flex-row">
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md rounded-r-none border border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          React
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-none border border-l-0 border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Vue
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Svelte
        </button>
      </div>
      <div className="inline-flex w-full flex-row">
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md rounded-r-none border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          React
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-none border border-l-0 border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Vue
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Svelte
        </button>
      </div>
      <div className="inline-flex w-full flex-row">
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md rounded-r-none border border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          React
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-none border border-l-0 border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Vue
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex w-full select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Svelte
        </button>
      </div>
    </div>
  );
}
