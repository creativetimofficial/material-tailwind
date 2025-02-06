
export default function CheckboxWithDescription() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex gap-2"><label class="group shadow-sm shadow-slate-950/5 inline-block relative h-5 w-5 cursor-pointer rounded bg-transparent border border-slate-200 transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md data-[checked=true]:bg-slate-800 data-[checked=true]:border-slate-800 text-slate-50" data-checked="false" for="checkbox-description"><input id="checkbox-description" type="checkbox" style="display:none" /><span data-checked="false" class="pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in data-[checked=true]:scale-100 data-[checked=true]:opacity-100"><svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><label for="checkbox-description" class="-translate-y-0.5 cursor-pointer">
    <p class="font-sans antialiased text-base text-current font-semibold">Remember Me</p><small class="font-sans antialiased text-sm text-slate-600">You&#x27;ll be able to login without password for 24 hours.</small>
  </label></div>
`
      }}
    />
  );
}
