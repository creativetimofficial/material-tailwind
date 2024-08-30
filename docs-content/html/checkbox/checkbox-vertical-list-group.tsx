export function CheckboxVerticalListGroup() {
  return (
    <div className="relative flex flex-col rounded-xl bg-white shadow">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2">
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="check-vertical-list-group"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="flex items-center cursor-pointer relative" htmlFor="check-vertical-list-group">
                <input type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check-vertical-list-group" />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                    stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                  </svg>
                </span>
              </label>
              <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-vertical-list-group">
                React
              </label>
            </div>
          </label>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="check-vertical-list-group2"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="flex items-center cursor-pointer relative" htmlFor="check-vertical-list-group2">
                <input type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check-vertical-list-group2" />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                    stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                  </svg>
                </span>
              </label>
              <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-vertical-list-group2">
                Vue.js
              </label>
            </div>
          </label>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="check-vertical-list-group3"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="flex items-center cursor-pointer relative" htmlFor="check-vertical-list-group3">
                <input type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check-vertical-list-group3" />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                    stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                  </svg>
                </span>
              </label>
              <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-vertical-list-group3">
                Svelte.js
              </label>
            </div>
          </label>
        </div>
      </nav>
    </div>
  );
}
