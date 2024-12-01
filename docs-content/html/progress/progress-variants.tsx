export function ProgressVariants() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white"></div>
      </div>
      <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 text-white"></div>
      </div>
    </div>
  );
}
