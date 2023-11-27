export function ChipSizes() {
  return (
    <div className="flex items-end gap-2">
      <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 font-sans text-xs font-bold uppercase text-white">
        <span className="">chip small</span>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
        <span className="">chip medium</span>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 font-sans text-xs font-bold uppercase text-white">
        <span className="">chip large</span>
      </div>
    </div>
  );
}
