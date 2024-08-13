export function RadioWithLink() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <label
          className="relative inline-block h-5 w-5"
          htmlFor="radio-link-agree"
        >
          <input
            id="radio-link-agree"
            type="radio"
            name="agreement"
            value="agree"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current text-primary-foreground opacity-0 transition-all duration-200 ease-in peer-checked:scale-100 peer-checked:opacity-100">
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
        <label
          htmlFor="radio-link-agree"
          className="flex gap-1 font-sans text-base text-foreground antialiased"
        >
          I agree with the
          <a href="#" className="font-sans text-base text-primary antialiased">
            terms and conditions
          </a>
        </label>
      </div>
      <div className="flex items-center gap-2">
        <label
          className="relative inline-block h-5 w-5"
          htmlFor="radio-link-disagree"
        >
          <input
            id="radio-link-disagree"
            type="radio"
            name="agreement"
            value="disagree"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current text-primary-foreground opacity-0 transition-all duration-200 ease-in peer-checked:scale-100 peer-checked:opacity-100">
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
        <label
          htmlFor="radio-link-disagree"
          className="flex gap-1 font-sans text-base text-foreground antialiased"
        >
          I disagree with the
          <a href="#" className="font-sans text-base text-primary antialiased">
            terms and conditions
          </a>
        </label>
      </div>
    </div>
  );
}
