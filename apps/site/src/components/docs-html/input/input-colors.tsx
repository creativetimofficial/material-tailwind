export function InputColors() {
  return (
    <div className="w-72 space-y-4">
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Primary"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-none focus:ring-primary/10 dark:text-white"
          type="text"
        />
      </div>
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Secondary"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:outline-none focus:ring-secondary/10 dark:text-white"
          type="text"
        />
      </div>
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Info"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-info hover:ring-info/10 focus:border-info focus:outline-none focus:ring-info/10 dark:text-white"
          type="text"
        />
      </div>
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Success"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-none focus:ring-success/10 dark:text-white"
          type="text"
        />
      </div>
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Warning"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-warning hover:ring-warning/10 focus:border-warning focus:outline-none focus:ring-warning/10 dark:text-white"
          type="text"
        />
      </div>
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Error"
          className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-none focus:ring-error/10 dark:text-white"
          type="text"
        />
      </div>
    </div>
  );
}
