
export default function NavbarWithMegaMenu() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<nav class="rounded-lg border shadow-lg overflow-hidden p-2 bg-white border-slate-200 shadow-slate-950/5 mx-auto w-full max-w-screen-xl">
  <div class="flex items-center">
    <a href="#" class="font-sans antialiased text-sm text-current ml-2 mr-2 block py-1 font-semibold">Material Tailwind</a>
    <hr class="mx-1 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
    <div class="hidden lg:block">
      <div class="min-w-60 mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center">
        <div class="dropdown" data-placement="bottom-start">
          <div data-toggle="dropdown" aria-expanded="false" class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <span class="grid place-items-center shrink-0 me-2.5 me-1.5"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M7 18H10.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 14H7.5H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 10H8.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 2L16.5 2L21 6.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.5V6.5C3 5.67157 3.67157 5 4.5 5H14.2515C14.4106 5 14.5632 5.06321 14.6757 5.17574L17.8243 8.32426C17.9368 8.43679 18 8.5894 18 8.74853V20.5C18 21.3284 17.3284 22 16.5 22H4.5C3.67157 22 3 21.3284 3 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 5V8.4C14 8.73137 14.2686 9 14.6 9H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
            <small class="font-sans antialiased text-sm text-current">Pages</small>
            <span class="grid place-items-center shrink-0 ps-2.5 ms-auto ps-0.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-3.5 w-3.5 group-data-[open=true]:rotate-180"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
          </div>
          <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-lg p-6 z-10 w-[36rem]">
            <div class="grid grid-cols-3 gap-6">
              <div>
                <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-slate-800 mb-3">Company</h6>
                <ul class="space-y-2">
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">About Us</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Careers</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Press</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">News</a></li>
                </ul>
              </div>
              <div>
                <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-slate-800 mb-3">Resources</h6>
                <ul class="space-y-2">
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Blog</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Newsletter</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Events</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Help center</a></li>
                </ul>
              </div>
              <div>
                <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-slate-800 mb-3">Products</h6>
                <ul class="space-y-2">
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Templates</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">UI Kits</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Icons</a></li>
                  <li><a href="#" class="block text-sm text-slate-600 hover:text-slate-800">Mockups</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span class="grid place-items-center shrink-0 me-2.5 mr-1.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </span>
          <small class="font-sans antialiased text-sm text-current">Account</small>
        </a>
        <a href="#" class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span class="grid place-items-center shrink-0 me-2.5 mr-1.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 21L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.6914 11.8285L3.89139 7.49521C3.49147 7.27304 3 7.56222 3 8.01971V16.647C3 16.8649 3.11813 17.0656 3.30861 17.1715L11.1086 21.5048C11.5085 21.727 12 21.4378 12 20.9803V12.353C12 12.1351 11.8819 11.9344 11.6914 11.8285Z" fill="currentColor" stroke="currentColor" stroke-linejoin="round"></path></svg>
          </span>
          <small class="font-sans antialiased text-sm text-current">Blocks</small>
        </a>
        <a href="#" class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span class="grid place-items-center shrink-0 me-2.5 mr-1.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M7 6L17 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 9L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H2.6C2.26863 12 2 12.2686 2 12.6V21.4C2 21.7314 2.26863 22 2.6 22H21.4C21.7314 22 22 21.7314 22 21.4V12.6C22 12.2686 21.7314 12 21.4 12H21M3 12V2.6C3 2.26863 3.26863 2 3.6 2H20.4C20.7314 2 21 2.26863 21 2.6V12M3 12H21" stroke="currentColor"></path></svg>
          </span>
          <small class="font-sans antialiased text-sm text-current">Docs</small>
        </a>
      </div>
    </div>
    <button data-toggle="collapse" data-target="#navbar-with-mega-menu-collapse" aria-expanded="false" aria-controls="navbar-with-mega-menu-collapse" class="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none ml-auto mr-2 grid lg:hidden"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <img aria-expanded="false" aria-haspopup="menu" id="navbar-with-mega-menu-profile" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block object-cover object-center w-8 h-8 rounded-full outline-none group border border-slate-800 p-0.5 lg:ml-auto" />
  </div>
  <div class="overflow-scroll transition-[max-height] duration-300 ease-in-out max-h-0 lg:hidden" id="navbar-with-mega-menu-collapse">
    <div class="min-w-60 mt-4 flex flex-col gap-1"> 
      <div data-toggle="collapse" 
          data-target="#navbar-with-mega-menu-collapse-list" 
          aria-expanded="false" 
          aria-controls="navbar-with-mega-menu-collapse-list" 
          class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
         
        <span class="grid place-items-center shrink-0 me-2.5 me-1.5"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M7 18H10.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 14H7.5H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 10H8.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 2L16.5 2L21 6.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.5V6.5C3 5.67157 3.67157 5 4.5 5H14.2515C14.4106 5 14.5632 5.06321 14.6757 5.17574L17.8243 8.32426C17.9368 8.43679 18 8.5894 18 8.74853V20.5C18 21.3284 17.3284 22 16.5 22H4.5C3.67157 22 3 21.3284 3 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 5V8.4C14 8.73137 14.2686 9 14.6 9H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </span> 
        <small class="font-sans antialiased text-sm text-current">Pages</small>
        <span data-icon class="grid place-items-center shrink-0 ms-auto transition-transform duration-300 ease-in-out"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-3.5 w-3.5 group-data-[open=true]:rotate-180"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </span>
      </div>
      <div class="overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0" id="navbar-with-mega-menu-collapse-list">
        <ul class="flex flex-col gap-0.5 min-w-60">
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans font-semibold transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-800">
            <small class="font-sans antialiased text-sm text-current pl-7">Company</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Landing Page</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">About Us</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Contact</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Author</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Sign In</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans font-semibold transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-800">
            <small class="font-sans antialiased text-sm text-current pl-7">Resources</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Blog</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Newsletter</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Events</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Help center</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans font-semibold transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-800">
            <small class="font-sans antialiased text-sm text-current pl-7">Products</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Templates</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">UI Kits</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Icons</small>
          </li>
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
            <small class="font-sans antialiased text-sm text-current pl-7">Mockups</small>
          </li>
        </ul>   
      </div>

      <a href="#" class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
        <span class="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
        <small class="font-sans antialiased text-sm text-current">Account</small>
      </a>
      <a href="#" class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
        <span class="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 21L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.6914 11.8285L3.89139 7.49521C3.49147 7.27304 3 7.56222 3 8.01971V16.647C3 16.8649 3.11813 17.0656 3.30861 17.1715L11.1086 21.5048C11.5085 21.727 12 21.4378 12 20.9803V12.353C12 12.1351 11.8819 11.9344 11.6914 11.8285Z" fill="currentColor" stroke="currentColor" stroke-linejoin="round"></path></svg></span>
        <small class="font-sans antialiased text-sm text-current">Blocks</small>
      </a>
      <a href="#" class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
        <span class="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M7 6L17 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 9L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H2.6C2.26863 12 2 12.2686 2 12.6V21.4C2 21.7314 2.26863 22 2.6 22H21.4C21.7314 22 22 21.7314 22 21.4V12.6C22 12.2686 21.7314 12 21.4 12H21M3 12V2.6C3 2.26863 3.26863 2 3.6 2H20.4C20.7314 2 21 2.26863 21 2.6V12M3 12H21" stroke="currentColor"></path></svg></span>
        <small class="font-sans antialiased text-sm text-current">Docs</small>
      </a>
    </div>
  </div>
</nav>
`
      }}
    />
  );
}
