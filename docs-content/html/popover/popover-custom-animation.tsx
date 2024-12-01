export function PopoverCustomAnimation() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-popover-target="popover-animation"
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {`POPOVER`}
      </button>
      <div
        data-popover="popover-animation"
        data-popover-mount="opacity-100 scale-100"
        data-popover-unmount="opacity-0 scale-0 pointer-events-none"
        data-popover-transition="transition-all duration-200 origin-bottom"
        className="absolute w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
      >
        {`This is a very beautiful popover, show some love.`}
      </div>
    </>
  );
}
