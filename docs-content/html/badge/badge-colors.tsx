export function BadgeColors() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative inline-flex">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Red
        </button>
        <span className="absolute top-[4%] right-[2%] grid min-h-[12px] min-w-[12px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Green
        </button>
        <span className="absolute top-[4%] right-[2%] grid min-h-[12px] min-w-[12px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-green-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Amber
        </button>
        <span className="absolute top-[4%] right-[2%] grid min-h-[12px] min-w-[12px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-amber-500 py-1 px-1 text-xs font-medium leading-none text-black content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Purple
        </button>
        <span className="absolute top-[4%] right-[2%] grid min-h-[12px] min-w-[12px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-purple-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
    </div>
  );
}
