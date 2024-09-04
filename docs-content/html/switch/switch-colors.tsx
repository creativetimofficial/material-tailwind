export function SwitchColors() {
  return (
    <div className="flex w-max gap-6">
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-blue" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-blue" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer">
        </label>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-red" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-red-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-red" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-red-600 cursor-pointer">
        </label>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-green" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-green-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-green" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-green-600 cursor-pointer">
        </label>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-amber" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-amber-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-amber" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-amber-600 cursor-pointer">
        </label>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-teal" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-teal-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-teal" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-teal-600 cursor-pointer">
        </label>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-indigo" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-indigo-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-indigo" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-indigo-600 cursor-pointer">
        </label>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-purple" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-purple-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-purple" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-purple-600 cursor-pointer">
        </label>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input defaultChecked id="switch-component-pink" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-pink-600 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component-pink" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-pink-600 cursor-pointer">
        </label>
      </div>
    </div>
  );
}
