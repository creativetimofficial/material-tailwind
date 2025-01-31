

export default function TimelineWithIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex w-full flex-col items-start">
  <div class="group flex gap-x-6">
    <div class="relative">
      <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200"></div><span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
    </div>
    <div class="-translate-y-1.5 pb-8 text-slate-600">
      <p class="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">Timeline Title Here.</p><small class="mt-2 font-sans text-sm text-slate-600 antialiased">The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&#x27;m never giving up, I&#x27;m just getting started. I&#x27;m up to something. Fan luv.</small>
    </div>
  </div>
  <div data-value=":r15:" class="group flex gap-x-6">
    <div class="relative">
      <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200"></div><span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
    </div>
    <div class="-translate-y-1.5 pb-8 text-slate-600">
      <p class="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">Timeline Title Here.</p><small class="mt-2 font-sans text-sm text-slate-600 antialiased">The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&#x27;m never giving up, I&#x27;m just getting started. I&#x27;m up to something. Fan luv.</small>
    </div>
  </div>
  <div data-value=":r16:" class="group flex gap-x-6">
    <div class="relative"><span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div>
    <div class="-translate-y-1.5 pb-8 text-slate-600 data-[orientation=horizontal]:py-4">
      <p class="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">Timeline Title Here.</p><small class="mt-2 font-sans text-sm text-slate-600 antialiased">The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&#x27;m never giving up, I&#x27;m just getting started. I&#x27;m up to something. Fan luv.</small>
    </div>
  </div>
</div>
`
      }}
    />
  );
}
