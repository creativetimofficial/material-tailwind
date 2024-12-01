export function InputWithLabelAndTextButton() {
  return (
    <>
      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <label className="block mb-2 text-sm text-slate-600">
          Your Name
        </label>

        <div className="relative">
          <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter your text" />
          <button className="absolute left-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Search
          </button>
        </div>
      </div>

      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <label className="block mb-2 text-sm text-slate-600">
          Your Name
        </label>

        <div className="relative">
          <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter your text" />
          <button className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
