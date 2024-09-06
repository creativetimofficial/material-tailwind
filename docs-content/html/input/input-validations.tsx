export function InputValidations() {
  return (
    <div className="flex w-72 flex-col items-end gap-6">
      <div className="w-full max-w-sm min-w-[200px]">
        <input className="w-full bg-transparent placeholder:text-red-400 text-red-700 text-sm border border-red-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-red-500 hover:border-red-300 shadow-sm focus:shadow" placeholder="Type here..." />
      </div>

      <div className="w-full max-w-sm min-w-[200px]">
        <input className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-300 shadow-sm focus:shadow" placeholder="Type here..." />
      </div>
    </div>
  );
}
