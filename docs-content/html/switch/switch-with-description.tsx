export function SwitchWithDescription() {
  return (
    <div className="inline-flex gap-2">
      <div className="relative inline-block w-11 h-5">
        <input id="switch-component-desc" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-desc" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
        </label>
      </div>

      <label htmlFor="switch-component-desc" className="text-slate-600 text-sm cursor-pointer">
        <div>
          <p className="font-medium">
            Remember Me
          </p>
          <p className="text-slate-500">
            You&apos;ll be able to login without password for 24 hours.
          </p>
        </div>
      </label>
    </div>
  );
}
