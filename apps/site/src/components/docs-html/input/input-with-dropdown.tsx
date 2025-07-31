export function InputWithDropdown() {
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <button
        id=":rk:"
        className="group flex h-10 select-none items-center justify-center gap-2 rounded-md rounded-r-none border border-r-0 border-surface bg-secondary px-3.5 py-2.5 pl-3 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        <img
          src="https://flagcdn.com/ke.svg"
          alt="Kenya"
          className="h-4 w-4 rounded-full object-cover"
        />
        +254
      </button>
      <div className="relative w-72 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed">
        <input
          placeholder="Mobile Number"
          className="peer h-full w-full select-none rounded-[inherit] rounded-l-none border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
          type="text"
        />
      </div>
    </div>
  );
}
