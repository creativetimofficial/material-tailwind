export function EcommerceCard() {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
          alt="card-image"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">
            Apple AirPods
          </p>
          <p className="text-cyan-600 text-xl font-semibold">
            $95.00
          </p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>
        <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
