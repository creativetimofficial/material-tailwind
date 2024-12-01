import { useState } from "react";

export function AlertDismissible() {
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
        A dismissible alert with closing button.
        <button
          className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5"
          type="button"
          onClick={closeAlert}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    ) : (
      <button onClick={openAlert} className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
        Reset
      </button>
    )
  );
}
