export function StepperWithContent() {
  return (
    <div className="w-full px-24 py-4">
      <div className="relative flex w-full items-center justify-between">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500"></div>
        <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-gray-900 font-bold text-white transition-all duration-300">
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            ></path>
          </svg>
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-gray-700 antialiased">
              Step 1
            </h6>
            <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Details about yout account.
            </p>
          </div>
        </div>
        <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-gray-900 font-bold text-white transition-all duration-300">
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
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              Step 2
            </h6>
            <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              Details about yout account.
            </p>
          </div>
        </div>
        <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-gray-300 font-bold text-gray-900 transition-all duration-300">
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
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            ></path>
          </svg>
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-gray-700 antialiased">
              Step 3
            </h6>
            <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Details about yout account.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-between">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Prev
        </button>
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
