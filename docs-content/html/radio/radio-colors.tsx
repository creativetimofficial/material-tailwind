export function RadioColors() {
  return (
    <div className="flex gap-6">
      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="slate-800">
          <input
            name="color"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="slate-800"
            defaultChecked
          />
          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="slate-400">
          <input
            name="color"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="slate-400"
          />
          <span className="absolute bg-slate-400 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="blue-600">
          <input
            name="color"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-blue-400 transition-all"
            id="blue-600"
          />
          <span className="absolute bg-blue-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="green-600">
          <input
            name="color"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-green-400 transition-all"
            id="green-600"
          />
          <span className="absolute bg-green-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="red-600">
          <input
            name="color"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-red-400 transition-all"
            id="red-600"
          />
          <span className="absolute bg-red-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="amber-600">
          <input
            name="color"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
            id="amber-600"
          />
          <span className="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer" htmlFor="purple-600">
          <input
            name="color"
            type="radio"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-purple-400 transition-all"
            id="purple-600"
          />
          <span className="absolute bg-purple-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>
    </div>
  );
}
