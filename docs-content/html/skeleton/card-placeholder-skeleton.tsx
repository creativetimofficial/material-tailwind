export function CardPlacehoderSkeleton() {
  return (
    <div className="relative mt-6 flex w-96 animate-pulse flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 grid h-56 place-items-center overflow-hidden rounded-xl bg-gray-300 bg-clip-border text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-12 w-12 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          ></path>
        </svg>
      </div>
      <div className="p-6">
        <div className="mb-4 block h-3 w-56 rounded-full bg-gray-300 font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit antialiased">
          &nbsp;
        </div>
        <div className="mb-2 block h-2 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased">
          &nbsp;
        </div>
        <div className="mb-2 block h-2 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased">
          &nbsp;
        </div>
        <div className="mb-2 block h-2 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased">
          &nbsp;
        </div>
        <div className="mb-2 block h-2 w-full rounded-full bg-gray-300 font-sans text-base font-light leading-relaxed text-inherit antialiased">
          &nbsp;
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          className="h-8 w-20 select-none rounded-lg bg-gray-300 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-none shadow-gray-900/10 transition-all hover:shadow-none hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          &nbsp;
        </button>
      </div>
    </div>
  );
}
