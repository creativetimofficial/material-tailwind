

export default function AccordionAllOpen() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div data-open="false" class="group block w-full items-center justify-between cursor-pointer border-b border-slate-200 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none" aria-disabled="false"><button data-open="false" class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800">Material Tailwind React<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg></button></div>
<div data-open="false" class="group block w-full items-center justify-between cursor-pointer border-b border-slate-200 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none" aria-disabled="false"><button data-open="false" class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800">Material Tailwind HTML<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg></button></div>
<div data-open="false" class="group block w-full items-center justify-between cursor-pointer border-b border-slate-200 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none" aria-disabled="false"><button data-open="false" class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800">Material Tailwind Vue<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg></button></div>
`
      }}
    />
  );
}
