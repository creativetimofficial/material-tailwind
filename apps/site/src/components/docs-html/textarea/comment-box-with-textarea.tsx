export function CommentBoxWithTextarea() {
  return (
    <form action="#" className="w-full">
      <textarea
        rows={8}
        type="email"
        placeholder="someone@example.com"
        className="peer block w-full resize-none rounded-md border border-surface bg-transparent p-2.5 text-sm leading-none text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
      ></textarea>
      <div className="flex w-full justify-between py-3">
        <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-4 w-4"
          >
            <path
              d="M21.4383 11.6622L12.2483 20.8522C11.1225 21.9781 9.59552 22.6106 8.00334 22.6106C6.41115 22.6106 4.88418 21.9781 3.75834 20.8522C2.63249 19.7264 2 18.1994 2 16.6072C2 15.015 2.63249 13.4881 3.75834 12.3622L12.9483 3.17222C13.6989 2.42166 14.7169 2 15.7783 2C16.8398 2 17.8578 2.42166 18.6083 3.17222C19.3589 3.92279 19.7806 4.94077 19.7806 6.00222C19.7806 7.06368 19.3589 8.08166 18.6083 8.83222L9.40834 18.0222C9.03306 18.3975 8.52406 18.6083 7.99334 18.6083C7.46261 18.6083 6.95362 18.3975 6.57834 18.0222C6.20306 17.6469 5.99222 17.138 5.99222 16.6072C5.99222 16.0765 6.20306 15.5675 6.57834 15.1922L15.0683 6.71222"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div className="flex gap-2">
          <button className="inline-flex select-none items-center justify-center rounded-md border border-secondary bg-secondary px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
            Cancel
          </button>
          <button className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
            Post Comment
          </button>
        </div>
      </div>
    </form>
  );
}
