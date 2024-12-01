export function ProfileInfoPopover() {
  return (
    <>
      <button
        data-ripple-dark="true"
        data-popover-target="profile-info-popover"
        className="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85]  focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Profile Info
      </button>
      <div
        data-popover="profile-info-popover"
        className="absolute max-w-[24rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
      >
        <div className="mb-2 flex items-center justify-between gap-4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
          />
          <button
            className="select-none rounded-lg bg-gray-900 px-3 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Follow
          </button>
        </div>
        <h6 className="mb-2 flex items-center gap-2 font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          <span>Tania Andrew</span> •{" "}
          <a className="text-sm text-blue-gray-700" href="#">
            @andrew
          </a>
        </h6>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
          A skilled developer with a passion for creating innovative solutions
          and a proven track record in full-stack development. Adept at working
          with a variety of technologies to build robust applications.
        </p>
        <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
          <p className="flex items-center gap-1 font-sans text-xs font-normal text-gray-700 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-3.5 w-3.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              ></path>
            </svg>
            United Kingdom
          </p>
          <a
            href="#"
            className="flex items-center gap-1 font-sans text-xs font-normal text-gray-700 antialiased"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-3.5 w-3.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              ></path>
            </svg>
            Material Tailwind
          </a>
        </div>
      </div>
    </>
  );
}
