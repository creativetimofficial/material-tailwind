export function InputFile() {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <div>
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            type="file"
            id="file-input"
            className="peer block h-full w-full rounded-[7px] !border !border-gray-300 border-t-transparent bg-transparent !px-0 py-2.5 !pt-0 font-sans text-sm font-normal  text-gray-900 shadow-lg shadow-gray-900/5  outline outline-0 ring-4 ring-transparent  transition-all file:me-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-gray-900 file:px-3 file:py-[9px] file:text-white placeholder:!opacity-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 hover:cursor-pointer focus:z-10 focus:border-2 focus:!border-gray-500 focus:border-t-transparent focus:outline-0 focus:placeholder:opacity-100 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-0 disabled:bg-blue-gray-50 disabled:opacity-50"
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0  hidden h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
      </div>
    </div>
  );
}
