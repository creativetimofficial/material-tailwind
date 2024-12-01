export function InputCustomStyles() {
  return (
    <div className="w-72">
      <input
        type="email"
        placeholder="Type Here..."
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
      />
    </div>
  );
}
