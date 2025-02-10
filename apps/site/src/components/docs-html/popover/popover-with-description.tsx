
export default function PopoverWithDescription() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="min-h-48">
  <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="bottom" data-popover-class="bg-white w-5/12 md:w-3/12 text-slate-800 border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-2 z-50"> Repository Info </button>
  <div data-popover-content class="hidden">
    <div class="mb-1 flex items-center gap-2">
      <a href="#" class="font-sans antialiased text-base text-slate-800 dark:text-white font-bold">@material-tailwind</a>
      <div class="relative inline-flex w-max items-center border font-sans font-medium rounded-full text-xs p-0.5 shadow-sm bg-slate-800 border-slate-800 text-slate-50">
        <span class="font-sans text-current leading-none my-0.5 mx-1.5">Public</span>
      </div>
    </div>
    <small class="font-sans antialiased text-sm text-slate-500">@material-tailwind is an easy-to-use components library for Tailwind CSS and Material Design.</small>
    <div class="mt-4 flex items-center gap-4">
      <div class="flex items-center gap-1.5">
        <span class="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
        <small class="font-sans antialiased text-sm text-slate-800 dark:text-white">TypeScript</small>
      </div>
      <div class="flex items-center gap-1.5">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-amber-500">
          <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <small class="font-sans antialiased text-sm text-slate-800 dark:text-white">1,480</small>
      </div>
      <div class="flex items-center gap-1.5">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 text-green-500">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z" fill="currentColor"></path>
        </svg>
        <small class="font-sans antialiased text-sm text-slate-800 dark:text-white">Verified</small>
      </div>
    </div>
  </div>
</div>`
      }}
    />
  );
}
