export default function DialogNotification() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="flex justify-center">
  <button type="button" data-toggle="modal" data-target="#exampleModalNotification" class="inline-flex border font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700"> Open Notification </button>
  <div class="fixed antialiased inset-0 bg-slate-950/50 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]" id="exampleModalNotification" aria-hidden="true">
    <div class="bg-white rounded-xl shadow-2xl shadow-slate-950/5 w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 scale-95 transition-transform duration-300 ease-out">
      <div class="flex flex-col items-center p-4">
        <h1 class="text-xl text-slate-800 font-bold">Your Attention is Required!</h1>
        <p class=" text-base text-slate-600">Choose which card you want to connect</p>
      </div>
      <button type="button" data-dismiss="modal" aria-label="Close" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[34px] min-h-[34px] rounded-full bg-transparent border-transparent text-slate-200-foreground hover:bg-slate-200/10 hover:border-slate-200/10 shadow-none hover:shadow-none outline-none absolute right-2 top-2">
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
      <div class="p-4 text-slate-500 text-center">
        <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mb-6 h-24 w-24 mx-auto text-slate-800">
          <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M21 12V15C21 18.3137 18.3137 21 15 21H9C5.68629 21 3 18.3137 3 15V9C3 5.68629 5.68629 3 9 3H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <h6 class="font-bold text-xl text-slate-800">You should read this!</h6>
        <p class="text-base mt-2 text-center text-slate-600">Many people limit themselves by their own self-doubt, slowing their progress. Fortunately, I was raised with the belief that I could achieve anything.</p>
      </div>
      <div class="p-4 flex items-center justify-center gap-1">
        <button class="inline-grid place-items-center py-2 px-4 border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-red-500 hover:bg-red-500/5 hover:border-red-500/5 shadow-none hover:shadow-none">Cancel</button>
        <button type="button" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">Got it</button>
      </div>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }