

export default function CheckboxWithLabel() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center gap-2"><label class="relative inline-block h-5 w-5" for="checkbox1"><input id="checkbox1" type="checkbox" class="peer relative h-full w-full appearance-none overflow-hidden rounded before:absolute before:inset-0 before:h-5 before:w-5 before:bg-slate-200 before:transition-all before:duration-200 before:ease-in before:content-[&#x27;&#x27;] checked:before:bg-slate-800" /><span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current text-slate-50 opacity-0 transition-all duration-200 ease-in peer-checked:scale-100 peer-checked:opacity-100"><svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><label for="checkbox1" class="font-sans text-base text-slate-600 antialiased">Remember Me</label></div>
`
      }}
    />
  );
}
