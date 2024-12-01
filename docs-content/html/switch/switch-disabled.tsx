export function SwitchDisabled() {
  return (
    <div className="relative inline-block w-11 h-5 pointer-events-none">
      <input disabled id="switch-component-disabled" type="checkbox" className="peer appearance-none disabled:opacity-50 w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
      <label htmlFor="switch-component-disabled" className="absolute opacity-50 top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
      </label>
    </div>
  );
}
