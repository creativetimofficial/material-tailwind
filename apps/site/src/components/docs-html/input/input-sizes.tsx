export function InputSizes() {
  return (
    <div className="flex flex-col gap-4">
      <input
        placeholder="Input Small"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-1.5 py-[4.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
        type="text"
      />
      <input
        placeholder="Input Medium"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
        type="text"
      />
      <input
        placeholder="Input Large"
        className="w-72 select-none rounded-lg border border-surface bg-transparent px-3.5 py-[12.25px] text-base leading-none text-black outline-hidden ring-4 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
        type="text"
      />
    </div>
  );
}
