export function ChipPills() {
  return (
    <div className="flex gap-2">
      <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
        <span className="">chip filled</span>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
        <span className="">chip gradient</span>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-full border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-700">
        <span className="">chip outlined</span>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
        <span className="">chip ghost</span>
      </div>
    </div>
  );
}
