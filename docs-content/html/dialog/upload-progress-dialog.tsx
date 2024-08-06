export function UploadProgressDialog() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-dialog-target="upload-progress-dialog"
        className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Upload Progress Dialog
      </button>
      <div
        data-dialog-backdrop="upload-progress-dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="upload-progress-dialog"
          className="relative m-4 w-full min-w-[33.3%] rounded-lg bg-white p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl md:max-w-[39.8rem]"
        >
          <div className="relative m-0 block shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Upload Progress
            </h4>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
              Please wait while we process your request. You can track the
              upload progress below.
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
          <div className="relative p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            <div className="w-full">
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="block font-sans text-sm font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  Uploading...
                </p>
                <p className="block font-sans text-sm font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  50%
                </p>
              </div>
              <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white"></div>
              </div>
            </div>
            <div className="mt-6 flex gap-16">
              <div>
                <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                  File Name
                </p>
                <p className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900 antialiased">
                  project_proposal.pdf
                </p>
              </div>
              <div>
                <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                  File Size
                </p>
                <p className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900 antialiased">
                  10 MB
                </p>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 p-4 text-blue-gray-500">
            <p className="flex gap-2 font-sans text-sm font-normal leading-normal text-gray-600 antialiased md:items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-gray-900"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Closing this window may interrupt the upload process.
            </p>
            <button
              className="w-full select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:max-w-fit"
              type="button"
              data-ripple-light="true"
              data-dialog-close="true"
            >
              cancel upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
