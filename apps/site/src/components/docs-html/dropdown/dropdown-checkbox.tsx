export default function DropdownCheckbox() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="dropdown" data-placement="bottom-start">
  <button data-toggle="dropdown" aria-expanded="false" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"> Sort </button>
  <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
    <div class="block px-2 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md flex items-center">
      <div class="inline-flex items-center">
        <label class="flex items-center cursor-pointer relative" for="check-2">
          <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
          <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg stroke-width="1.5" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
              <path d="M5 13L9 17L19 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </label>
        <label class="cursor-pointer ml-2 text-slate-800 text-sm" for="check-2"> Task Name </label>
      </div>
    </div>
    <div class="block px-2 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md flex items-center">
      <div class="inline-flex items-center">
        <label class="flex items-center cursor-pointer relative" for="check-3">
          <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="check-3" />
          <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg stroke-width="1.5" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
              <path d="M5 13L9 17L19 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </label>
        <label class="cursor-pointer ml-2 text-slate-800 text-sm" for="check-3"> Data Created </label>
      </div>
    </div>
    <div class="block px-2 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md flex items-center">
      <div class="inline-flex items-center">
        <label class="flex items-center cursor-pointer relative" for="check-4">
          <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow border border-slate-200 checked:bg-slate-800 checked:border-slate-800" id="check-4" />
          <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg stroke-width="1.5" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
              <path d="M5 13L9 17L19 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </label>
        <label class="cursor-pointer ml-2 text-slate-800 text-sm" for="check-4"> Completed </label>
      </div>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }