export function RadioHorizontalList() {
  return (
    <div className="relative max-w-sm flex w-full flex-col rounded-xl bg-white shadow">
      <nav className="flex min-w-[240px] flex-row gap-1 p-2">
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="react-horizontal"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="react-horizontal">
                <input
                  name="framework-horizontal"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="react-horizontal"
                  defaultChecked
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="react-horizontal">
                React.js
              </label>
            </div>
          </label>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="vue-horizontal"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="vue-horizontal">
                <input
                  name="framework-horizontal"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="vue-horizontal"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="vue-horizontal">
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
            htmlFor="svelte-horizontal"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="svelte-horizontal">
                <input
                  name="framework-horizontal"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="svelte-horizontal"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="svelte-horizontal">
                Svelte.js
              </label>
            </div>
          </label>
        </div>
      </nav>
    </div>
  );
}
