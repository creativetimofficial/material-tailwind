
export default function DialogWithForm() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex justify-center">
  <button type="button" data-toggle="modal" data-target="#exampleModalForm" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700"> Sign In</button>
  <div class="fixed antialiased inset-0 bg-slate-950/50 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]" id="exampleModalForm" aria-hidden="true">
    <div class="bg-white rounded-xl shadow-2xl shadow-slate-950/5 w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 scale-95 transition-transform duration-300 ease-out">
      <div class="pt-4 px-4 flex justify-between items-start">
        <div class="flex flex-col">
          <h1 class="text-xl text-slate-800 font-bold">Sign In</h1>
          <p class="text-slate-600 ">Enter your email and password to Sign In.</p>
        </div>
        <button type="button" data-dismiss="modal" aria-label="Close" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[34px] min-h-[34px] rounded-full bg-transparent border-transparent text-slate-200-foreground hover:bg-slate-200/10 hover:border-slate-200/10 shadow-none hover:shadow-none outline-none absolute right-2 top-2">
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
      </div>
      <div class="p-4">
        <div class="mb-4 mt-2 space-y-1.5">
          <label for="email" class="font-sans  text-sm text-slate-800 dark:text-white font-bold mb-2">Email</label>
          <div class="relative w-full">
            <input placeholder="someone@example.com" type="email" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" />
          </div>
        </div>
        <div class="mb-4 mt-2 space-y-1.5">
          <label for="password" class="font-sans  text-sm text-slate-800 dark:text-white font-bold mb-2">Password</label>
          <div class="relative w-full">
            <input placeholder="*******" type="password" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" />
          </div>
        </div>
        <div class="flex items-center gap-2">
        <label class="flex items-center cursor-pointer relative" for="checkbox-with-label">
            <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm  border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="checkbox-with-label" />
            <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
        </label>
        <label class="cursor-pointer text-slate-600 antialiased" for="checkbox-with-label">Remember Me</label>
        </div>
      </div>
      <div class=" px-4 pb-4 flex flex-col justify-end gap-2">
        <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">Sign In </button>
        <small class="font-sans  text-sm mb-2 mt-3 flex items-center justify-center gap-1 text-slate-600">Don't have an account? <a href="#" onclick="event.preventDefault();" class="font-sans  text-sm text-slate-600 font-semibold">Sign up</a>
        </small>
      </div>
    </div>
  </div>
</div>`
      }}
    />
  );
}
