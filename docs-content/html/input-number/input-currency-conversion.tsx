import React, { useState } from 'react';

export function InputCurrencyConversion() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);

  const handleDropdownClick = (dropdown) => {
    if (dropdown === 'from') {
      setFromDropdownOpen(!fromDropdownOpen);
    } else if (dropdown === 'to') {
      setToDropdownOpen(!toDropdownOpen);
    }
  };

  const handleCurrencySelect = (currency, type) => {
    if (type === 'from') {
      setFromCurrency(currency);
      setFromDropdownOpen(false);
    } else if (type === 'to') {
      setToCurrency(currency);
      setToDropdownOpen(false);
    }
  };

  const closeDropdowns = (event) => {
    if (!event.target.closest('.dropdownButton') && !event.target.closest('.dropdownMenu')) {
      setFromDropdownOpen(false);
      setToDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdowns);
    return () => {
      document.removeEventListener('click', closeDropdowns);
    };
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto mt-4">
      <p className="text-slate-500 mb-4">Enter the amount you wish to convert and select the desired currency.</p>
      <div className="flex flex-col items-center justify-between">
        {/* From Input */}
        <div className="w-full max-w-xs min-w-[200px] mt-4">
          <label className="block mb-1 text-sm text-slate-800">
            From
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="1,000"
            />
            <div className="absolute top-2 right-0 flex items-center pr-3">
              <div className="h-6 border-l border-slate-200 mr-2"></div>
              <button
                className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none"
                onClick={() => handleDropdownClick('from')}
              >
                <span className="dropdownSpan">{fromCurrency}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 ml-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {fromDropdownOpen && (
                <div className="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 bg-white border border-slate-200 rounded-md shadow-lg z-10">
                  <ul className="dropdownOptions">
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('USD', 'from')}
                    >
                      USD
                    </li>
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('EUR', 'from')}
                    >
                      EUR
                    </li>
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('CAD', 'from')}
                    >
                      CAD
                    </li>
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('RON', 'from')}
                    >
                      RON
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="flex items-center justify-center mt-6">
          <button className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-slate-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
          </button>
        </div>

        {/* To Input */}
        <div className="w-full max-w-xs min-w-[200px] -mt-2">
          <label className="block mb-1 text-sm text-slate-800">
            To
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="1,000"
            />
            <div className="absolute top-2 right-0 flex items-center pr-3">
              <div className="h-6 border-l border-slate-200 mr-2"></div>
              <button
                className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none"
                onClick={() => handleDropdownClick('to')}
              >
                <span className="dropdownSpan">{toCurrency}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 ml-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {toDropdownOpen && (
                <div className="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 bg-white border border-slate-200 rounded-md shadow-lg z-10">
                  <ul className="dropdownOptions">
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('USD', 'to')}
                    >
                      USD
                    </li>
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('EUR', 'to')}
                    >
                      EUR
                    </li>
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('CAD', 'to')}
                    >
                      CAD
                    </li>
                    <li
                      className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                      onClick={() => handleCurrencySelect('RON', 'to')}
                    >
                      RON
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated Text */}
      <div className="mt-8 text-slate-500 text-sm">
        <p>Rates are updated every hour to provide the most accurate conversions.</p>
        <p className="mt-1"><b>Last updated</b>: July 30, 2024, 3:00 PM</p>
      </div>
    </div>
  );
};

