
export default function DialogMessage() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex justify-center">
  <button type="button" data-toggle="modal" data-target="#exampleModalMessage" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700"> Open </button>
  <div class="fixed antialiased inset-0 bg-slate-950/50 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]" id="exampleModalMessage" aria-hidden="true">
    <div class="bg-white rounded-xl shadow-2xl shadow-slate-950/5 w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 scale-95 transition-transform duration-300 ease-out">
      <div class="p-4 flex justify-between items-start">
        <div class="flex flex-col">
          <h1 class="text-lg text-slate-800 font-semibold">New message to @</h1>
          <p class="font-sans text-base text-slate-600">Write the message and then click button.</p>
        </div>
        <button type="button" data-dismiss="modal" aria-label="Close" class="inline-grid place-items-center border font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-full bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-200/10 shadow-none hover:shadow-none outline-none absolute right-2 top-2">
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
      </div>
      <form action="#">
        <div class="p-4 text-slate-500">
          <div class="mb-4 space-y-1.5">
            <label for="username" class="font-sans  text-sm text-slate-800 dark:text-white font-bold mb-2">Username</label>
            <div class="relative w-full">
              <input placeholder="Username" type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" />
            </div>
          </div>
          <div class="space-y-1.5">
            <label for="message" class="font-sans  text-sm text-slate-800 dark:text-white font-bold mb-2">Message</label>
            <div class="relative w-full">
              <textarea rows="8" placeholder="Your message..." class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer"></textarea>
            </div>
          </div>
        </div>
        <div class="p-4 pt-0 flex justify-between items-center gap-2">
          <button type="button" data-dismiss="modal" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">Cancel</button>
          <button type="button" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-blue-500 border-blue-500 text-blue-50 hover:bg-blue-400 hover:border-blue-400">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>`
      }}
    />
  );
}
