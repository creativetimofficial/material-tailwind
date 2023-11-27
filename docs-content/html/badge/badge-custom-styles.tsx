export function BadgeCustomStyles() {
  return (
    <div className="relative inline-flex">
      <button
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Notifications
      </button>
      <span className="absolute top-[4%] right-[2%] grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full border-2 border-white bg-red-500 bg-gradient-to-tr from-green-400 to-green-600 py-1 px-1 text-xs font-medium leading-none text-white shadow-lg shadow-black/20 content-['']">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          ></path>
        </svg>
      </span>
    </div>
  );
}
