export function ListWithDisabledItem() {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="pointer-events-none flex w-full cursor-not-allowed select-none items-center rounded-lg p-3 text-start leading-tight opacity-50 outline-none transition-all hover:bg-transparent hover:bg-opacity-80 hover:text-blue-gray-500 focus:bg-transparent focus:bg-opacity-80 focus:text-blue-gray-500 active:bg-transparent active:bg-opacity-80 active:text-blue-gray-500"
        >
          Inbox
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Trash
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Settings
        </div>
      </nav>
    </div>
  );
}
