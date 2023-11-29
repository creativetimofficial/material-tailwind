export function HorizontalCard() {
  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-gray-700 antialiased">
          startups
        </h6>
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Lyft launching cross-platform service this week
        </h4>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </p>
        <a href="#" className="inline-block">
          <button
            className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
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
          </button>
        </a>
      </div>
    </div>
  );
}
