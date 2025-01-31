

export default function RadioDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col items-start gap-2">
  <div class="flex items-center gap-2"><label class="relative inline-block w-5 h-5" for="html"><input id="html" type="radio" name="framework" class="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-slate-200 before:transition-all before:duration-200 before:ease-in before:content-[&#x27;&#x27;] checked:before:bg-slate-800" value="html" /><span class="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-slate-50 peer-checked:scale-100 peer-checked:opacity-100"><svg width="9px" height="9px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z" fill="currentColor"></path></svg></span></label><label for="html" class="font-sans text-base antialiased text-slate-600">HTML</label></div>
  <div class="flex items-center gap-2"><label class="relative inline-block w-5 h-5" for="react"><input id="react" type="radio" name="framework" class="peer relative h-full w-full appearance-none overflow-hidden rounded rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-slate-200 before:transition-all before:duration-200 before:ease-in before:content-[&#x27;&#x27;] checked:before:bg-slate-800" value="react" /><span class="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-slate-50 peer-checked:scale-100 peer-checked:opacity-100"><svg width="9px" height="9px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z" fill="currentColor"></path></svg></span></label><label for="react" class="font-sans text-base antialiased text-slate-600">React</label></div>
</div>
`
      }}
    />
  );
}
