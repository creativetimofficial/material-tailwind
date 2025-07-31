export function TextareaWithValidation() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-1">
        <textarea
          rows={8}
          placeholder="Textarea Error"
          className="peer block w-full resize-none rounded-md border border-error bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-hidden focus:ring-error/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
        ></textarea>
        <small className="font-sans text-sm text-error antialiased">
          Something went wrong!
        </small>
      </div>
      <div className="w-full space-y-1">
        <textarea
          rows={8}
          placeholder="Textarea Success"
          className="peer block w-full resize-none rounded-md border border-success bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-hidden focus:ring-success/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
        ></textarea>
        <small className="font-sans text-sm text-success antialiased">
          Congratulations 🎉
        </small>
      </div>
    </div>
  );
}
