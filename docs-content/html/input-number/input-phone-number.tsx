import { useEffect, useRef, useState } from "react";

export function InputPhoneNumber() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [buttonLabel1, setButtonLabel1] = useState('+33');
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

  // Handle input to ensure only numbers
  const handleInputChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 12); // Allow only digits, max length 12
  };

  return (
    <>
      <div ref={dropdownRef1} className="w-full max-w-sm min-w-[200px] mt-4 ">
        <label className="block mb-1 text-sm text-slate-800">
          Enter Phone Number
        </label>
        <div className="relative mt-2">
            <div className="absolute top-2 left-0 flex items-center pl-3">
            <button id="dropdownButton" onClick={toggleDropdown1} className="h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none">
              {buttonLabel1}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="h-6 border-l border-slate-200 ml-2"></div>
            <div id="dropdownMenu" className={`${!isOpen1 && "hidden"} min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 w-full bg-white border border-slate-200 rounded-md shadow-lg z-10`}>
              {isOpen1 && (
                <ul id="dropdownMenu">
                  <li onClick={() => selectOption1('+33')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">France (+33)</li>
                  <li onClick={() => selectOption1('+49')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Germany (+49)</li>
                  <li onClick={() => selectOption1('+34')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Spain (+34)</li>
                  <li onClick={() => selectOption1('+1')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">USA (+1)</li>
                </ul>
              )}
            </div>
          </div>
          <input
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength={12}
            onInput={handleInputChange}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="324-456-2323" />
        </div>  
      </div>
    </>
  );
}
