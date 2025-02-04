
export function CollapseDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<ul class="flex flex-col gap-0.5 min-w-60">
  <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70">Components<span class="grid place-items-center shrink-0 ps-2.5 ms-auto"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5 stroke-[1.5] "><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></li>
</ul>
`
      }}
    />
  );
}
