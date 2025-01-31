export default function DialogWithForm() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="flex justify-center">
  <button type="button" data-dui-toggle="modal" data-dui-target="#exampleModalForm" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition "> Sign In</button>
  <div class="fixed antialiased inset-0 bg-stone-800 bg-opacity-75 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]" id="exampleModalForm" aria-hidden="true">
    <div class="bg-white rounded-lg w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 scale-95 transition-transform duration-300 ease-out">
      <div class="pt-4 px-4 flex justify-between items-start">
        <div class="flex flex-col">
          <h1 class="text-xl text-stone-800 font-semibold ">Sign In</h1>
          <p class="text-stone-500 ">Enter your email and password to Sign In.</p>
        </div>
        <button type="button" data-dui-dismiss="modal" aria-label="Close" class="text-stone-500 hover:text-stone-800">&times;</button>
      </div>
      <div class="p-4">
        <div class="mb-4 mt-2 space-y-1.5">
          <label for="email" class="font-sans  text-sm text-stone-800 dark:text-white font-semibold mb-2">Email</label>
          <div class="relative w-full">
            <input placeholder="someone@example.com" type="email" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 dark:text-white placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer" />
          </div>
        </div>
        <div class="mb-4 mt-2 space-y-1.5">
          <label for="password" class="font-sans  text-sm text-stone-800 dark:text-white font-semibold mb-2">Password</label>
          <div class="relative w-full">
            <input placeholder="*******" type="password" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 dark:text-white placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer" />
          </div>
        </div>
        <div class="inline-flex items-center mt-1">
          <label class="flex items-center cursor-pointer relative" for="modal-sign-in">
            <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow border border-stone-200 checked:bg-stone-800 checked:border-stone-800" id="modal-sign-in" />
            <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg stroke-width="1.5" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                <path d="M5 13L9 17L19 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span>
          </label>
          <label class="cursor-pointer ml-2 text-stone-800 text-sm" for="modal-sign-in"> Remember Me </label>
        </div>
      </div>
      <div class=" px-4 pb-4 flex flex-col justify-end gap-2">
        <button type="button" class="inline-flex w-full items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition ">Sign In </button>
        <small class="font-sans  text-sm mb-2 mt-3 flex items-center justify-center gap-1 text-stone-500">Don't have an account? <a href="#" onclick="event.preventDefault();" class="font-sans  text-sm text-primary font-semibold">Sign up</a>
        </small>
      </div>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }