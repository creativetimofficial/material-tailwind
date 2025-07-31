export function InputWithButton() {
  return (
    <form
      action="#"
      className="flex w-full max-w-sm items-center justify-center gap-2"
    >
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="someone@example.com"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
          type="email"
        />
      </div>
      <button
        type="submit"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light"
      >
        Subscribe
      </button>
    </form>
  );
}
