import { useState } from "react";

 

export function InputPhoneWithAuthenticationForm() {  
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    // Replace any non-numeric characters except +, -, and space
    const sanitizedValue = e.target.value.replace(/[^+\d\s-]/g, '');
    setInputValue(sanitizedValue);
  };

  return (
    <div className="w-full max-w-sm min-w-[200px] mx-auto">
      <label className="block mb-1 text-sm text-slate-600">
        Phone Number
      </label>

      <input 
        type="tel" 
        placeholder="(+33) 123-456-7890"
        pattern="\(\+\d{2}\) \d{3}-\d{3}-\d{4}" 
        title="Phone number format should be like (+33) 123-456-7890"
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        maxLength={16}
        required
        value={inputValue}
        onChange={handleInputChange}
      />

      <button className="w-full rounded-md bg-slate-800 py-2 px-4 my-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        Continue
      </button>

      <div className="flex items-center justify-center mb-4">
        <hr className="w-full border-slate-200" />
        <span className="px-2 text-sm text-slate-600">Or</span>
        <hr className="w-full border-slate-200" />
      </div>

      <button className="w-full rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-5 w-5 mr-2"
        />
        Sign In With Google
      </button>
    </div>
  );
}
