export function TextareaDemo() {
  return (
    <textarea
      rows={8}
      placeholder="Message here..."
      className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
    ></textarea>
  );
}
