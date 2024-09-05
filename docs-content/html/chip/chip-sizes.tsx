export function ChipSizes() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm">
          Small Chip
      </div>
      <div className="rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
          Medium Chip
      </div>
      <div className="rounded-md bg-slate-800 py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm">
          Large Chip
      </div>
    </div>
  );
}
