export function ChipWithCheckbox() {
  return (
    <div className="flex gap-2">
      <div className="rounded-md flex items-center bg-green-100 py-0.5 pr-2.5 pl-1.5 border border-transparent text-sm text-green-800 transition-all shadow-sm">
        <div className="inline-flex items-center mr-2">
          <label className="flex items-center cursor-pointer relative">
            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-300 checked:bg-green-600 checked:border-green-600" id="check4" />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </label>
        </div>

        Online 
      </div>

      <div className="rounded-md flex items-center bg-red-100 py-0.5 pr-2.5 pl-1.5 border border-transparent text-sm text-red-800 transition-all shadow-sm">
        <div className="inline-flex items-center mr-2">
          <label className="flex items-center cursor-pointer relative">
            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-red-300 checked:bg-red-600 checked:border-red-600" id="check5" />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </label>
        </div>

        Offline 
      </div>
    </div>
  );
}
