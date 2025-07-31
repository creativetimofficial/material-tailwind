export function TextareaDisabled() {
  return (
    <textarea
      rows={8}
      disabled
      placeholder="Message here..."
      className="peer pointer-events-none block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black opacity-50 outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 dark:text-white"
    ></textarea>
  );
}
