
export default function RadioWithDescription() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex data-[orientation=horizontal]:items-center data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start gap-4" data-value="" data-orientation="vertical">
  <div class="flex gap-2"><label class="group block cursor-pointer shadow-sm shadow-slate-950/5 relative h-5 w-5 shrink-0 rounded-full bg-transparent border border-slate-200 transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md data-[checked=true]:bg-slate-800 data-[checked=true]:border-slate-800 text-slate-50" data-value=":R5H1:" data-checked="false" for="radio-description-html"><input id="radio-description-html" type="radio" style="display:none" value=":R5H1:" /><span class="pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in group-data-[checked=true]:scale-100 group-data-[checked=true]:opacity-100"><svg width="10px" height="10px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z" fill="currentColor"></path></svg></span></label><label for="radio-description-html" class="-translate-y-1">
      <p class="font-sans antialiased text-base text-slate-800 dark:text-white font-semibold">HTML Version</p><small class="font-sans antialiased text-sm text-slate-600">@material-tailwind/html, packed with rich components and widgets.</small>
    </label></div>
  <div class="flex gap-2"><label class="group block cursor-pointer shadow-sm shadow-slate-950/5 relative h-5 w-5 shrink-0 rounded-full bg-transparent border border-slate-200 transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md data-[checked=true]:bg-slate-800 data-[checked=true]:border-slate-800 text-slate-50" data-value=":R6H1:" data-checked="false" for="radio-description-react"><input id="radio-description-react" type="radio" style="display:none" value=":R6H1:" /><span class="pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in group-data-[checked=true]:scale-100 group-data-[checked=true]:opacity-100"><svg width="10px" height="10px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z" fill="currentColor"></path></svg></span></label><label for="radio-description-react" class="-translate-y-1">
      <p class="font-sans antialiased text-base text-slate-800 dark:text-white font-semibold">React Version</p><small class="font-sans antialiased text-sm text-slate-600">@material-tailwind/react, packed with rich components and widgets.</small>
    </label></div>
</div>
`
      }}
    />
  );
}
