import { useEffect, useRef, useState } from "react";

export function InputSearchWithDropdown() {  
  const [isOpen1, setIsOpen1] = useState(false);
  const [buttonLabel1, setButtonLabel1] = useState('Themes');
  const dropdownRef1 = useRef(null);

  const toggleDropdown1 = () => {setIsOpen1(!isOpen1)};

  const selectOption1 = (option) => {
    setButtonLabel1(option);
    setIsOpen1(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsOpen1(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div ref={dropdownRef1} className="w-full max-w-sm min-w-[200px]">
        <div className="relative mt-2">
            <div className="absolute top-2 left-0 flex items-center pl-3">
            <button id="dropdownButton" onClick={toggleDropdown1} className="h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none">
              {buttonLabel1}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="h-6 border-l border-slate-200 ml-3"></div>
            <div id="dropdownMenu" className={`${!isOpen1 && "hidden"} min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 w-full bg-white border border-slate-200 rounded shadow-lg z-10`}>
              {isOpen1 && (
                <ul id="dropdownMenu">
                  <li onClick={() => selectOption1('Themes')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Themes</li>
                  <li onClick={() => selectOption1('Plugins')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Plugins</li>
                  <li onClick={() => selectOption1('Snippets')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Snippets</li>
                </ul>
              )}
            </div>
          </div>
          <input
            type="text"
            className="w-full h-10 pl-28 pr-28 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Widgets..." />

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
    </>
  );
}
