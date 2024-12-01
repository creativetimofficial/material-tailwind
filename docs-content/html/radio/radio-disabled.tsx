export function RadioDisabled() {
  return (
    <div className="flex gap-10">
      {/* HTML Radio Button */}
      <div className="inline-flex items-center pointer-events-none">
        <label className="relative flex items-center cursor-pointer" htmlFor="html-disabled">
          <input
            disabled
            name="framework"
            type="radio"
            className="peer disabled:opacity-50 h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="html-disabled"
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm opacity-50" htmlFor="html-disabled">
          HTML
        </label>
      </div>

      {/* React Radio Button */}
      <div className="inline-flex items-center pointer-events-none">
        <label className="relative flex items-center cursor-pointer" htmlFor="react-disabled">
          <input
            disabled
            name="framework"
            type="radio"
            className="peer disabled:opacity-50 h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="react-disabled"
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm opacity-50" htmlFor="react-disabled">
          React
        </label>
      </div>
    </div>
  );
}
