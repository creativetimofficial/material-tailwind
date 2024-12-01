export function ChipWithStatus() {
  return (
    <div className="flex gap-2">
      <div className="rounded-md flex items-center bg-green-100 py-0.5 px-2.5 border border-transparent text-sm text-green-800 transition-all shadow-sm">
        <div className="mx-auto block h-2 w-2 rounded-full bg-green-800 mr-2"></div>
        Online 
      </div>

      <div className="rounded-md flex items-center bg-red-100 py-0.5 px-2.5 border border-transparent text-sm text-red-800 transition-all shadow-sm">
        <div className="mx-auto block h-2 w-2 rounded-full bg-red-800 mr-2"></div>
        Offline 
      </div>
    </div>
  );
}
