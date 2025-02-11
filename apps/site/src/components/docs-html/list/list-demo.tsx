
export default function ListDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<ul class="flex flex-col gap-0.5 min-w-60">
  <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white data-[selected=true]:bg-slate-200 data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70">Inbox</li>
  <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white data-[selected=true]:bg-slate-200 data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70">Trash</li>
  <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white data-[selected=true]:bg-slate-200 data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70">Settings</li>
</ul>
`
      }}
    />
  );
}
