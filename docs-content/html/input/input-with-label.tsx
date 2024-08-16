export function InputWithLabel() {
  return (
    <div className="w-full max-w-sm min-w-[200px] mt-4">
      <label className="block mb-1 text-sm text-slate-800">
          Your Name
      </label>
      <input
        type="text"
        className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        placeholder="Enter your text" />
    </div>
  );
}
