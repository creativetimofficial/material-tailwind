export function DialogWithImage() {
  return (
    <>
      <div
        className="relative flex h-64 w-96 cursor-pointer flex-col overflow-hidden rounded-lg bg-white bg-clip-border shadow-sm transition-opacity hover:opacity-90"
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
          className="relative m-4 w-2/4 rounded-lg bg-white shadow-sm"
          role="dialog"
          data-dialog="image-dialog"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div className="-mt-px flex flex-col">
                <p className="text-sm text-slate-800 font-medium">
                  Tania Andrew
                </p>
                <p className="text-xs font-normal text-slate-500">
                  @andrew
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-md border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </button>
              <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Free Download
              </button>
            </div>
          </div>
          <div className="relative border-b border-t border-b-blue-gray-100 border-t-blue-gray-100 p-0 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            <img
              alt="nature"
              className="h-[30rem] w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
            />
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-between p-4 text-blue-gray-500">
            <div className="flex items-center gap-16">
              <div>
                <p className="text-slate-500 text-sm">
                  Views
                </p>
                <p className="text-slate-800 font-medium">
                  44,082,044
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">
                  Downloads
                </p>
                <p className="text-slate-800 font-medium">
                  553,031
                </p>
              </div>
            </div>
            <button className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4 mr-1.5"
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
