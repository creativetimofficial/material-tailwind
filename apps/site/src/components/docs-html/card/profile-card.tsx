

export default function ProfileCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px]" />
  <div class="h-max w-full rounded px-3 py-2 text-center">
    <h5 class="font-sans text-lg font-bold text-current antialiased md:text-xl lg:text-2xl">Alex Andrew</h5>
    <p class="my-1 font-sans text-base text-slate-600 antialiased">CEO &amp; Co-Founder</p>
  </div>
  <div class="flex w-full items-center justify-center gap-1 rounded px-3 pb-3 pt-1.5"><button class="group inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-3.5 w-3.5">
        <path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" stroke="currentColor"></path>
        <path d="M20 3L4 21" stroke="currentColor" stroke-linecap="round"></path>
      </svg></button><button class="group inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
        <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button><button class="group inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor"></path>
        <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button></div>
</div>
`
      }}
    />
  );
}
