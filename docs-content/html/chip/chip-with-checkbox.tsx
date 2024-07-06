export function ChipWithCheckbox() {
  return (
    <div className="flex gap-2">
      <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-green-500/20 py-1.5 px-3 font-sans text-xs font-bold uppercase text-green-900">
        <div className="absolute top-2/4 left-1.5 h-5 w-5 -translate-y-2/4">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-0"
              htmlFor="online"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative -ml-px h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-green-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:hidden before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-900 checked:bg-green-900 checked:before:bg-green-500 hover:before:opacity-10"
                id="online"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <span className="ml-[18px]">Online</span>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-red-500/20 py-1.5 px-3 font-sans text-xs font-bold uppercase text-red-900">
        <div className="absolute top-2/4 left-1.5 h-5 w-5 -translate-y-2/4">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-0"
              htmlFor="offline"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative -ml-px h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-red-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:hidden before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-900 checked:bg-red-900 checked:before:bg-red-500 hover:before:opacity-10"
                id="offline"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <span className="ml-[18px]">Offline</span>
      </div>
    </div>
  );
}
