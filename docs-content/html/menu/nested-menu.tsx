export function NestedMenu() {
  return (
    <>
      <button 
        data-popover-target="menu-1"
        data-popover-nested="true"
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
        Open Menu
      </button>
      <ul
        role="menu"
        data-popover="menu-1"
        data-popover-placement="bottom"
        className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
      >
        <li
          role="menuitem"
          className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          {`Menu Item 1`}
        </li>
        <li
          role="menuitem"
          className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          {`Menu Item 2`}
        </li>
        <li
          role="menuitem"
          data-popover-target="nested-menu"
          className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          {`Nested Menu`}
        </li>
        <li
          role="menuitem"
          className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          {`Menu Item 3`}
        </li>
      </ul>
      <ul
        role="menu"
        data-popover="nested-menu"
        data-popover-offset="20"
        data-popover-placement="right-start"
        className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
      >
        <li
          role="menuitem"
          className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          {`Menu Item 1`}
        </li>
        <li
          role="menuitem"
          className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          {`Menu Item 2`}
        </li>
        <li
          role="menuitem"
          className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          {`Menu Item 3`}
        </li>
      </ul>
    </>
  );
}
