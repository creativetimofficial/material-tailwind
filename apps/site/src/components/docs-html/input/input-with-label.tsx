export function InputWithLabel() {
  return (
    <div className="relative w-72 space-y-1 rounded-md text-sm leading-none">
      <label
        htmlFor="email"
        className="font-sans text-sm font-semibold text-black antialiased dark:text-white"
      >
        Email
      </label>
      <input
        id="email"
        placeholder="someone@example.com"
        className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
        type="email"
      />
    </div>
  );
}
