export function InputCounterButtons() {
  return (
    <>
      <div className="w-[250px] max-w-sm relative mt-4">
        <label className="block mb-1 text-sm text-slate-800">
          Number of Items
        </label>
        <div className="relative">
          <button
            className="absolute h-8 w-8 right-10 top-1 my-auto px-2 flex items-center bg-white rounded hover:bg-slate-200"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <input
            type="number"
            className="w-full pl-4 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="55"
            value="55"
          />
          <button
            className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded hover:bg-slate-200"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <p className="flex items-center mt-2 text-xs text-slate-500">
          Use the + and - buttons to adjust the quantity.
        </p>    
      </div>
    </>
  );
}
