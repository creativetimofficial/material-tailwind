

export default function LoginCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
  <div class="m-1.5 grid h-24 w-[calc(100%-12px)] place-items-center overflow-hidden rounded-[5px] border border-slate-950 bg-slate-800 shadow-none shadow-slate-950/25"><span class="font-sans text-xl font-bold text-slate-50 antialiased md:text-2xl lg:text-3xl">Sign In</span></div>
  <form class="h-max w-full rounded px-3 py-2">
    <div class="relative mb-4 mt-2 w-full space-y-1.5 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full"><label for="email" class="font-sans text-sm font-semibold text-slate-800 antialiased dark:text-white">Email</label><input id="email" placeholder="someone@example.com" class="peer h-full w-full select-none rounded-[inherit] border border-slate-200 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white" type="email" /></div>
    <div class="relative mb-4 w-full space-y-1.5 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full"><label for="password" class="font-sans text-sm font-semibold text-slate-800 antialiased dark:text-white">Password</label><input id="password" placeholder="************" class="peer h-full w-full select-none rounded-[inherit] border border-slate-200 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white" type="password" /></div><label for="remember" class="mb-4 flex items-center gap-2"><label class="relative inline-block h-5 w-5 rounded bg-slate-200 text-slate-50 transition-all duration-200 ease-in aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[checked=true]:bg-slate-800" data-checked="false" for="remember"><input id="remember" type="checkbox" class="hidden" /><span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current opacity-0 transition-all duration-200 ease-in"><svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label>
      <p class="font-sans text-base text-slate-600 antialiased">Remember Me</p>
    </label><button class="inline-flex w-full select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Sign In</button>
  </form>
  <div class="w-full rounded px-3 pb-3 pt-1.5 text-center"><small class="my-1 flex items-center justify-center gap-1 font-sans text-sm text-slate-600 antialiased">Don&#x27;t have an account?<a href="#" class="font-sans text-sm font-bold text-slate-800 antialiased">Sign up</a></small></div>
</div>
`
      }}
    />
  );
}
