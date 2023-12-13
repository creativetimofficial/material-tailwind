export function Web3Dialog() {
  return (
    <>
      <button
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
        data-dialog-target="web-3-dialog"
      >
        Connect Wallet
      </button>
      <div
        data-dialog-backdrop="web-3-dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          className="relative m-4 w-1/4 min-w-[25%] max-w-[25%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          data-dialog="web-3-dialog"
        >
          <div className="flex shrink-0 items-center justify-between p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            <div>
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Connect a Wallet
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                Choose which card you want to connect
              </p>
            </div>
            <button
              data-ripple-dark="true"
              data-dialog-close="true"
              className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="relative overflow-y-scroll p-4 !px-5 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            <div className="mb-6">
              <p className="block py-3 font-sans text-base font-semibold uppercase leading-relaxed text-blue-gray-900 antialiased opacity-70">
                Popular
              </p>
              <ul className="mt-3 -ml-2 flex flex-col gap-1">
                <button
                  role="menuitem"
                  className="mb-4 flex w-full cursor-pointer select-none items-center justify-center gap-3 rounded-md px-3 !py-4 pt-[9px] pb-2 text-start leading-tight shadow-md outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <img
                    src="https://docs.material-tailwind.com/icons/metamask.svg"
                    alt="metamast"
                    className="h-6 w-6"
                  />
                  <h6 className="block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                    Connect with MetaMask
                  </h6>
                </button>
                <button
                  role="menuitem"
                  className="mb-1 flex w-full cursor-pointer select-none items-center justify-center gap-3 rounded-md px-3 !py-4 pt-[9px] pb-2 text-start leading-tight shadow-md outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <img
                    src="https://docs.material-tailwind.com/icons/coinbase.svg"
                    alt="metamast"
                    className="h-6 w-6 rounded-md"
                  />
                  <h6 className="block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                    Connect with Coinbase
                  </h6>
                </button>
              </ul>
            </div>
            <div>
              <p className="block py-4 font-sans text-base font-semibold uppercase leading-relaxed text-blue-gray-900 antialiased opacity-70">
                Other
              </p>
              <ul className="mt-4 -ml-2.5 flex flex-col gap-1">
                <button
                  role="menuitem"
                  className="mb-4 flex w-full cursor-pointer select-none items-center justify-center gap-3 rounded-md px-3 !py-4 pt-[9px] pb-2 text-start leading-tight shadow-md outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <img
                    src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
                    alt="metamast"
                    className="h-7 w-7 rounded-md border border-blue-gray-50"
                  />
                  <h6 className="uppsecase block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                    Connect with Trust Wallet
                  </h6>
                </button>
              </ul>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 p-4 text-blue-gray-500">
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              New to Ethereum wallets?
            </p>
            <button
              className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
