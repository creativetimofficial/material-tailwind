export function RadioCustomStyles() {
  return (
    <div className="flex flex-col gap-10">
      {/* HTML Radio Button */}
      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="html-custom">
          <input
            name="framework-custom"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-200 bg-slate-100 checked:border-slate-300 transition-all"
            id="html-custom"
            defaultChecked
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="html-custom">
          HTML
        </label>
      </div>

      {/* React Radio Button */}
      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="react-custom">
          <input
            name="framework-custom"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-200 bg-slate-100 checked:border-slate-300 transition-all"
            id="react-custom"
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="react-custom">
          React
        </label>
      </div>
    </div>
  );
}
