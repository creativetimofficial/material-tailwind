export function ChipWithStatus() {
  return (
    <div className="flex gap-2">
      <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-green-900">
        <div className="absolute top-2/4 left-1 h-4 w-4 -translate-y-2/4">
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']"></span>
        </div>
        <span className="ml-4">Online</span>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-red-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-red-900">
        <div className="absolute top-2/4 left-1 h-4 w-4 -translate-y-2/4">
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']"></span>
        </div>
        <span className="ml-4">Offline</span>
      </div>
    </div>
  );
}
