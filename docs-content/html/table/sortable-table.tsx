export function SortableTable() {
  return (
    <div className="relative flex h-full w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-none bg-white bg-clip-border text-gray-700">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Members list
            </h5>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              See information about all members
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              view all
            </button>
            <button
              className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                stroke-width="2"
                className="h-4 w-4"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
              Add member
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="block w-full overflow-hidden md:w-max">
            <nav>
              <ul
                role="tablist"
                className="relative flex flex-row rounded-lg bg-blue-gray-50 bg-opacity-60 p-1"
              >
                <li
                  role="tab"
                  className="relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased"
                  data-value="all"
                >
                  <div className="z-20 text-inherit">
                    &nbsp;&nbsp;All&nbsp;&nbsp;
                  </div>
                  <div className="absolute inset-0 z-10 h-full rounded-md bg-white shadow"></div>
                </li>
                <li
                  role="tab"
                  className="relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased"
                  data-value="monitored"
                >
                  <div className="z-20 text-inherit">
                    &nbsp;&nbsp;Monitored&nbsp;&nbsp;
                  </div>
                </li>
                <li
                  role="tab"
                  className="relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased"
                  data-value="unmonitored"
                >
                  <div className="z-20 text-inherit">
                    &nbsp;&nbsp;Unmonitored&nbsp;&nbsp;
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full md:w-72">
            <div className="relative h-10 w-full min-w-[200px]">
              <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </div>
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-scroll p-6 px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Member
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Function
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Status
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Employed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                    alt="John Michael"
                    className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                      John Michael
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      john@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                    Manager
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                    Organization
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-green-900">
                    <span className="">online</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  23/04/18
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <button
                  className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                    alt="Alexa Liras"
                    className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                      Alexa Liras
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      alexa@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                    Programator
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                    Developer
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-blue-gray-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-blue-gray-900">
                    <span className="">offline</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  23/04/18
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <button
                  className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
                    alt="Laurent Perrier"
                    className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                      Laurent Perrier
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      laurent@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                    Executive
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                    Projects
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-blue-gray-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-blue-gray-900">
                    <span className="">offline</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  19/09/17
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <button
                  className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"
                    alt="Michael Levi"
                    className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                      Michael Levi
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      michael@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                    Programator
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                    Developer
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-green-900">
                    <span className="">online</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  24/12/08
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <button
                  className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg"
                    alt="Richard Gran"
                    className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                      Richard Gran
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      richard@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                    Manager
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                    Executive
                  </p>
                </div>
              </td>
              <td className="p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-blue-gray-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-blue-gray-900">
                    <span className="">offline</span>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  04/10/21
                </p>
              </td>
              <td className="p-4">
                <button
                  className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
          Page 1 of 10
        </p>
        <div className="flex gap-2">
          <button
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Previous
          </button>
          <button
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
