

export default function SortableTable() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full">
  <div class="mb-8 flex items-center justify-between gap-8">
    <div>
      <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">Members list</h6>
      <p class="mt-1 font-sans text-base text-current antialiased">See information about all members</p>
    </div>
    <div class="flex shrink-0 flex-col gap-2 sm:flex-row"><button class="inline-flex select-none items-center justify-center rounded-md border border-slate-200 bg-slate-200 px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-100 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">View all</button><button class="flex select-none items-center justify-center gap-3 rounded-md border border-slate-800 bg-slate-800 px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
          <path d="M17 10H20M23 10H20M20 10V7M20 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg> Add member</button></div>
  </div>
  <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
    <div class="flex flex-col gap-2">
      <div role="tablist" class="flex w-full shrink-0 flex-row rounded-md bg-slate-100 p-1 md:w-max dark:bg-surface"><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 dark:text-white">All</button><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 dark:text-white">Monitored</button><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 dark:text-white">Unmonitored</button><span class="rounded bg-white shadow-sm shadow-black/10 transition-all duration-300 ease-in"></span></div>
    </div>
    <div class="w-full md:w-72">
      <div class="relative w-full rounded-md text-sm leading-none aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full"><input placeholder="Search" class="peer h-full w-full select-none rounded-[inherit] border border-slate-200 bg-transparent px-2.5 py-[8.5px] pe-8 leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white" type="text" /><span class="pointer-events-none absolute right-[7px] top-1/2 h-5 w-5 -translate-y-1/2 overflow-hidden text-foreground/70 transition-all duration-300 ease-in peer-hover:text-black peer-focus:text-black dark:peer-hover:text-white dark:peer-focus:text-white"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M17 17L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div>
    </div>
  </div>
  <div class="mt-4 w-full overflow-hidden rounded-lg border border-slate-200">
    <table class="w-full">
      <thead class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-surface-dark">
        <tr>
          <th class="cursor-pointer px-2.5 py-2 text-start font-medium"><small class="flex items-center justify-between gap-2 font-sans text-sm text-current antialiased opacity-70">Member <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
                <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></small></th>
          <th class="cursor-pointer px-2.5 py-2 text-start font-medium"><small class="flex items-center justify-between gap-2 font-sans text-sm text-current antialiased opacity-70">Function <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
                <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></small></th>
          <th class="cursor-pointer px-2.5 py-2 text-start font-medium"><small class="flex items-center justify-between gap-2 font-sans text-sm text-current antialiased opacity-70">Status <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
                <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></small></th>
          <th class="cursor-pointer px-2.5 py-2 text-start font-medium"><small class="flex items-center justify-between gap-2 font-sans text-sm text-current antialiased opacity-70">Employed <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
                <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></small></th>
          <th class="cursor-pointer px-2.5 py-2 text-start font-medium"><small class="flex items-center justify-between gap-2 font-sans text-sm text-current antialiased opacity-70"> </small></th>
        </tr>
      </thead>
      <tbody class="group text-sm text-slate-800 dark:text-white">
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" class="inline-block h-8 w-8 rounded-full object-cover object-center" />
              <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">John Michael</small><small class="font-sans text-sm text-current antialiased opacity-70">john@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Manager</small><small class="font-sans text-sm text-current antialiased opacity-70">Organization</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div class="relative inline-flex select-none items-center rounded-full border border-green-500 bg-green-500 p-0.5 font-sans text-xs font-medium leading-none text-green-50"><span class="font-sans mx-1.5 my-0.5 leading-none text-current">Online</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans text-sm text-current antialiased">23/04/18</small></td>
          <td class="p-3"><button class="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg" alt="Alexa Liras" class="inline-block h-8 w-8 rounded-full object-cover object-center" />
              <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Alexa Liras</small><small class="font-sans text-sm text-current antialiased opacity-70">alexa@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Programator</small><small class="font-sans text-sm text-current antialiased opacity-70">Developer</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" class="relative inline-flex select-none items-center rounded-full border border-slate-200 bg-slate-200 p-0.5 font-sans text-xs font-medium leading-none text-slate-800"><span class="font-sans mx-1.5 my-0.5 leading-none text-current">Offline</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans text-sm text-current antialiased">23/04/18</small></td>
          <td class="p-3"><button class="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none data-[shape=circular]:rounded-full"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" alt="Laurent Perrier" class="inline-block h-8 w-8 rounded-full object-cover object-center" />
              <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Laurent Perrier</small><small class="font-sans text-sm text-current antialiased opacity-70">laurent@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Executive</small><small class="font-sans text-sm text-current antialiased opacity-70">Projects</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div class="relative inline-flex select-none items-center rounded-full border border-slate-200 bg-slate-200 p-0.5 font-sans text-xs font-medium leading-none text-slate-800"><span class="font-sans mx-1.5 my-0.5 leading-none text-current">Offline</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans text-sm text-current antialiased">19/09/17</small></td>
          <td class="p-3"><button class="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" alt="Michael Levi" class="inline-block h-8 w-8 rounded-full object-cover object-center" />
              <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Michael Levi</small><small class="font-sans text-sm text-current antialiased opacity-70">michael@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Programator</small><small class="font-sans text-sm text-current antialiased opacity-70">Developer</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" class="relative inline-flex select-none items-center rounded-full border border-green-500 bg-green-500 p-0.5 font-sans text-xs font-medium leading-none text-green-50"><span class="font-sans mx-1.5 my-0.5 leading-none text-current">Online</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans text-sm text-current antialiased">24/12/08</small></td>
          <td class="p-3"><button class="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none data-[shape=circular]:rounded-full"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg" alt="Richard Gran" class="inline-block h-8 w-8 rounded object-cover object-center data-[shape=circular]:rounded-full" data-shape="circular" />
              <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Richard Gran</small><small class="font-sans text-sm text-current antialiased opacity-70">richard@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans text-sm text-current antialiased">Manager</small><small class="font-sans text-sm text-current antialiased opacity-70">Executive</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" class="relative inline-flex select-none items-center rounded-full border border-slate-200 bg-slate-200 p-0.5 font-sans text-xs font-medium leading-none text-slate-800"><span class="font-sans mx-1.5 my-0.5 leading-none text-current">Offline</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans text-sm text-current antialiased">04/10/21</small></td>
          <td class="p-3"><button class="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none data-[shape=circular]:rounded-full"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex items-center justify-between border-t border-surface-light py-4"><small class="font-sans text-sm text-current antialiased">Page 1 of 10</small>
    <div class="flex gap-2"><button class="inline-flex select-none items-center justify-center rounded-md border border-slate-200 bg-transparent px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Previous</button><button class="inline-flex select-none items-center justify-center rounded-md border border-slate-200 bg-transparent px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Next</button></div>
  </div>
</div>
`
      }}
    />
  );
}
