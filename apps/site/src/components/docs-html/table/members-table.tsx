
export default function MembersTable() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full">
  <div class="mb-8 flex items-center justify-between gap-8">
    <div>
      <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">Members list</h6>
      <p class="font-sans antialiased text-base text-current mt-1">See information about all members</p>
    </div>
    <div class="flex shrink-0 flex-col gap-2 sm:flex-row"><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100" data-shape="default" data-width="default">View all</button><button class="justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 flex items-center gap-3" data-shape="default" data-width="default"><svg width="1.5em" height="1.5em" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
          <path d="M17 10H20M23 10H20M20 10V7M20 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg> Add member</button></div>
  </div>
  <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
    <div class="flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row gap-2" data-orientation="horizontal">
      <div role="tablist" class="relative flex shrink-0 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-md p-1 bg-slate-100 dark:bg-surface w-full md:w-max" aria-orientation="horizontal" data-orientation="horizontal"><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none w-full" data-active="true" aria-selected="true">All</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none w-full" data-active="false" aria-selected="false">Monitored</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none w-full" data-active="false" aria-selected="false">Unmonitored</button><span style="width:0;height:0;left:0;top:0;position:absolute;z-index:1" class="bg-white rounded shadow-sm shadow-slate-800/10 transition-all duration-300 ease-in"></span></div>
    </div>
    <div class="w-full md:w-72">
      <div class="relative w-full"><input placeholder="Search" type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" data-error="false" data-success="false" data-shape="default" data-icon-placement="" /><span class="pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-600/70 peer-focus:text-slate-800 peer-focus:text-slate-800 dark:peer-hover:text-white dark:peer-focus:text-white transition-all duration-300 ease-in overflow-hidden w-5 h-5 data-[placement=start]:left-2.5 data-[placement=end]:right-2.5" data-error="false" data-success="false" data-placement="start"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M17 17L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div>
    </div>
  </div>
  <div class="mt-4 w-full overflow-hidden rounded-lg border border-slate-200">
    <table class="w-full">
      <thead class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-surface-dark">
        <tr>
          <th class="px-2.5 py-2 text-start font-medium">Member</th>
          <th class="px-2.5 py-2 text-start font-medium">Function</th>
          <th class="px-2.5 py-2 text-start font-medium">Status</th>
          <th class="px-2.5 py-2 text-start font-medium">Employed</th>
          <th class="px-2.5 py-2 text-start font-medium"></th>
        </tr>
      </thead>
      <tbody class="group text-sm text-slate-800 dark:text-white">
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-8 h-8 rounded" data-shape="circular" />
              <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">John Michael</small><small class="font-sans antialiased text-sm text-current opacity-70">john@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Manager</small><small class="font-sans antialiased text-sm text-current opacity-70">Organization</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-xs p-0.5 shadow-sm bg-green-500 border-green-500 text-green-50"><span class="font-sans text-current leading-none my-0.5 mx-1.5">Online</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans antialiased text-sm text-current">23/04/18</small></td>
          <td class="p-3"><button data-open="false" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group" data-shape="default"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg" alt="Alexa Liras" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-8 h-8 rounded" data-shape="circular" />
              <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Alexa Liras</small><small class="font-sans antialiased text-sm text-current opacity-70">alexa@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Programator</small><small class="font-sans antialiased text-sm text-current opacity-70">Developer</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-xs p-0.5 shadow-sm bg-slate-200 border-slate-200 text-slate-800"><span class="font-sans text-current leading-none my-0.5 mx-1.5">Offline</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans antialiased text-sm text-current">23/04/18</small></td>
          <td class="p-3"><button data-open="false" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group" data-shape="default"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" alt="Laurent Perrier" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-8 h-8 rounded" data-shape="circular" />
              <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Laurent Perrier</small><small class="font-sans antialiased text-sm text-current opacity-70">laurent@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Executive</small><small class="font-sans antialiased text-sm text-current opacity-70">Projects</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-xs p-0.5 shadow-sm bg-slate-200 border-slate-200 text-slate-800"><span class="font-sans text-current leading-none my-0.5 mx-1.5">Offline</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans antialiased text-sm text-current">19/09/17</small></td>
          <td class="p-3"><button data-open="false" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group" data-shape="default"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" alt="Michael Levi" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-8 h-8 rounded" data-shape="circular" />
              <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Michael Levi</small><small class="font-sans antialiased text-sm text-current opacity-70">michael@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Programator</small><small class="font-sans antialiased text-sm text-current opacity-70">Developer</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-xs p-0.5 shadow-sm bg-green-500 border-green-500 text-green-50"><span class="font-sans text-current leading-none my-0.5 mx-1.5">Online</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans antialiased text-sm text-current">24/12/08</small></td>
          <td class="p-3"><button data-open="false" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group" data-shape="default"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
        <tr class="border-b border-slate-200 last:border-0">
          <td class="p-3">
            <div class="flex items-center gap-3"><img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg" alt="Richard Gran" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-8 h-8 rounded" data-shape="circular" />
              <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Richard Gran</small><small class="font-sans antialiased text-sm text-current opacity-70">richard@creative-tim.com</small></div>
            </div>
          </td>
          <td class="p-3">
            <div class="flex flex-col"><small class="font-sans antialiased text-sm text-current">Manager</small><small class="font-sans antialiased text-sm text-current opacity-70">Executive</small></div>
          </td>
          <td class="p-3">
            <div class="w-max">
              <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-xs p-0.5 shadow-sm bg-slate-200 border-slate-200 text-slate-800"><span class="font-sans text-current leading-none my-0.5 mx-1.5">Offline</span></div>
            </div>
          </td>
          <td class="p-3"><small class="font-sans antialiased text-sm text-current">04/10/21</small></td>
          <td class="p-3"><button data-open="false" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group" data-shape="default"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-slate-800 dark:text-white">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex items-center justify-between border-t border-surface-light py-4"><small class="font-sans antialiased text-sm text-current">Page 1 of 10</small>
    <div class="flex gap-2"><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-transparent border-slate-200 text-slate-800 hover:bg-slate-200" data-shape="default" data-width="default">Previous</button><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-transparent border-slate-200 text-slate-800 hover:bg-slate-200" data-shape="default" data-width="default">Next</button></div>
  </div>
</div>
`
      }}
    />
  );
}
