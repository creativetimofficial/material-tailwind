export function InputWithLabelAndIconButton() {
  return (
    <>
      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <label className="block mb-1 text-sm text-slate-800">
          Your Name
        </label>
        <div className="relative">
          <input
            className="w-full pl-11 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text"
          />
          <button
            className="absolute h-8 w-8 left-1 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <label className="block mb-1 text-sm text-slate-800">
          Your Name
        </label>
        <div className="relative">
          <input
            className="w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text"
          />
          <button
            className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
