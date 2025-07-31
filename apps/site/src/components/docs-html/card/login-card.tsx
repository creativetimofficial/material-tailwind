export function LoginCard() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-surface bg-background shadow-lg shadow-black/5">
      <div className="m-1.5 grid h-24 w-[calc(100%-12px)] place-items-center overflow-hidden rounded-[5px] border border-primary-dark bg-primary shadow-none shadow-primary-dark/25">
        <span className="font-sans text-xl font-bold text-primary-foreground antialiased md:text-2xl lg:text-3xl">
          Sign In
        </span>
      </div>
      <form className="h-max w-full rounded px-3 py-2">
        <div className="relative mb-4 mt-2 w-full space-y-1.5 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full">
          <label
            htmlFor="email"
            className="font-sans text-sm font-semibold text-black antialiased dark:text-white"
          >
            Email
          </label>
          <input
            id="email"
            placeholder="someone@example.com"
            className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
            type="email"
          />
        </div>
        <div className="relative mb-4 w-full space-y-1.5 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full">
          <label
            htmlFor="password"
            className="font-sans text-sm font-semibold text-black antialiased dark:text-white"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="************"
            className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
            type="password"
          />
        </div>
        <label htmlFor="remember" className="mb-4 flex items-center gap-2">
          <label
            className="relative inline-block h-5 w-5 rounded bg-surface text-primary-foreground transition-all duration-200 ease-in aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[checked=true]:bg-primary"
            data-checked="false"
            htmlFor="remember"
          >
            <input id="remember" type="checkbox" className="hidden" />
            <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current opacity-0 transition-all duration-200 ease-in">
              <svg
                fill="none"
                width="18px"
                height="18px"
                stroke-width="2"
                color="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </label>
          <p className="font-sans text-base text-foreground antialiased">
            Remember Me
          </p>
        </label>
        <button className="inline-flex w-full select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
          Sign In
        </button>
      </form>
      <div className="w-full rounded px-3 pb-3 pt-1.5 text-center">
        <small className="my-1 flex items-center justify-center gap-1 font-sans text-sm text-foreground antialiased">
          Don't have an account?
          <a
            href="#"
            className="font-sans text-sm font-bold text-primary antialiased"
          >
            Sign up
          </a>
        </small>
      </div>
    </div>
  );
}
