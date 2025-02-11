
export default function SimpleNavbar() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<nav class="rounded-lg border shadow-lg overflow-hidden p-2 bg-white border-slate-200 shadow-slate-950/5 mx-auto w-full max-w-screen-xl">
  <div class="flex items-center">
    <a href="#" class="font-sans antialiased text-sm text-current mx-2 block py-1 font-semibold">Material Tailwind</a>
    <div class="hidden lg:ml-auto lg:mr-2 lg:block">
      <ul class="m-2 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center">
        <li>
          <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary">Pages</a>
        </li>
        <li>
          <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary">Account</a>
        </li>
        <li>
          <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary">Blocks</a>
        </li>
        <li>
          <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary">Docs</a>
        </li>
      </ul>
    </div>
    <div data-toggle="collapse" 
         data-target="#navbarCollapseSimple" 
         aria-expanded="false" 
         aria-controls="navbarCollapseSimple" 
         class="ml-auto lg:hidden cursor-pointer">
      <button class="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none grid">
        <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
          <path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  </div>
  <div class="overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0 lg:hidden" id="navbarCollapseSimple">
    <ul class="m-2 flex flex-col gap-y-1">
      <li>
        <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary block">Pages</a>
      </li>
      <li>
        <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary block">Account</a>
      </li>
      <li>
        <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary block">Blocks</a>
      </li>
      <li>
        <a href="#" class="font-sans antialiased text-sm text-current p-1 hover:text-primary block">Docs</a>
      </li>
    </ul>
  </div>
</nav>
`
      }}
    />
  );
}
