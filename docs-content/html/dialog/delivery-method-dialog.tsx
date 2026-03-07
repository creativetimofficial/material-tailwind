export function DeliveryMethodDialog() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-dialog-target="delivery-method-dialog"
        className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Delivery Method Dialog
      </button>
      <div
        data-dialog-backdrop="delivery-method-dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="delivery-method-dialog"
          className="relative m-4 mx-auto flex w-full max-w-[33.2rem] flex-col rounded-lg bg-white p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div className="relative m-0 block shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Delivery Method
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
          <div className="relative p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            <div className="space-y-4">
              <div>
                <input
                  type="radio"
                  id="standard"
                  name="hosting"
                  className="peer hidden"
                  value="standard"
                />
                <label
                  htmlFor="standard"
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-900 ring-1 ring-transparent peer-checked:border-gray-900 peer-checked:ring-gray-900"
                >
                  <div className="block">
                    <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
                      Standard Delivery
                    </p>
                    <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                      5-7 business days.{" "}
                      <strong className="text-gray-900">Free</strong>
                    </p>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="express"
                  name="hosting"
                  className="peer hidden"
                  value="express"
                  defaultChecked
                />
                <label
                  htmlFor="express"
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-900 ring-1 ring-transparent peer-checked:border-gray-900 peer-checked:ring-gray-900"
                >
                  <div className="block">
                    <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
                      Express Delivery
                    </p>
                    <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                      2-3 business days.{" "}
                      <strong className="text-gray-900">$10.00</strong>
                    </p>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="store"
                  name="hosting"
                  className="peer hidden"
                  value="store"
                />
                <label
                  htmlFor="store"
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-900 ring-1 ring-transparent peer-checked:border-gray-900 peer-checked:ring-gray-900"
                >
                  <div className="block">
                    <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
                      Pickup In-Store
                    </p>
                    <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                      Available for pickup within 24 hours.{" "}
                      <strong className="text-gray-900">Free</strong>
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
            <button
              className="ml-auto select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              data-dialog-close="true"
            >
              confirm delivery method
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
