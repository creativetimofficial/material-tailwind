import { useState } from "react";

export function AlertCustomCloseIcon() {
  const [visible, setVisible] = useState(true);

  const closeAlert = () => {
    setVisible(false); // Sets the visibility state to false
  };

  const openAlert = () => {
    setVisible(true); // Sets the visibility state to false
  };

  return (
    visible ? (
      <div
        role="alert"
        className="mt-3 relative flex w-full p-3 text-sm text-white bg-slate-800 rounded-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>

        Sorry, something went wrong please try again.
        <button onClick={closeAlert} className="flex items-center justify-center transition-all px-2 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5" type="button">
          Close
        </button>
      </div>
    ) : (
      <button onClick={openAlert} className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
        Reset
      </button>
    )
  );
}
