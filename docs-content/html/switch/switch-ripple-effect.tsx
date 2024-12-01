export function SwitchRippleEffect() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative inline-flex gap-2">
        <div className="w-11 h-5">
          <input id="switch-component-ripple-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

          <label
            htmlFor="switch-component-ripple-on"
            className="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>

        <label htmlFor="switch-component-ripple-on" className="text-slate-600 text-sm cursor-pointer">
          Ripple Effect On
        </label>
      </div>

      <div className="inline-flex items-center gap-2">
        <div className="relative inline-block w-11 h-5">
          <input id="switch-component-ripple-off" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
          <label htmlFor="switch-component-ripple-off" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
          </label>
        </div>

        <label htmlFor="switch-component-ripple-off" className="text-slate-600 text-sm cursor-pointer">
          Ripple Effect Off</label>
      </div>
    </div>
  );
}
