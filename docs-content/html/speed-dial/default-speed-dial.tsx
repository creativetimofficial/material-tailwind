export function DefaultSpeedDial() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <div className="group">
          <button
            className="relative h-12 max-h-[48px] w-12 max-w-[48px] select-none overflow-hidden rounded-full bg-gray-900 text-center align-middle font-sans text-sm font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50  disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 transition-transform group-hover:rotate-45"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </span>
          </button>
          <div className="absolute top-[-173px] left-[-4px] hidden w-max  flex-col items-center gap-1 p-0.5 group-hover:flex ">
            <div data-projection-id="1">
              <button className="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border border-blue-gray-50 bg-white p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
              </button>
            </div>
            <div data-projection-id="2">
              <button className="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border border-blue-gray-50 bg-white p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  ></path>
                </svg>
              </button>
            </div>
            <div data-projection-id="3">
              <button className="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border border-blue-gray-50 bg-white p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
