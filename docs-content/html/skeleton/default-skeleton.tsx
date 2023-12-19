export function DefaultSkeleton() {
  return (
    <div className="max-w-full animate-pulse">
      <h1 className="mb-4 block h-2.5 w-52 rounded-full bg-gray-200 font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit antialiased dark:bg-gray-700"></h1>
      <h3 className="mb-2.5 block h-2 w-72 max-w-[360px] rounded-full bg-gray-200 font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased dark:bg-gray-700"></h3>
      <h3 className="mb-2.5 block h-2 w-64 max-w-[360px] rounded-full bg-gray-200 font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased dark:bg-gray-700"></h3>
      <h3 className="mb-2.5 block h-2 w-72 max-w-[330px] rounded-full bg-gray-200 font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased dark:bg-gray-700"></h3>
      <h3 className="mb-2.5 block h-2 w-60 max-w-[300px] rounded-full bg-gray-200 font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased dark:bg-gray-700"></h3>
      <h3 className="block h-2 w-72 max-w-[360px] rounded-full bg-gray-200 font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased dark:bg-gray-700"></h3>
      <p className="sr-only block font-sans text-sm font-light leading-normal text-inherit antialiased">
        Loading...
      </p>
    </div>
  );
}
