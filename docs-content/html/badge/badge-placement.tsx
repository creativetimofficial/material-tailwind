export function BadgePlacement() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative inline-flex">
        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Top Start
        </button>
        <span className="absolute top-0.5 left-0.5 grid min-h-[12px] min-w-[12px] -translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Top End
        </button>
        <span className="absolute top-0.5 right-0.5 grid min-h-[12px] min-w-[12px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Bottom Start
        </button>
        <span className="absolute bottom-0.5 left-0.5 grid min-h-[12px] min-w-[12px] -translate-x-2/4 translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Bottom End
        </button>
        <span className="absolute bottom-0.5 right-0.5 grid min-h-[12px] min-w-[12px] translate-x-2/4 translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
    </div>
  );
}
