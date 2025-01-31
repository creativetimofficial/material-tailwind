export default function DialogWeb3() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="flex justify-center">
  <button type="button" data-dui-toggle="modal" data-dui-target="#exampleModalWeb3" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"> Open </button>
  <div class="fixed antialiased inset-0 bg-stone-800 bg-opacity-75 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]" id="exampleModalWeb3" aria-hidden="true">
    <div class="bg-white rounded-lg w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 scale-95 transition-transform duration-300 ease-out">
      <div class="border-b border-stone-200 p-4 flex justify-between items-start">
        <div class="flex flex-col">
          <h1 class="text-lg text-stone-800 font-semibold">Connect a Wallet</h1>
          <p class="font-sans text-base text-stone-500">Choose which card you want to connect</p>
        </div>
        <button type="button" data-dui-dismiss="modal" aria-label="Close" class="text-stone-500 hover:text-stone-800">&times;</button>
      </div>
      <div class="p-4 text-stone-500">
        <p class="font-sans text-base text-stone-800 dark:text-white mb-2 font-semibold">Popular</p>
        <div class="space-y-2">
          <button class="inline-flex w-full gap-2 items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-200 hover:bg-stone-100 relative bg-gradient-to-b from-white to-white border-stone-200 text-stone-700 rounded-lg hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-50 hover:border-stone-200 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-1px_0px_rgba(0,0,0,0.20)] after:pointer-events-none transition">
            <img alt="metamask" src="https://docs.material-tailwind.com/icons/metamask.svg" class="h-5 w-5">
            <p class="font-sans text-base text-inherit font-semibold">Connect with MetaMask</p>
          </button>
          <button class="inline-flex w-full gap-2 items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-200 hover:bg-stone-100 relative bg-gradient-to-b from-white to-white border-stone-200 text-stone-700 rounded-lg hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-50 hover:border-stone-200 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-1px_0px_rgba(0,0,0,0.20)] after:pointer-events-none transition">
            <img alt="metamast" src="https://docs.material-tailwind.com/icons/coinbase.svg" class="h-6 w-6 rounded">
            <p class="font-sans antialiased text-base text-inherit font-semibold">Connect with Coinbase</p>
          </button>
        </div>
        <p class="font-sans text-base text-stone-800 dark:text-white mb-2 mt-6 font-semibold">Other</p>
        <button class="inline-flex w-full gap-2 items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-200 hover:bg-stone-100 relative bg-gradient-to-b from-white to-white border-stone-200 text-stone-700 rounded-lg hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-50 hover:border-stone-200 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-1px_0px_rgba(0,0,0,0.20)] after:pointer-events-none transition">
          <img alt="metamast" src="https://docs.material-tailwind.com/icons/trust-wallet.svg" class="h-6 w-6 rounded">
          <p class="font-sans antialiased text-base text-inherit font-semibold">Connect with Trust Wallet</p>
        </button>
      </div>
      <div class="border-t border-stone-200 p-4 flex justify-between items-center gap-2">
        <small class="font-sans antialiased text-sm text-stone-800">New to Ethereum wallets?</small>
        <button class="inline-flex gap-2 items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-200 hover:bg-stone-100 relative bg-gradient-to-b from-white to-white border-stone-200 text-stone-700 rounded-lg hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-50 hover:border-stone-200 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-1px_0px_rgba(0,0,0,0.20)] after:pointer-events-none transition">Learn More</button>
      </div>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }