export function StepperWithDots() {
  return (
    <div className="w-full px-8 py-4">
      <div className="relative flex w-full items-center justify-between">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500"></div>
        <div className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-900 font-bold text-white transition-all duration-300"></div>
        <div className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 font-bold text-gray-900 transition-all duration-300"></div>
        <div className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 font-bold text-gray-900 transition-all duration-300"></div>
      </div>
      <div className="mt-16 flex justify-between">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          disabled
        >
          Prev
        </button>
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
