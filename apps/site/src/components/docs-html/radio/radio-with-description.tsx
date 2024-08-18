export function RadioWithDescription() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex gap-2">
        <label
          className="relative inline-block w-5 h-5"
          htmlFor="radio-description-html"
        >
          <input
            id="radio-description-html"
            type="radio"
            value="html"
            name="radio-description"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label htmlFor="radio-description-html" className="-translate-y-1">
          <p className="font-sans text-base antialiased font-semibold text-black dark:text-white">
            HTML Version
          </p>
          <small className="font-sans text-sm antialiased text-foreground">
            @material-tailwind/html, packed with rich components and widgets.
          </small>
        </label>
      </div>
      <div className="flex gap-2">
        <label
          className="relative inline-block w-5 h-5"
          htmlFor="radio-description-react"
        >
          <input
            id="radio-description-react"
            type="radio"
            value="react"
            name="radio-description"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label htmlFor="radio-description-react" className="-translate-y-1">
          <p className="font-sans text-base antialiased font-semibold text-black dark:text-white">
            React Version
          </p>
          <small className="font-sans text-sm antialiased text-foreground">
            @material-tailwind/react, packed with rich components and widgets.
          </small>
        </label>
      </div>
    </div>
  );
}
