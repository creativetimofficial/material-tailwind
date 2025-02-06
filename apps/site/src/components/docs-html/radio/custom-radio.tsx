
export default function CustomRadio() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex gap-2 data-[orientation=horizontal]:items-center data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start" data-value="" data-orientation="vertical">
  <div class="flex items-center gap-2"><label class="group block cursor-pointer shadow-sm shadow-slate-950/5 relative h-5 w-5 shrink-0 bg-transparent border border-slate-200 transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md data-[checked=true]:bg-slate-800 data-[checked=true]:border-slate-800 text-slate-50 rounded" data-value=":R5H1:" data-checked="false" for="custom-html"><input id="custom-html" type="radio" style="display:none" value=":R5H1:" /><span class="pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in group-data-[checked=true]:scale-100 group-data-[checked=true]:opacity-100"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 stroke-2"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><label for="custom-html" class="font-sans antialiased text-base text-slate-600">HTML</label></div>
  <div class="flex items-center gap-2"><label class="group block cursor-pointer shadow-sm shadow-slate-950/5 relative h-5 w-5 shrink-0 bg-transparent border border-slate-200 transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md data-[checked=true]:bg-slate-800 data-[checked=true]:border-slate-800 text-slate-50 rounded" data-value=":R6H1:" data-checked="false" for="custom-react"><input id="custom-react" type="radio" style="display:none" value=":R6H1:" /><span class="pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in group-data-[checked=true]:scale-100 group-data-[checked=true]:opacity-100"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 stroke-2"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><label for="custom-react" class="font-sans antialiased text-base text-slate-600">React</label></div>
</div>
`
      }}
    />
  );
}
