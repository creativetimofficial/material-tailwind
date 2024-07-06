export function DialogSizes() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <button
          data-ripple-light="true"
          data-dialog-target="dialog-xs"
          className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {`Open Dialog XS`}
        </button>
        <div
          data-dialog-backdrop="dialog-xs"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="dialog-xs"
            className="relative m-4 w-1/4 min-w-[25%] max-w-[25%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
              Its a simple dialog.
            </div>
            <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="middle none center mr-1 rounded-lg px-6 py-3 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
        <button
          data-ripple-light="true"
          data-dialog-target="dialog-sm"
          className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {`Open Dialog SM`}
        </button>
        <div
          data-dialog-backdrop="dialog-sm"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="dialog-sm"
            className="relative m-4 w-1/3 min-w-[33.333333%] max-w-[33.333333%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
              Its a simple dialog.
            </div>
            <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="middle none center mr-1 rounded-lg px-6 py-3 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
        <button
          data-ripple-light="true"
          data-dialog-target="dialog-md"
          className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {`Open Dialog MD`}
        </button>
        <div
          data-dialog-backdrop="dialog-md"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="dialog-md"
            className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
              {`Its a simple dialog.`}
            </div>
            <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
              {`The key to more success is to have a lot of pillows. Put it this way, it took me
        twenty five years to get these plants, twenty five years of blood sweat and tears, and
        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
        luv.`}
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="middle none center mr-1 rounded-lg px-6 py-3 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {`Cancel`}
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {`Confirm`}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 flex gap-3">
        <button
          data-ripple-light="true"
          data-dialog-target="dialog-lg"
          className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {`Open Dialog LG`}
        </button>
        <div
          data-dialog-backdrop="dialog-lg"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="dialog-lg"
            className="relative m-4 w-3/5 min-w-[60%] max-w-[60%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
              Its a simple dialog.
            </div>
            <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="middle none center mr-1 rounded-lg px-6 py-3 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
        <button
          data-ripple-light="true"
          data-dialog-target="dialog-xl"
          className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {`Open Dialog XL`}
        </button>
        <div
          data-dialog-backdrop="dialog-xl"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="dialog-xl"
            className="relative m-4 w-3/4 min-w-[75%] max-w-[75%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
              Its a simple dialog.
            </div>
            <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="middle none center mr-1 rounded-lg px-6 py-3 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
        <button
          data-ripple-light="true"
          data-dialog-target="dialog-xxl"
          className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {`Open Dialog XXL`}
        </button>
        <div
          data-dialog-backdrop="dialog-xxl"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="dialog-xxl"
            className="relative h-screen w-screen min-w-[100vw] max-w-[100vw] bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased"
          >
            <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
              {`Its a simple dialog.`}
            </div>
            <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
              {`The key to more success is to have a lot of pillows. Put it this way, it took me
        twenty five years to get these plants, twenty five years of blood sweat and tears, and
        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
        luv.`}
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="middle none center mr-1 rounded-lg px-6 py-3 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {`Cancel`}
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {`Confirm`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
