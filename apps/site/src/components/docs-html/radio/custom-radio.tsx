

export default function CustomRadio() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col items-start gap-2">
  <div class="flex items-center gap-2"><label class="relative inline-block w-5 h-5" for="custom-html"><input id="custom-html" type="radio" name="custom-radio" class="peer relative h-full w-full appearance-none overflow-hidden rounded before:absolute before:inset-0 before:h-5 before:w-5 before:bg-slate-200 before:transition-all before:duration-200 before:ease-in before:content-[&#x27;&#x27;] checked:before:bg-slate-800" value="custom-radio" /><span class="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-slate-50 peer-checked:scale-100 peer-checked:opacity-100"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="w-4 h-4 stroke-2"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><label for="custom-html" class="font-sans text-base antialiased text-slate-600">HTML</label></div>
  <div class="flex items-center gap-2"><label class="relative inline-block w-5 h-5" for="custom-react"><input id="custom-react" type="radio" name="custom-radio" class="peer relative h-full w-full appearance-none overflow-hidden rounded before:absolute before:inset-0 before:h-5 before:w-5 before:bg-slate-200 before:transition-all before:duration-200 before:ease-in before:content-[&#x27;&#x27;] checked:before:bg-slate-800" value="custom-react" /><span class="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-slate-50 peer-checked:scale-100 peer-checked:opacity-100"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="w-4 h-4 stroke-2"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><label for="custom-react" class="font-sans text-base antialiased text-slate-600">React</label></div>
</div>
`
      }}
    />
  );
}
