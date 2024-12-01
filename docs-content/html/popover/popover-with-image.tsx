export function PopoverWithImage() {
  return (
    <>
      <button
        data-ripple-dark="true"
        data-popover-target="popover-with-image"
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        More Info
      </button>

      <div
        className="absolute z-[999] grid w-[28rem] grid-cols-2 overflow-hidden whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-0 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
        aria-labelledby=":r3a:-label"
        aria-describedby="popover-with-image"
        id="popover-with-image"
        data-popover="popover-with-image"
        role="dialog"
      >
        <div className="p-4">
          <p className="mb-2 block font-sans text-lg font-bold text-blue-gray-900 antialiased">
            Material Tailwind
          </p>
          <p className="mb-14 block font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
            Material Tailwind is an easy to use components library for Tailwind
            CSS and Material Design. It features multiple React and HTML
            components, all written with Tailwind CSS classNamees and Material
            Design guidelines.
          </p>
          <a href="#" className="-ml-3 inline-block">
            <button
              className="flex select-none items-center gap-x-2 rounded-lg px-4 py-2 text-center align-middle font-sans text-xs font-bold capitalize text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read More
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </a>
        </div>
        <div className="min-h-full !w-full p-3">
          <img
            src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="image"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
