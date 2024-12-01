import { useState } from "react";

export function InputPhoneWithIcon() {
  const [phoneNumber, setPhoneNumber] = useState('+1 123-456-7890');

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
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-600">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
          </svg>
        </span>
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="e.g., +1 123-456-7890"
          pattern="^\+\d{1,3}\s\d{1,3}-\d{3}-\d{4}$"
          value={phoneNumber}
          onChange={handleInputChange}
          title="Phone number must be in the format: +1 123-456-7890"
          maxLength={16}
          required
        />
      </div>
      <p className="mt-2 text-xs text-slate-400">
        Include your country code for international numbers.
      </p>
    </div>
  );
}
