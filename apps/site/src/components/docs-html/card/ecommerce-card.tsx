

export default function EcommerceCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-96 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5"><img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80" alt="card-image" class="m-1.5 h-96 w-[calc(100%-12px)] rounded-[5px] object-cover" />
  <div class="h-max w-full rounded px-3 py-2">
    <div class="mb-2 flex items-center justify-between">
      <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">Apple AirPods</h6>
      <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">$95.00</h6>
    </div>
    <p class="font-sans text-base text-slate-600 antialiased">With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.</p>
  </div>
  <div class="w-full rounded px-3 pb-3 pt-1.5"><button class="inline-flex w-full select-none items-center justify-center rounded-md border border-slate-200 bg-slate-200 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-100 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Add to Cart</button></div>
</div>
`
      }}
    />
  );
}
