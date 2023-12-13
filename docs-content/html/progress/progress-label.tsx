export function ProgressLabel() {
  return (
    <div className="flex-start flex h-4 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
      <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white">
        50% Completed
      </div>
    </div>
  );
}
