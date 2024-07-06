export function ProgressSizesLabel() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex-start flex h-3.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/4 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white">
          25% Small
        </div>
      </div>
      <div className="flex-start flex h-4 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white">
          50% Medium
        </div>
      </div>
      <div className="flex-start flex h-5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-3/4 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white">
          75% Large
        </div>
      </div>
    </div>
  );
}
