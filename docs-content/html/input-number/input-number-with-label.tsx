export function InputNumberWithLabel() {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <label className="block mb-1 text-sm text-neutral-900">
          Your Name
      </label>
      <input
        type="number"
        className="w-full h-10 bg-transparent text-neutral-700 text-sm border border-neutral-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-neutral-400 hover:border-neutral-400 shadow-sm focus:shadow-md"
        placeholder="Enter your number" />
    </div>
  );
}
