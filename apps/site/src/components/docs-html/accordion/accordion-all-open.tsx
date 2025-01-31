

export default function AccordionAllOpen() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full">
  <div id="accordion1" data-open="true" class="items-center justify-between block w-full border-b cursor-pointer group border-slate-200"><button data-open="true" class="flex items-center justify-between w-full py-3 font-medium text-left text-slate-800 dark:text-white">Material Tailwind React<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button>
    <div class="block h-auto pb-3 text-slate-600" data-content="true" data-open="true">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</div>
  </div>
  <div id="accordion2" data-open="false" class="items-center justify-between block w-full border-b cursor-pointer group border-slate-200"><button data-open="false" class="flex items-center justify-between w-full py-3 font-medium text-left text-slate-800 dark:text-white">Material Tailwind HTML<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button>
    <div class="hidden h-0 pb-3 text-slate-600" data-content="true" data-open="false">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</div>
  </div>
  <div id="accordion3" data-open="false" class="items-center justify-between block w-full border-b cursor-pointer group border-slate-200"><button data-open="false" class="flex items-center justify-between w-full py-3 font-medium text-left text-slate-800 dark:text-white">Material Tailwind Vue<svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 group-data-[open=true]:rotate-180">
        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button>
    <div class="hidden h-0 pb-3 text-slate-600" data-content="true" data-open="false">Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.</div>
  </div>
</div>
`
      }}
    />
  );
}
