"use client"

import React from "react";
import { Chip } from "@material-tailwind/react";

const InfoBadge: React.FC = () => {
  return (
    <a href="#required-script">
      <Chip variant="outline" className="bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800 mb-5 shadow-none cursor-pointer transition-all duration-300">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </div>
        <Chip.Label className="flex items-center">
          Requires Material Tailwind JS
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Chip.Label>
      </Chip>
    </a>
  );
};

export default InfoBadge;
