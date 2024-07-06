export function TabsDefault() {
  return (
    <div className="w-full">
      <div className="relative right-0">
        <ul
          className="relative flex list-none flex-wrap rounded-lg bg-blue-gray-50/60 p-1"
          data-tabs="tabs"
          role="list"
        >
          <li className="z-30 flex-auto text-center">
            <a
              className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
              data-tab-target=""
              role="tab"
              aria-selected="true"
            >
              <span className="ml-1">HTML</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
              data-tab-target=""
              role="tab"
              aria-selected="false"
            >
              <span className="ml-1">React</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
              data-tab-target=""
              role="tab"
              aria-selected="false"
            >
              <span className="ml-1">Vue</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
              data-tab-target=""
              role="tab"
              aria-selected="true"
            >
              <span className="ml-1">Angular</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
              data-tab-target=""
              role="tab"
              aria-selected="true"
            >
              <span className="ml-1">Svelte</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
