export function RadioWithDescription() {
  return (
    <div className="flex flex-col gap-10">
      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="html-description">
          <input
            name="framework-description"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="html-description"
            defaultChecked
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="html-description">
          <div>
            <p className="font-medium">
              HTML Version
            </p>
            <p className="text-slate-500">
              @material-tailwind/html, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="react-description">
          <input
            name="framework-description"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="react-description"
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="react-description">
          <div>
            <p className="font-medium">
              React Version
            </p>
            <p className="text-slate-500">
              @material-tailwind/react, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
