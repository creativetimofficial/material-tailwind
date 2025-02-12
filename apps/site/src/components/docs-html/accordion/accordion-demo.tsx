

export default function AccordionDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="group block w-full" aria-disabled="false" data-accordion-container data-accordion-mode="exclusive">
  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#basicAccordion1"
    aria-expanded="false">
    Material Tailwind React
    <svg data-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 rotate-180">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </div>
  <div id="basicAccordion1" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>

  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#basicAccordion2"
    aria-expanded="false">
    Material Tailwind HTML
    <svg data-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </div>
  <div id="basicAccordion2" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>

  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#basicAccordion3"
    aria-expanded="false">
    Material Tailwind Vue
    <svg data-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </div>
  <div id="basicAccordion3" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>
</div>`
      }}
    />
  );
}
