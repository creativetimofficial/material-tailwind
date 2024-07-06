export function ProgressLabelOutside() {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          Completed
        </h6>
        <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          50%
        </h6>
      </div>
      <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white"></div>
      </div>
    </div>
  );
}
