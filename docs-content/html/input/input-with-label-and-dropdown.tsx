import { useEffect, useRef, useState } from "react";

export function InputWithLabelAndDropdown() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [buttonLabel1, setButtonLabel1] = useState('Dropdown 1');
  const [buttonLabel2, setButtonLabel2] = useState('Dropdown 1');
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const toggleDropdown1 = () => {setIsOpen1(!isOpen1)};
  const toggleDropdown2 = () => {setIsOpen2(!isOpen2)};

  const selectOption1 = (option) => {
    setButtonLabel1(option);
    setIsOpen1(false);
  };

  const selectOption2 = (option) => {
    setButtonLabel2(option);
    setIsOpen2(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsOpen1(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        setIsOpen2(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div ref={dropdownRef1} className="w-full max-w-sm min-w-[200px] mt-4 ">
        <label className="block mb-2 text-sm text-slate-600">
          Your Name
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
                  <li onClick={() => selectOption1('Dropdown 1')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Dropdown 1</li>
                  <li onClick={() => selectOption1('Dropdown 2')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Dropdown 2</li>
                  <li onClick={() => selectOption1('Dropdown 3')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Dropdown 3</li>
                </ul>
              )}
            </div>
          </div>
          <input
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-32 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter your text" />
        </div>  
      </div>

      <div ref={dropdownRef2} className="w-full max-w-sm min-w-[200px] mt-4 relative">
        <label className="block mb-1 text-sm text-slate-600">
          Your Name
        </label>

        <div className="relative mt-2">
          <div className="absolute top-2 right-0 flex items-center pr-3">
          <div className="h-6 border-l border-slate-200 mr-3"></div>
                  <button id="dropdownButton" onClick={toggleDropdown2} className="h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none">
            {buttonLabel2}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div id="dropdownMenu" className={`${!isOpen2 && "hidden"} min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 w-full bg-white border border-slate-200 rounded-md shadow-lg z-10`}>
            {isOpen2 && (
              <ul id="dropdownMenu">
                <li onClick={() => selectOption2('Dropdown 1')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Dropdown 1</li>
                <li onClick={() => selectOption2('Dropdown 2')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Dropdown 2</li>
                <li onClick={() => selectOption2('Dropdown 3')} className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer">Dropdown 3</li>
              </ul>
            )}
          </div>
        </div>
        <input
          type="text"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-32 pl-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your text" />
        </div>
      </div>
    </>
  );
}
