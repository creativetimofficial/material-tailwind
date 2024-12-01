export function TabsDefault() {
  return (
    <div className="w-2/3">
      <div className="relative right-0">
        <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" data-tabs="tabs" role="list">
          <li className="z-30 flex-auto text-center">
            <a className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit"
            data-tab-target="" role="tab" aria-selected="true">
              Dashboard
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a className="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit"
            data-tab-target="" role="tab" aria-selected="false">
              Profile
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            data-tab-target="" role="tab" aria-selected="false">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div> 
  );
}
