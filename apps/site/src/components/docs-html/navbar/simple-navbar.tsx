

export default function SimpleNavbar() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<nav class="mx-auto w-full max-w-screen-xl overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-lg shadow-slate-950/5">
  <div class="flex items-center"><a href="#" class="mx-2 block py-1 font-sans text-sm font-semibold text-current antialiased">Material Tailwind</a>
    <div class="hidden lg:ml-auto lg:mr-2 lg:block">
      <ul class="m-2 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center">
        <li><a href="#" class="p-1 font-sans text-sm text-current antialiased hover:text-primary">Pages</a></li>
        <li><a href="#" class="p-1 font-sans text-sm text-current antialiased hover:text-primary">Account</a></li>
        <li><a href="#" class="p-1 font-sans text-sm text-current antialiased hover:text-primary">Blocks</a></li>
        <li><a href="#" class="p-1 font-sans text-sm text-current antialiased hover:text-primary">Docs</a></li>
      </ul>
    </div><button class="ml-auto grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none data-[shape=circular]:rounded-full lg:hidden" data-shape="default"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
        <path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button>
  </div>
</nav>
`
      }}
    />
  );
}
