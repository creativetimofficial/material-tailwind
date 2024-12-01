export function RadioVerticalList() {
  return (
    <div className="relative flex flex-col rounded-xl bg-white shadow">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2">
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="react-vertical"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="react-vertical">
                <input
                  name="framework"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="react-vertical"
                  defaultChecked
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="react-vertical">
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
            htmlFor="vue-vertical"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="vue-vertical">
                <input
                  name="framework"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="vue-vertical"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="vue-vertical">
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
            htmlFor="svelte-vertical"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="svelte-vertical">
                <input
                  name="framework"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="svelte-vertical"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="svelte-vertical">
                Svelte.js
              </label>
            </div>
          </label>
        </div>
      </nav>
    </div>
  );
}
