export function HorizontalCard() {
  return (
    <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="card-image"
          className="h-full w-full rounded-md md:rounded-lg object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">STARTUP</div>
        <h4 className="mb-2 text-slate-800 text-xl font-semibold">
          Lyft launching cross-platform service this week
        </h4>
        <p className="mb-8 text-slate-600 leading-normal font-light">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </p>
        <div>
          <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
