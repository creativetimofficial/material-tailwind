import { Progress } from "@material-tailwind/react";

export function ProgressSizes() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex-start flex h-1.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/4 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white"></div>
      </div>
      <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/3 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white"></div>
      </div>
      <div className="flex-start flex h-3.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white"></div>
      </div>
    </div>
  );
}
