export function TextPlacehoderSkeleton() {
  return (
    <div className="max-w-lg animate-pulse space-y-2.5">
      <div className="flex w-full items-center">
        <h1 className="block h-3 w-80 rounded-full bg-gray-200 font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit antialiased dark:bg-gray-700"></h1>
      </div>
      <div className="flex w-full max-w-md items-center">
        <p className="block h-2.5 w-full rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
        <p className="ms-2 block h-2.5 w-24 rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
      </div>
      <div className="flex w-full max-w-md items-center">
        <p className="block h-2.5 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
        <p className="ms-2 block h-2.5 w-80 rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
        <p className="ms-2 block h-2.5 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
      </div>
      <div className="flex w-full max-w-md items-center">
        <p className="ms-2 block h-2.5 w-full rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
        <p className="ms-2 block h-2.5 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
        <p className="ms-2 block h-2.5 w-24 rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
      </div>
      <div className="flex w-full max-w-md items-center">
        <p className="ms-2 block h-2.5 w-32 rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
        <p className="ms-2 block h-2.5 w-24 rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
        <p className="ms-2 block h-2.5 w-full rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
      </div>
      <div className="flex w-full max-w-md items-center">
        <p className="ms-2 block h-2.5 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
        <p className="ms-2 block h-2.5 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-600"></p>
      </div>
      <p className="sr-only block font-sans text-sm font-light leading-normal text-inherit antialiased">
        Loading...
      </p>
    </div>
  );
}
