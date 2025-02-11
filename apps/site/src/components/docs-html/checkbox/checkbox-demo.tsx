
export default function CheckboxDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="space-y-4 flex flex-col">
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="default-checkbox">
      <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="default-checkbox" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
    <label class="cursor-pointer ml-2 text-slate-600 font-normal antialiased" for="default-checkbox">Default Checkbox</label>
  </div>
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checked-checkbox">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="checked-checkbox" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
    <label class="cursor-pointer ml-2 text-slate-600 font-normal antialiased" for="checked-checkbox">Checked Checkbox</label>
  </div>
</div>
`
      }}
    />
  );
}




