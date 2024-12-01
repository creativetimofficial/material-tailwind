export function TooltipDefault() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-tooltip-target="tooltip"
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {`Show Tooltip`}
      </button>
      <div
        data-tooltip="tooltip"
        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
        {`Material Tailwind`}
      </div>
    </>
  );
}
