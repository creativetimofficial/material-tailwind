

export default function AccordionCustomIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="group block w-full" aria-disabled="false" data-accordion-container data-accordion-mode="exclusive">
  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#customIconAccordion1"
    aria-expanded="false">
    Material Tailwind React?
    <svg data-accordion-icon-close xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    <svg data-accordion-icon-open xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
    </svg>
  </div>
  <div id="customIconAccordion1" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>

  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#customIconAccordion2"
    aria-expanded="false">
    Material Tailwind HTML?
    <svg data-accordion-icon-close xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    <svg data-accordion-icon-open xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
    </svg>
  </div>
  <div id="customIconAccordion2" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>

  <div 
    class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
    data-accordion-toggle
    data-accordion-target="#customIconAccordion3"
    aria-expanded="false">
    Material Tailwind Vue?
    <svg data-accordion-icon-close xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    <svg data-accordion-icon-open xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
    </svg>
  </div>
  <div id="customIconAccordion3" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
    <p class="mb-5 text-sm text-slate-600 dark:text-slate-400">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</p>
  </div>
</div>`
      }}
    />
  );
}
