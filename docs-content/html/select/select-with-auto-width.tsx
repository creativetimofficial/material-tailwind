import { useEffect, useRef, useState } from "react";

export function SelectWithAutoWidth() {
  const [width, setWidth] = useState('auto');
  const selectRef = useRef(null);

  const resizeSelect = () => {
    const selectElement = selectRef.current;
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    const tempDiv = document.createElement('div');

    // Temporary div to calculate the width of the selected text
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.whiteSpace = 'nowrap';
    tempDiv.style.fontSize = window.getComputedStyle(selectElement).fontSize;
    tempDiv.innerText = selectedText;

    document.body.appendChild(tempDiv);
    setWidth(tempDiv.offsetWidth + 40 + 'px'); // Adjust the additional width for padding and icon space
    document.body.removeChild(tempDiv);
  };

  useEffect(() => {
    resizeSelect(); // Initial resize on component mount
  }, []);

  return (
    <div className="mt-4">
      <div className="relative inline-block">
        <select
          ref={selectRef}
          style={{ width: width }}
          className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer min-w-[50px]"
          onChange={resizeSelect}
        >
          <option value="brazil">How did you hear about us?</option>
          <option value="bucharest">How can we assist you today?</option>
          <option value="london">What is your age group?</option>
          <option value="washington">Would you like to subscribe to our newsletter?</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
}
