"use client";

import React from "react";

import { Input, Typography, Button } from "@material-tailwind/react";
 
export default function InputOneTimePassword() {
  const inputRefs = React.useRef([]) as React.MutableRefObject<HTMLInputElement[]>;
  const [otp, setOtp] = React.useState(Array(6).fill(""));
 
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, "");
    setOtp(newOtp);
 
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
 
  function handleBackspace(event, index) {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      console.log(inputRefs.current[index - 1]);
      inputRefs.current[index - 1].focus();
    }
  }
 
  return (
    <div className="w-full max-w-sm">
      <Typography
        variant="small"
        color="primary"
        className="flex items-center justify-center gap-1 text-center font-medium"
      >
        Enter the 6-digit OTP sent to{" "}
        <span className="font-bold">+1 123-456-7890</span>
      </Typography>
 
      <div className="my-4 flex items-center justify-center gap-2">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            <Input
              type="text"
              maxLength={1}
              className="w-10 appearance-none h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleBackspace(e, index)}
              inputRef={(el) => (inputRefs.current[index] = el)}
            />
            {index === 2 && <span className="text-2xl mx-2 text-slate-700">-</span>}
          </React.Fragment>
        ))}
      </div>
 
      <Typography
        variant="small"
        className="text-center font-normal text-primary-500"
      >
        Did not receive the code? <span className="font-bold">Resend</span>
      </Typography>
    </div>
  );
}