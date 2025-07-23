export function TextareaSizes() {
  return (
    <div className="w-full space-y-4">
      <textarea
        rows={8}
        placeholder="Textarea Small"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-1.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <textarea
        rows={8}
        placeholder="Textarea Medium"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <textarea
        rows={8}
        placeholder="Textarea Large"
        className="peer block w-full resize-none rounded-lg border border-surface bg-transparent p-3.5 text-base leading-none text-black outline-hidden ring-4 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
    </div>
  );
}
