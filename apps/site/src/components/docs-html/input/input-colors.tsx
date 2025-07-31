export function InputColors() {
  return (
    <div className="flex flex-col gap-4">
      <input
        placeholder="Input Primary"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
        type="text"
      />
      <input
        placeholder="Input Secondary"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:outline-hidden focus:ring-secondary/10 dark:text-white"
        type="text"
      />
      <input
        placeholder="Input Info"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-info hover:ring-info/10 focus:border-info focus:outline-hidden focus:ring-info/10 dark:text-white"
        type="text"
      />
      <input
        placeholder="Input Success"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-hidden focus:ring-success/10 dark:text-white"
        type="text"
      />
      <input
        placeholder="Input Warning"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-warning hover:ring-warning/10 focus:border-warning focus:outline-hidden focus:ring-warning/10 dark:text-white"
        type="text"
      />
      <input
        placeholder="Input Error"
        className="w-72 select-none rounded-md border border-surface bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-hidden focus:ring-error/10 dark:text-white"
        type="text"
      />
    </div>
  );
}
