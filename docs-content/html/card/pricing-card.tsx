export function PricingCard() {
  return (
    <div
      className="flex flex-col rounded-lg bg-white shadow-sm max-w-96 p-8 my-6 border border-slate-200">
      <div
        className="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
        <p className="text-sm uppercase font-semibold text-slate-500">
          standard
        </p>
        <h1 className="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
          <span className="text-3xl">$</span>29
          <span className="self-end text-3xl">/mo</span>
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-slate-200 bg-slate-50"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg></span>
            <p className="text-slate-500">
              5 team members
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-slate-200 bg-slate-50"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg></span>
            <p className="text-slate-500">
              200+ components
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-slate-200 bg-slate-50"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg></span>
            <p className="text-slate-500">
              40+ built-in pages
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-slate-200 bg-slate-50"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg></span>
            <p className="text-slate-500">
              1 year free updates
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-slate-200 bg-slate-50"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg></span>
            <p className="text-slate-500">
              Life time technical support
            </p>
          </li>
        </ul>
      </div>
      <div className="p-0 mt-12">
        <button className="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Buy Now
        </button>
      </div>
    </div> 
  );
}
