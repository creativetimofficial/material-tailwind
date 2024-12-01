export function ChipVariants() {
  return (
    <>
      <div className="flex gap-2">
        <div className="rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
          Chip Filled
        </div>
        <div className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
          Chip Gradient
        </div>
        <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
          Chip Outlined
        </div>
        <div className="rounded-md bg-slate-100 py-0.5 px-2.5 border border-transparent text-sm text-slate-600 transition-all shadow-sm">
          Chip Ghost
        </div>
      </div>
    </>
  );
}
