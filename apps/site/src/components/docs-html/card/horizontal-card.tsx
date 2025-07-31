export function HorizontalCard() {
  return (
    <div className="flex h-full w-full max-w-3xl flex-row overflow-hidden rounded-lg border border-surface bg-background shadow-lg shadow-black/5">
      <div className="m-0 h-full w-2/5 shrink-0 rounded-[5px] rounded-r-none">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-max w-full rounded p-4">
        <small className="mb-4 font-sans text-sm font-bold uppercase text-foreground antialiased">
          startups
        </small>
        <h5 className="mb-2 font-sans text-lg font-bold text-inherit antialiased md:text-xl lg:text-2xl">
          Lyft launching cross-platform service this week
        </h5>
        <p className="mb-8 font-sans text-base text-foreground antialiased">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </p>
        <a
          href="#"
          className="mb-2 flex w-fit select-none items-center justify-center gap-2 rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
