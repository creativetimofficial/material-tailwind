export function ListWithBadge() {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Inbox
          <div className="ml-auto grid place-items-center justify-self-end">
            <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 px-2 py-1 font-sans text-xs font-bold uppercase text-gray-900">
              <span className="">14</span>
            </div>
          </div>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Spam
          <div className="ml-auto grid place-items-center justify-self-end">
            <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 px-2 py-1 font-sans text-xs font-bold uppercase text-gray-900">
              <span className="">2</span>
            </div>
          </div>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Trash
          <div className="ml-auto grid place-items-center justify-self-end">
            <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 px-2 py-1 font-sans text-xs font-bold uppercase text-gray-900">
              <span className="">40</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
