export function OrderDetailsDialog() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-dialog-target="order-details-dialog"
        className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Order Details Dialog
      </button>
      <div
        data-dialog-backdrop="order-details-dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="order-details-dialog"
          className="relative m-4 mx-auto flex w-full max-w-[33.2rem] flex-col rounded-lg bg-white p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div className="relative m-0 block shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Order Details
            </h4>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
              Please select your preferred delivery method for your order.
            </p>
            <button
              className="!absolute right-3.5 top-3.5 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
              data-dialog-close="true"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-4 w-4 stroke-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="relative mx-2 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            <ul className="flex w-full flex-col">
              <li className="relative flex flex-col gap-2">
                <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200">
                  <span className="h-full w-0.5 bg-blue-gray-100"></span>
                </span>
                <div className="flex items-center gap-4">
                  <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-4 w-4"
                    >
                      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"></path>
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900 antialiased">
                    $2,400, Design Changes
                  </p>
                </div>
                <div className="-mt-2 flex gap-4 pb-8">
                  <span className="pointer-events-none invisible h-full flex-shrink-0"></span>
                  <div>
                    <p className="block pl-8 font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                      22 Dec 6:20 PM
                    </p>
                  </div>
                </div>
              </li>
              <li className="relative flex flex-col gap-2">
                <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200">
                  <span className="h-full w-0.5 bg-blue-gray-100"></span>
                </span>
                <div className="flex items-center gap-4">
                  <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-4 w-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900 antialiased">
                    New order #1832412
                  </p>
                </div>
                <div className="-mt-2 flex gap-4 pb-8">
                  <span className="pointer-events-none invisible h-full flex-shrink-0"></span>
                  <div>
                    <p className="block pl-8 font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                      21 Dec 8:20 PM
                    </p>
                  </div>
                </div>
              </li>
              <li className="relative flex flex-col gap-2">
                <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200">
                  <span className="h-full w-0.5 bg-blue-gray-100"></span>
                </span>
                <div className="flex items-center gap-4">
                  <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-4 w-4"
                    >
                      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900 antialiased">
                    Payment Completed
                  </p>
                </div>
                <div className="-mt-2 flex gap-4">
                  <span className="pointer-events-none invisible h-full flex-shrink-0"></span>
                  <div>
                    <p className="block pl-8 font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                      17 Dec 4:20 PM
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end text-blue-gray-500">
            <button
              className="mr-auto select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              data-dialog-close="true"
            >
              more details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
