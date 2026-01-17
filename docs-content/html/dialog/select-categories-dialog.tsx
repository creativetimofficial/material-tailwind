export function SelectCategoriesDialog() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-dialog-target="select-categories-dialog"
        className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Select Categories Dialog
      </button>
      <div
        data-dialog-backdrop="select-categories-dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="select-categories-dialog"
          className="relative m-4 mx-auto flex w-full max-w-[33.2rem] flex-col rounded-lg bg-white p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div className="relative m-0 block shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Select Categories
            </h4>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
              Categories help you organize your contacts based on their
              interests and interactions.
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
          <div className="relative space-y-4 p-4 px-2 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            <div className="inline-flex items-center">
              <label
                className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
                htmlFor="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="ripple-on"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor=":r6:"
              >
                <div>
                  <p className="block font-sans text-base font-medium text-blue-gray-900 antialiased">
                    Updates
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                    Receive the latest news and updates.
                  </p>
                </div>
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
                htmlFor="ripple-on2"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="ripple-on2"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor=":r7:"
              >
                <div>
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Leads
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                    Potential clients and interested parties.
                  </p>
                </div>
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
                htmlFor="ripple-on3"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="ripple-on3"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor=":r8:"
              >
                <div>
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Webinars
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                    Interested in attending webinars and online events.
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
            <button
              className="ml-auto select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              data-dialog-close="true"
            >
              save categories
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
