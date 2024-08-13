export function CustomRadio() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <label
          className="relative inline-block h-5 w-5"
          data-value=":r50:"
          htmlFor="custom-html"
        >
          <input
            id="custom-html"
            type="radio"
            value=":r50:"
            name="custom-radio"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current text-primary-foreground opacity-0 transition-all duration-200 ease-in peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="1.5em"
              height="1.5em"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              className="h-4 w-4 stroke-2"
            >
              <path
                d="M5 13L9 17L19 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </label>
        <label
          htmlFor="custom-html"
          className="font-sans text-base text-foreground antialiased"
        >
          HTML
        </label>
      </div>
      <div className="flex items-center gap-2">
        <label
          className="relative inline-block h-5 w-5"
          data-value=":r52:"
          htmlFor="custom-react"
        >
          <input
            id="custom-react"
            type="radio"
            value=":r52:"
            name="custom-radio"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current text-primary-foreground opacity-0 transition-all duration-200 ease-in peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="1.5em"
              height="1.5em"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              className="h-4 w-4 stroke-2"
            >
              <path
                d="M5 13L9 17L19 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </label>
        <label
          htmlFor="custom-react"
          className="font-sans text-base text-foreground antialiased"
        >
          React
        </label>
      </div>
    </div>
  );
}
