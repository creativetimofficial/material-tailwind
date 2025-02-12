
export default function DialogWeb3() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex justify-center">
  <button type="button" data-toggle="modal" data-target="#exampleModalWeb3" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700"> Open </button>
  <div class="fixed antialiased inset-0 bg-slate-950/50 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]" id="exampleModalWeb3" aria-hidden="true">
    <div class="bg-white rounded-xl shadow-2xl shadow-slate-950/5 w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 scale-95 transition-transform duration-300 ease-out">
      <div class="border-b border-slate-200 p-4 flex justify-between items-start">
        <div class="flex flex-col">
          <h1 class="text-lg text-slate-800 font-semibold">Connect a Wallet</h1>
          <p class="font-sans text-base text-slate-600">Choose which card you want to connect</p>
        </div>
        <button type="button" data-dismiss="modal" aria-label="Close" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-200-foreground hover:bg-slate-200/10 hover:border-slate-200/10 shadow-none hover:shadow-none outline-none absolute right-2 top-2">
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
      </div>
      <div class="p-4 text-slate-600">
        <p class="font-sans text-base text-slate-800 dark:text-white mb-2 font-semibold">Popular</p>
        <div class="space-y-2">
          <button class="inline-flex justify-center w-full text-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100">
            <img alt="metamask" src="https://docs.material-tailwind.com/icons/metamask.svg" class="h-5 w-5">
            <p class="font-sans text-base text-inherit font-semibold ml-2">Connect with MetaMask</p>
          </button>
          <button class="inline-flex justify-center w-full text-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100">
            <img alt="metamask" src="https://docs.material-tailwind.com/icons/coinbase.svg" class="h-6 w-6 rounded">
            <p class="font-sans antialiased text-base text-inherit font-semibold ml-2">Connect with Coinbase</p>
          </button>
        </div>
        <p class="font-sans text-base text-slate-800 dark:text-white mb-2 mt-6 font-semibold">Other</p>
        <button class="inline-flex justify-center w-full text-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100">
          <img alt="metamask" src="https://docs.material-tailwind.com/icons/trust-wallet.svg" class="h-6 w-6 rounded">
          <p class="font-sans antialiased text-base text-inherit font-semibold ml-2">Connect with Trust Wallet</p>
        </button>
      </div>
      <div class="border-t border-slate-200 p-4 flex justify-between items-center gap-2">
        <small class="font-sans antialiased text-sm text-slate-800">New to Ethereum wallets?</small>
        <button class="inline-flex gap-2 items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 hover:bg-slate-100 relative bg-gradient-to-b from-white to-white border-slate-200 text-slate-700 rounded-lg hover:bg-gradient-to-b hover:from-slate-50 hover:to-slate-50 hover:border-slate-200 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-1px_0px_rgba(0,0,0,0.20)] after:pointer-events-none transition">Learn More</button>
      </div>
    </div>
  </div>
</div>`
      }}
    />
  );
}
