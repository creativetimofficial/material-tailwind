export default function DropdownNavMenu() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="dropdown" data-placement="bottom">
  <button data-toggle="dropdown" aria-expanded="false" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/5 shadow-none hover:shadow-none">
    Versions 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </button>
  <div data-role="menu" class="hidden min-w-40 grid max-w-lg grid-cols-5 gap-1 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
    <div class="w-full bg-slate-800 col-span-2 grid place-items-center rounded-md px-8 py-4">
      <div class="text-center flex flex-col items-center justify-center">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-12 w-12 text-white">
          <path d="M16.0614 10.4037L14 17L10 17L7.93865 10.4037C7.35085 8.52273 7.72417 6.47307 8.93738 4.92015L11.5272 1.6052C11.7674 1.29772 12.2326 1.29772 12.4728 1.6052L15.0626 4.92015C16.2758 6.47307 16.6491 8.52273 16.0614 10.4037Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M10 20C10 22 12 23 12 23C12 23 14 22 14 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8.5 12.5C5 15 7 19 7 19L10 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M15.9312 12.5C19.4312 15 17.4312 19 17.4312 19L14.4312 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <h6 class="font-bold text-white mt-5 text-center">Material Tailwind PRO</h6>
      </div>
    </div>
    <ul class="col-span-3 m-0">
      <a href="#" onclick="event.preventDefault();" class="w-full text-start flex flex-col py-1.5 px-2.5 rounded bg-transparent hover:bg-slate-200 cursor-pointer">
        <p class="font-semibold text-slate-800">Material Tailwind HTML</p>
        <small class="text-slate-600">Learn how to use @material-tailwind/html, packed with rich components and widgets.</small>
      </a>
      <a href="#" onclick="event.preventDefault();" class="w-full text-start flex flex-col py-1.5 px-2.5 rounded bg-transparent hover:bg-slate-200 cursor-pointer">
        <p class="font-semibold text-slate-800">Material Tailwind React</p>
        <small class="text-slate-600">Learn how to use @material-tailwind/react, packed with rich components for React.</small>
      </a>
      <a href="#" onclick="event.preventDefault();" class="w-full text-start flex flex-col py-1.5 px-2.5 rounded bg-transparent hover:bg-slate-200 cursor-pointer">
      <p class="font-semibold text-slate-800">Material Tailwind PRO</p>
      <small class="text-slate-600">A complete set of UI Elements for building faster websites in less time.</small>
      </a>
    </ul>
  </div>
</div>
`
                }}
              />
            );
          }
