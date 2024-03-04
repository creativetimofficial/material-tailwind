"use client";

import React, { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="rangeSlider" className="font-bold">
        Range:
      </label>
      <input
        type="range"
        id="rangeSlider"
        name="rangeSlider"
        min="0"
        max="100"
        step="10"
        value={value}
        onChange={handleChange}
        className="h-2 w-72 cursor-pointer appearance-none rounded-md bg-gray-200 outline-none"
      />
      <output htmlFor="rangeSlider" className="text-sm">
        {value}
      </output>
    </div>
  );
};

export default RangeSlider;
