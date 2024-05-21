export function InputFile() {
  return (
    <>
      <label htmlFor="file-input" className="sr-only">
        Choose file
      </label>
      <input
        type="file"
        id="file-input"
        className="block w-full rounded-lg border border-blue-gray-800 text-sm file:me-4 file:cursor-pointer file:border-0 file:bg-blue-gray-900 file:px-4 file:py-3 file:text-white hover:cursor-pointer focus:z-10 focus:border-gray-800 focus:ring-gray-800 disabled:pointer-events-none disabled:opacity-50"
      />
    </>
  );
}
