
export default function LoginCard() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 max-w-xs">
  <div class="border overflow-hidden bg-slate-800 border-slate-950 shadow-slate-950/25 w-[calc(100%-16px)] rounded m-2 grid h-24 place-items-center shadow-none"><span class="font-sans antialiased font-bold text-xl md:text-2xl lg:text-3xl text-slate-50">Sign In</span></div>
  <form class="w-full h-max rounded px-3.5 py-2.5">
    <div class="mb-4 mt-2 space-y-1.5"><label for="email" class="font-sans antialiased text-sm text-slate-800 dark:text-white font-semibold">Email</label>
      <div id="email" class="relative w-full aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full text-sm rounded-md" data-shape="default"></div>
    </div>
    <div class="mb-4 space-y-1.5"><label for="password" class="font-sans antialiased text-sm text-slate-800 dark:text-white font-semibold">Password</label>
      <div id="password" class="relative w-full aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full text-sm rounded-md" data-shape="default"></div>
    </div><label for="remember" class="mb-4 flex items-center gap-2"><label class="group shadow-sm shadow-slate-950/5 inline-block relative h-5 w-5 rounded bg-transparent border border-slate-200 transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md data-[checked=true]:bg-slate-800 data-[checked=true]:border-slate-800 text-slate-50" data-checked="false" for="remember"><input id="remember" type="checkbox" style="display:none" /><span data-checked="false" class="pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in data-[checked=true]:scale-100 data-[checked=true]:opacity-100"><svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label>
      <p class="font-sans antialiased text-base text-slate-600">Remember Me</p>
    </label><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700" data-shape="default" data-width="full">Sign In</button>
  </form>
  <div class="w-full px-3.5 pt-2 pb-3.5 rounded text-center"><small class="font-sans antialiased text-sm my-1 flex items-center justify-center gap-1 text-slate-600">Don&#x27;t have an account?<a href="#" class="font-sans antialiased text-sm text-slate-800 font-bold">Sign up</a></small></div>
</div>
`
      }}
    />
  );
}
