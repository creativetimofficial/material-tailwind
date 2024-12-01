import { useEffect, useRef, useState } from "react";

export function AccordionCustomIcon() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // Toggle the accordion item
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Effect to adjust maxHeight for smooth transitions
  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (openIndex === index) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0px';
        }
      }
    });
  }, [openIndex]);

  const up = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
  <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
</svg>


  const down = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
  <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>




  return (
    <div className="accordion">
      {/* Accordion Item 1 */}
      <div className="border-b border-slate-200">
        <button
          onClick={() => toggleAccordion(0)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span>What is Material Tailwind?</span>
          <span
            className={`text-slate-800 transition-transform duration-300`}
          >
            {openIndex === 0 ? up : down}
          </span>
        </button>
        <div
          ref={(el) => (contentRefs.current[0] = el)}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: '0px' }}
        >
          <div className="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b border-slate-200">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span>How to use Material Tailwind?</span>
          <span
            className={`text-slate-800 transition-transform duration-300`}
          >
            {openIndex === 1 ? up : down}
          </span>
        </button>
        <div
          ref={(el) => (contentRefs.current[1] = el)}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: '0px' }}
        >
          <div className="pb-5 text-sm text-slate-500">
            You can use Material Tailwind by importing its components into your Tailwind CSS project.
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b border-slate-200">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span>What can I do with Material Tailwind?</span>
          <span
            className={`text-slate-800 transition-transform duration-300`}
          >
            {openIndex === 2 ? up : down}
          </span>
        </button>
        <div
          ref={(el) => (contentRefs.current[2] = el)}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: '0px' }}
        >
          <div className="pb-5 text-sm text-slate-500">
            Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
          </div>
        </div>
      </div>
    </div>
  );
}
