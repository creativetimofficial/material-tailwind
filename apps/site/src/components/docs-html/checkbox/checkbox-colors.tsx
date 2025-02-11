
export default function CheckboxColors() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-wrap justify-center gap-4">
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checkbox-1">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="checkbox-1" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
  </div>
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checkbox-2">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-slate-100 checked:border-slate-100" id="checkbox-2" />
      <span class="absolute text-slate-800 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
  </div>
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checkbox-3">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-blue-500 checked:border-blue-500" id="checkbox-3" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
  </div>
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checkbox-4">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-green-500 checked:border-green-500" id="checkbox-4" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
  </div>
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checkbox-5">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-amber-500 checked:border-amber-500" id="checkbox-5" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
  </div>
  <div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checkbox-6">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow-md border border-slate-200 checked:bg-red-500 checked:border-red-500" id="checkbox-6" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
  </div>
</div>`
      }}
    />
  );
}
