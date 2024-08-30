export function DisabledCheckbox() {
  return (
    <div className="inline-flex items-center pointer-events-none">
      <label className="flex items-center cursor-pointer relative" htmlFor="check-disabled">
        <input type="checkbox"
          disabled
          className="peer h-5 w-5 cursor-pointer transition-all disabled:opacity-50 appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
          id="check-disabled" />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="cursor-pointer ml-2 text-slate-600 text-sm opacity-50" htmlFor="check-disabled">
        Remember Me
      </label>
    </div>
  );
}
