export function TransactionsTable() {
  return (
    <div className="relative flex h-full w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-none bg-white bg-clip-border text-gray-700">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Recent Transactions
            </h5>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              These are details about the last transactions
            </p>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
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
            <button
              className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                ></path>
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-scroll p-6 px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Transaction
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Amount
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Date
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Status
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Account
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                    alt="Spotify"
                    className="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                  />
                  <p className="block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased">
                    Spotify
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  $2,500
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  Wed 3:00pm
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-green-900">
                    <span className="">paid</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                      alt="visa"
                      className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal capitalize leading-normal text-blue-gray-900 antialiased">
                      visa 1234
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      06/2026
                    </p>
                  </div>
                </div>
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
                    src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg"
                    alt="Amazon"
                    className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                  />
                  <p className="block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased">
                    Amazon
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  $5,000
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  Wed 1:00pm
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-green-900">
                    <span className="">paid</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                      alt="master-card"
                      className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal capitalize leading-normal text-blue-gray-900 antialiased">
                      master card 1234
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      06/2026
                    </p>
                  </div>
                </div>
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
                    src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg"
                    alt="Pinterest"
                    className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                  />
                  <p className="block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased">
                    Pinterest
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  $3,400
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  Mon 7:40pm
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-amber-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-amber-900">
                    <span className="">pending</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                      alt="master-card"
                      className="relative inline-block h-full w-full !rounded-none object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal capitalize leading-normal text-blue-gray-900 antialiased">
                      master card 1234
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      06/2026
                    </p>
                  </div>
                </div>
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
                    src="https://docs.material-tailwind.com/img/logos/logo-google.svg"
                    alt="Google"
                    className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                  />
                  <p className="block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased">
                    Google
                  </p>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  $1,000
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  Wed 5:00pm
                </p>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-green-900">
                    <span className="">paid</span>
                  </div>
                </div>
              </td>
              <td className="border-b border-blue-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                      alt="visa"
                      className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal capitalize leading-normal text-blue-gray-900 antialiased">
                      visa 1234
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      06/2026
                    </p>
                  </div>
                </div>
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
                    src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg"
                    alt="netflix"
                    className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                  />
                  <p className="block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased">
                    netflix
                  </p>
                </div>
              </td>
              <td className="p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  $14,000
                </p>
              </td>
              <td className="p-4">
                <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                  Wed 3:30am
                </p>
              </td>
              <td className="p-4">
                <div className="w-max">
                  <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-red-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-red-900">
                    <span className="">cancelled</span>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                      alt="visa"
                      className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm font-normal capitalize leading-normal text-blue-gray-900 antialiased">
                      visa 1234
                    </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased opacity-70">
                      06/2026
                    </p>
                  </div>
                </div>
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
        <button
          className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              1
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              2
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              3
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              ...
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              8
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              9
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              10
            </span>
          </button>
        </div>
        <button
          className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
