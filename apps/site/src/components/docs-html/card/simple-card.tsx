

export default function SimpleCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
  <div class="h-max w-full rounded px-3 py-2">
    <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">UI/UX Review Check</h6>
    <p class="my-1 font-sans text-base text-slate-600 antialiased">The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.</p>
  </div>
  <div class="w-full rounded px-3 pb-3 pt-1.5"><button class="inline-flex w-full select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Read More</button></div>
</div>
`
      }}
    />
  );
}
