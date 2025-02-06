
export function EcommerceCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 w-96"><img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80" alt="card-image" class="w-[calc(100%-16px)] rounded m-2 h-96 object-cover" />
  <div class="w-full h-max rounded px-3.5 py-2.5">
    <div class="mb-2 flex items-center justify-between">
      <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">Apple AirPods</h6>
      <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">$95.00</h6>
    </div>
    <p class="font-sans antialiased text-base text-slate-600">With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.</p>
  </div>
  <div class="w-full px-3.5 pt-2 pb-3.5 rounded"><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100" data-shape="default" data-width="full">Add to Cart</button></div>
</div>
`
      }}
    />
  );
}
