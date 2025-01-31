

export default function HorizontalCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex h-full w-full max-w-[48rem] flex-row overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
  <div class="m-0 h-full w-2/5 shrink-0 rounded-[5px] rounded-r-none"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="card-image" class="h-full w-full object-cover" /></div>
  <div class="h-max w-full rounded p-4"><small class="mb-4 font-sans text-sm font-bold uppercase text-slate-600 antialiased">startups</small>
    <h5 class="mb-2 font-sans text-lg font-bold text-current antialiased md:text-xl lg:text-2xl">Lyft launching cross-platform service this week</h5>
    <p class="mb-8 font-sans text-base text-slate-600 antialiased">Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story</p><a href="#" class="mb-2 flex w-fit select-none items-center justify-center gap-2 rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-4 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
      </svg></a>
  </div>
</div>
`
      }}
    />
  );
}
