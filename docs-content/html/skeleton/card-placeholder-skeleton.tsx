export function CardPlacehoderSkeleton() {
  return (
    <div className="relative mt-6 flex w-96 animate-pulse flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-200 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 dark:bg-gray-700">
        <svg
          className="h-10 w-10 text-gray-300 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
        </svg>
      </div>
      <div className="p-6">
        <h5 className="mb-2 block h-3 w-56 rounded-full bg-gray-200 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased dark:bg-gray-700"></h5>
        <div className="flex flex-col">
          <p className="mb-2 block h-2 w-72 rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
          <p className="mb-2 block h-2 w-72 rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
          <p className="mb-2 block h-2 w-60 rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
          <p className="mb-2 block h-2 w-40 rounded-full bg-gray-200 font-sans text-base font-light leading-relaxed text-inherit antialiased dark:bg-gray-700"></p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          className="h-8 w-20 select-none rounded-lg bg-gray-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        ></button>
      </div>
    </div>
  );
}
