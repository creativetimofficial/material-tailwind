export function InputForDarkSurface() {
  return (
    <div className="grid h-full w-full place-items-center rounded-lg bg-slate-800">
      <div className="flex w-72 flex-col">
        <div className="w-full max-w-sm min-w-[200px]">
          <input className="w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
        </div>
      </div>
    </div>
  );
}
