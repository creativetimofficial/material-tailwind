
export default function TabsWithIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row gap-2" data-orientation="horizontal">
  <div role="tablist" class="flex shrink-0 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-md p-1 bg-slate-100 dark:bg-surface w-full" aria-orientation="horizontal" data-orientation="horizontal"><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none w-full" data-active="true" aria-selected="true"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-2 h-4 w-4">
        <path d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 21L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M11.6914 11.8285L3.89139 7.49521C3.49147 7.27304 3 7.56222 3 8.01971V16.647C3 16.8649 3.11813 17.0656 3.30861 17.1715L11.1086 21.5048C11.5085 21.727 12 21.4378 12 20.9803V12.353C12 12.1351 11.8819 11.9344 11.6914 11.8285Z" fill="currentColor" stroke="currentColor" stroke-linejoin="round"></path>
      </svg>Dashboard</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none w-full" data-active="false" aria-selected="false"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-2 h-4 w-4">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>User Profile</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none w-full" data-active="false" aria-selected="false"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-2 h-4 w-4">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>Settings</button><span style="width:0;height:0;left:0;top:0;position:absolute;z-index:1" class="bg-white rounded shadow-sm shadow-slate-800/10 transition-all duration-300 ease-in"></span></div>
  <div role="tabpanel" class="p-1 w-full block" data-active="true" data-orientation="horizontal">It really matters and then like it really doesn&#x27;t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn&#x27;t matter.</div>
</div>
`
      }}
    />
  );
}
