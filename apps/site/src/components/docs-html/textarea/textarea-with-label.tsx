export function TextareaWithLabel() {
  return (
    <div className="w-full space-y-1.5">
      <label
        htmlFor="message"
        className="font-sans text-sm font-semibold text-black antialiased dark:text-white"
      >
        Message
      </label>
      <textarea
        rows={8}
        id="message"
        placeholder="Your message..."
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
    </div>
  );
}
