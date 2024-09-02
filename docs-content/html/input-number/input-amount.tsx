import { useState } from 'react';

export function InputAmount() {
  const [value, setValue] = useState(0); // Initialize the state with a default value of 5

  // Function to handle the increase of the value
  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  // Function to handle the decrease of the value
  const handleDecrease = () => {
    setValue((prevValue) => Math.max(0, prevValue - 1)); // Prevent negative values
  };

  return (
    <>
      <div className="w-[250px] max-w-sm relative mt-4">
        <label className="block mb-1 text-sm text-slate-600">Select Amount</label>
        <div className="relative">
          <button
            onClick={handleDecrease}
            className="absolute right-9 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          </button>
          <input
            type="number"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="5"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))} // Update state when input changes
          />
          <button
            onClick={handleIncrease}
            className="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </button>
        </div>
        <p className="flex items-center mt-2 text-xs text-slate-400">
          Adjust the number using the + and - controls.
        </p>
      </div>
    </>
  );
}
