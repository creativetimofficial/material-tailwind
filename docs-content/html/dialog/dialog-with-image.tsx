export function DialogWithImage() {
  return (
    <>
      <div
        className="relative flex h-64 w-96 cursor-pointer flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-opacity hover:opacity-90"
        data-dialog-target="image-dialog"
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
        />
      </div>
      <div
        data-dialog-backdrop="image-dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          className="relative m-4 w-3/4 min-w-[75%] max-w-[75%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          role="dialog"
          data-dialog="image-dialog"
        >
          <div className="flex shrink-0 items-center justify-between p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            <div className="flex items-center gap-3">
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div className="-mt-px flex flex-col">
                <p className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased">
                  Tania Andrew
                </p>
                <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                  @canwu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                  </svg>
                </span>
              </button>
              <button
                className="select-none rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Free Download
              </button>
            </div>
          </div>
          <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-0 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            <img
              alt="nature"
              className="h-[48rem] w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
            />
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-between p-4 text-blue-gray-500">
            <div className="flex items-center gap-16">
              <div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                  Views
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  44,082,044
                </p>
              </div>
              <div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                  Downloads
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  553,031
                </p>
              </div>
            </div>
            <button
              className="flex select-none items-center gap-3 rounded-lg border border-blue-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
