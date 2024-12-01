import { useState } from "react";

export function InputSimplePhone() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Replace any non-numeric characters except +, -, and space
    const formattedValue = value.replace(/[^+\d\s-]/g, '');
    setPhoneNumber(formattedValue);
  };
  
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <label className="block mb-1 text-sm text-slate-600">
          Contact Number
      </label>
      <input
        onChange={handleInputChange}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="e.g., +1 123-456-7890"
        pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
        maxLength={16}
        value={phoneNumber}
      />

      <p className="flex items-center mt-2 text-xs text-slate-400">
        Include your country code for international numbers.
      </p>    
    </div>
  );
}
