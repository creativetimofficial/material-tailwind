
export default function CustomCheckbox() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="inline-flex items-center">
    <label class="flex items-center cursor-pointer relative" for="checkbox-1">
      <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow-sm hover:shadow-md border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="checkbox-1" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg fill="none" width="18px" height="18px" stroke-width="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </label>
  </div>`
      }}
    />
  );
}
