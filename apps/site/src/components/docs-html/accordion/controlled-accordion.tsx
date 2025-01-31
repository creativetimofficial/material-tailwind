

export default function ControlledAccordion() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div>
  <div class="mb-4 flex gap-2"><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-primary hover:text-primary-foreground" data-shape="default" data-width="full">React Version</button><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700" data-shape="default" data-width="full">HTML Version</button><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-primary hover:text-primary-foreground" data-shape="default" data-width="full">Vue Version</button></div>
  <div data-open="false" class="group block w-full items-center justify-between cursor-pointer border-b border-slate-200 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none" aria-disabled="false"><button data-open="false" class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800">Material Tailwind React<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button></div>
  <div data-open="true" class="group block w-full items-center justify-between cursor-pointer border-b border-slate-200 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none" aria-disabled="false"><button data-open="true" class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800">Material Tailwind HTML<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button>
    <div class="block pb-5 text-sm text-slate-600 h-0 data-[open=true]:h-auto" data-open="true">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</div>
  </div>
  <div data-open="false" class="group block w-full items-center justify-between cursor-pointer border-b border-slate-200 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none" aria-disabled="false"><button data-open="false" class="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800">Material Tailwind Vue<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button></div>
</div>
`
      }}
    />
  );
}
