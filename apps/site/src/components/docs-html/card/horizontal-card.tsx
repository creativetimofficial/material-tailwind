
export default function HorizontalCard() {
  return (
    <div
      className="w-full place-items-center h-full"
      dangerouslySetInnerHTML={{
        __html: `<div class="rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 flex h-full w-full max-w-[48rem] flex-row">
  <div class="rounded m-0 h-full w-2/5 shrink-0 rounded-r-none">
    <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="card-image" />
  </div>
  <div class="w-full h-max rounded p-4">
    <small class="font-sans antialiased text-sm mb-4 font-bold uppercase text-slate-600">
      startups
    </small>
    <h5 class="font-sans antialiased font-bold text-lg md:text-xl lg:text-2xl text-current mb-2">
      Lyft launching cross-platform service this week
    </h5>
    <p class="font-sans antialiased text-base mb-8 text-slate-600">
      Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
    </p>
    <a class="border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 mb-2 flex w-fit items-center gap-2" href="#">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-4 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
      </svg>
    </a>
  </div>
</div>`
      }}
    />
  );
}
