export function InputSizes() {
  return (
    <div className="w-72 space-y-4">
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Small"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-1.5 py-[4.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-none focus:ring-primary/10 dark:text-white"
          type="text"
        />
      </div>
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Medium"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-none focus:ring-primary/10 dark:text-white"
          type="text"
        />
      </div>
      <div className="relative w-full rounded-lg text-base leading-none">
        <input
          placeholder="Input Large"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-3.5 py-[12.25px] leading-[inherit] text-black outline-none ring-4 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-none focus:ring-primary/10 dark:text-white"
          type="text"
        />
      </div>
    </div>
  );
}
