export function InputSearchWithButton() {  
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          className="w-full pl-3 h-10 pr-28 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          placeholder="UI Kits, Dashboards..." 
        />
        <button
          className="absolute py-1.5 text-white text-sm right-1 top-1 my-auto px-3 flex items-center bg-slate-800 rounded hover:bg-slate-700"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
          </svg>

            Search
        </button> 
      </div>
    </div>
  );
}
