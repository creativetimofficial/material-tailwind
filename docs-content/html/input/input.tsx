export function InputDefault() {
  return (
    <div className="flex w-72 flex-col gap-6">
      <div className="w-full max-w-sm min-w-[200px]">
        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
      </div>
    </div>
  );
}
