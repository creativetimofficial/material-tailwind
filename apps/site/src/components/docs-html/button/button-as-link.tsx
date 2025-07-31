export function ButtonAsLink() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="#"
        className="inline-flex select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Ghost
      </a>
      <a
        href="#"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Outline
      </a>
      <a
        href="#"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Solid
      </a>
      <a
        href="#"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Gradient
      </a>
    </div>
  );
}
