export function RadioWithLink() {
  return (
    <div className="flex flex-col gap-10">
      {/* HTML Radio Button */}
      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="html-link">
          <input
            name="framework-link"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="html-link"
            defaultChecked
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="html-link">
          <p>
            I agree with HTML&nbsp;
            <a
              href="#"
              className="font-medium hover:text-slate-800 underline"
            >
              terms and conditions
            </a>
            .
          </p>
        </label>
      </div>

      {/* React Radio Button */}
      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="react-link">
          <input
            name="framework-link"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="react-link"
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="react-link">
          <p>
            I agree with React&nbsp;
            <a
              href="#"
              className="font-medium hover:text-slate-800 underline"
            >
              terms and conditions
            </a>
            .
          </p>
        </label>
      </div>
    </div>
  );
}
