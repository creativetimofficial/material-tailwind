export default function ContactPopover() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="min-h-60">
  <button type="button" data-dui-toggle="popover" data-dui-placement="bottom" data-dui-popover-class="bg-white text-stone-800 border border-stone-200 rounded-lg shadow-sm p-1 z-50" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"> Contact Info </button>
    <div data-dui-popover-content class="hidden">
      <ul class="flex flex-col gap-0.5 min-w-60">
        <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 focus:bg-stone-100 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span class="grid place-items-center shrink-0 me-2.5">
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-11 h-11 rounded-md" data-shape="circular">
          </span>
          <div>
            <p class="font-sans antialiased text-base text-black dark:text-white font-semibold">Alex Andrew</p>
            <small class="font-sans antialiased text-sm text-foreground">General Manager</small>
          </div>
        </li>
        <hr class="-mx-1 my-1 border-secondary">
        <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 focus:bg-stone-100 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span class="grid place-items-center shrink-0 me-2.5">
            <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[18px] w-[18px]">
              <path d="M7 9.01L7.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11 9.01L11.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M7 13.01L7.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11 13.01L11.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M7 17.01L7.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11 17.01L11.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M15 21H3.6C3.26863 21 3 20.7314 3 20.4V5.6C3 5.26863 3.26863 5 3.6 5H9V3.6C9 3.26863 9.26863 3 9.6 3H14.4C14.7314 3 15 3.26863 15 3.6V9M15 21H20.4C20.7314 21 21 20.7314 21 20.4V9.6C21 9.26863 20.7314 9 20.4 9H15M15 21V17M15 9V13M15 13H17M15 13V17M15 17H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span> ABC Construction
        </li>
        <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 focus:bg-stone-100 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span class="grid place-items-center shrink-0 me-2.5">
            <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[18px] w-[18px]">
              <path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span> 00 123 456 789
        </li>
        <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 focus:bg-stone-100 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span class="grid place-items-center shrink-0 me-2.5">
            <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[18px] w-[18px]">
              <path d="M7 9L12 12.5L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor"></path>
            </svg>
          </span> someone@example.com
        </li>
      </ul>
  </div>
</div>
`
                }}
              />
            );
          }