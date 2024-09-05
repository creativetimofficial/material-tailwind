import { useState } from "react";

export function ChipDismissible() {
  const [visible, setVisible] = useState(true);

  const closeAlert = () => {
    setVisible(false); // Sets the visibility state to false
  };

  const openAlert = () => {
    setVisible(true); // Sets the visibility state to false
  };
  
  return (
    visible ? (
      <div className="relative rounded-md flex bg-slate-800 py-0.5 pl-2.5 pr-8 border border-transparent text-sm text-white transition-all shadow-sm">
        Dismissible 

        <button
          className="flex items-center justify-center transition-all p-1 rounded text-white hover:bg-white/10 active:bg-white/10 absolute top-0.5 right-0.5"
          type="button"
          onClick={closeAlert}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
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
