import React, { useRef } from 'react';

export function InputOtp() {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only digits
    if (value) {
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus();
      }
    }
    e.target.value = value; // Set the value in the current input
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-sm text-slate-600">Enter the 6-digit OTP sent to <span className="font-bold">+1 123-456-7890</span></p>
      <div className="flex items-center space-x-2">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              <input
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength={1}
                className="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
              />
              {index === 2 && <span className="text-2xl mx-2 text-slate-700">-</span>}
            </React.Fragment>
          ))}
      </div>
      <p className="text-xs text-slate-400 mt-4">
        Did not receive the code? <a href="javascript:void(0)" className="font-bold cursor-pointer">Resend</a>
      </p>
    </div>
  );
}

export default InputOtp;
