

export default function ControlledAccordion() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="mb-4 flex gap-2">
  <button onclick="toggleAccordionById('#controlledAccordion1')" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">React Version</button>
  <button onclick="toggleAccordionById('#controlledAccordion2')" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">HTML Version</button>
  <button onclick="toggleAccordionById('#controlledAccordion3')" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">Vue Version</button>
</div>

<!-- Accordion Component -->  
<div class="group block w-full" aria-disabled="false" data-accordion-container data-accordion-mode="exclusive">
  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#controlledAccordion1"
    aria-expanded="false">
    Material Tailwind React?
    <svg data-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 rotate-180">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </div>
  <div id="controlledAccordion1" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>

  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#controlledAccordion2"
    aria-expanded="false">
    Material Tailwind HTML?
    <svg data-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </div>
  <div id="controlledAccordion2" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>

  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#controlledAccordion3"
    aria-expanded="false">
    Material Tailwind Vue?
    <svg data-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </div>
  <div id="controlledAccordion3" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>
</div>`
      }}
    />
  );
}
