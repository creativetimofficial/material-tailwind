export function TextareaWithHelperText() {
  return (
    <div className="w-full space-y-2">
      <textarea
        rows={8}
        placeholder="Your message..."
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <div className="flex gap-1.5 text-foreground">
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="h-3.5 w-3.5 shrink-0 translate-y-[3px] stroke-2"
        >
          <path
            d="M12 11.5V16.5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 7.51L12.01 7.49889"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <small className="font-sans text-sm text-inherit antialiased">
          Use at least 255 characters and a maximum of 1000 characters.
        </small>
      </div>
    </div>
  );
}
