import React, { useState } from 'react';

export function InputPhoneValidationText() {
  const [phoneNumber1, setPhoneNumber1] = useState('+1 123-456-7890');
  const [phoneNumber2, setPhoneNumber2] = useState('+1 123-456-7890');

  const handleInputChange1 = (e) => {
    const value = e.target.value;
    // Replace any non-numeric characters except +, -, and space
    const formattedValue = value.replace(/[^+\d\s-]/g, '');
    setPhoneNumber1(formattedValue);
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    // Replace any non-numeric characters except +, -, and space
    const formattedValue = value.replace(/[^+\d\s-]/g, '');
    setPhoneNumber2(formattedValue);
  };

  return (
    <>
      <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-1 text-sm text-slate-600">
          Contact Number
        </label>
        <input
          required
          className="w-full bg-transparent placeholder:text-green-400 text-green-500 text-sm border border-green-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-300 shadow-sm focus:shadow"
          placeholder="e.g., +1 123-456-7890"
          value={phoneNumber1}
          onChange={handleInputChange1}
          maxLength={16}
          title="Phone number format: +1 123-456-7890"
        />

        <p className="flex items-center mt-2 text-xs text-green-400">
          Great! Your phone number is valid.
        </p>
      </div>
      
      <div className="w-full max-w-sm min-w-[200px] mt-5">
        <label className="block mb-1 text-sm text-slate-600">
          Contact Number
        </label>
        <input
          required
          className="w-full bg-transparent placeholder:text-red-400 text-red-500 text-sm border border-red-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-red-500 hover:border-red-300 shadow-sm focus:shadow"
          placeholder="e.g., +1 123-456-7890"
          value={phoneNumber2}
          onChange={handleInputChange2}
          maxLength={16}
          title="Phone number format: +1 123-456-7890"
        />

        <p className="flex items-center mt-2 text-xs text-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <path fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"></path>
          </svg>
          Please match the requested format. e.g., +1 123-456-7890
        </p>
      </div>
    </>
  );
};
