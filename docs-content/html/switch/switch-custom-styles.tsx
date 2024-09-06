export function SwitchCustomStyles() {
  return (
    <div className="relative inline-block w-11 h-5">
      <input id="switch-component-custom" type="checkbox" className="peer appearance-none w-11 h-4 bg-slate-100 border border-slate-300 rounded-full checked:bg-slate-800 checked:border-slate-800 cursor-pointer transition-colors duration-300" />
      <label htmlFor="switch-component-custom" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
      </label>
    </div>
  );
}
