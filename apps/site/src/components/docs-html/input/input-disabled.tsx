export function InputDisabled() {
  return (
    <div
      className="relative w-72 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed"
      aria-disabled="true"
    >
      <input
        placeholder="Input"
        className="peer pointer-events-none h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black opacity-50 outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
        disabled
        type="text"
      />
    </div>
  );
}
