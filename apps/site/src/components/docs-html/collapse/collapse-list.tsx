export default function CollapseDemo() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div data-dui-toggle="collapse" 
     data-dui-target="#collapseList" 
     aria-expanded="false" 
     aria-controls="collapseList" 
     class="flex items-center min-w-60 cursor-pointer py-1.5 px-2.5 rounded-md align-middle transition-all duration-300 ease-in text-stone-600 hover:text-stone-800 dark:text-stone-300 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700 focus:bg-stone-200 dark:focus:bg-stone-700 focus:text-stone-800 dark:focus:text-white">
  Components 
  <span data-dui-icon class="grid place-items-center shrink-0 ps-2.5 ms-auto">
    <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5 stroke-[1.5] dark:stroke-stone-300">
      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
</div>
<div class="overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0" id="collapseList">
  <ul class="flex flex-col gap-0.5 min-w-60">
    <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in bg-transparent text-stone-600 hover:text-stone-800 dark:text-stone-300 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700 focus:bg-stone-200 dark:focus:bg-stone-700 focus:text-stone-800 dark:focus:text-white">
      Inbox
    </li>
    <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in bg-transparent text-stone-600 hover:text-stone-800 dark:text-stone-300 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700 focus:bg-stone-200 dark:focus:bg-stone-700 focus:text-stone-800 dark:focus:text-white">
      Trash
    </li>
    <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in bg-transparent text-stone-600 hover:text-stone-800 dark:text-stone-300 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700 focus:bg-stone-200 dark:focus:bg-stone-700 focus:text-stone-800 dark:focus:text-white">
      Settings
    </li>
  </ul>   
</div>
`
                }}
              />
            );
          }