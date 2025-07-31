export function TextareaColors() {
  return (
    <div className="w-full space-y-4">
      <textarea
        rows={8}
        placeholder="Textarea Primary"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <textarea
        rows={8}
        placeholder="Textarea Secondary"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:outline-hidden focus:ring-secondary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <textarea
        rows={8}
        placeholder="Textarea Info"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-info hover:ring-info/10 focus:border-info focus:outline-hidden focus:ring-info/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <textarea
        rows={8}
        placeholder="Textarea Success"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-hidden focus:ring-success/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <textarea
        rows={8}
        placeholder="Textarea Warning"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-warning hover:ring-warning/10 focus:border-warning focus:outline-hidden focus:ring-warning/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <textarea
        rows={8}
        placeholder="Textarea Error"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-hidden focus:ring-error/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
    </div>
  );
}
