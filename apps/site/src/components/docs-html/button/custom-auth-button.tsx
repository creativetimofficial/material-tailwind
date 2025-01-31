

export default function CustomAuthButton() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-wrap justify-center gap-4"><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-md border border-[#F7931A] bg-[#F7931A] px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-white transition-all duration-300 ease-in hover:border-[#F7931A] hover:bg-[#F7931A] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-2 h-4 w-4 stroke-2">
      <path d="M9 12C9.00007 12.8416 9 15.107 9 16.3941C9 16.7255 9.26863 16.9943 9.59998 16.9962C12.5662 17.0136 15 17.072 15 14.5C15 11.7564 12 12 9 12ZM9 12L9.00003 7.60592C9.00003 7.27453 9.26867 7.00571 9.60005 7.00377C12.5662 6.98641 15 6.92799 15 9.5C15 12.2436 12 12 9 12Z" stroke="currentColor"></path>
      <path d="M12 7L12 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 18.5L12 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>Connect Wallet</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-md border border-white bg-white px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 shadow-md shadow-black/10 transition-all duration-300 ease-in hover:border-white hover:bg-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-2 h-4 w-4 stroke-2">
      <path d="M15.5475 8.30327C14.6407 7.49361 13.4329 7 12.1089 7C9.28696 7 7 9.23899 7 12C7 14.761 9.28696 17 12.1089 17C15.5781 17 16.86 14.4296 17 12.4167H12.841" stroke="currentColor"></path>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>Continue with Google</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-md border border-[#1877F2] bg-[#1877F2] px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-white transition-all duration-300 ease-in hover:border-[#1877F2] hover:bg-[#1877F2] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-2 h-4 w-4 stroke-2">
      <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>Continue with Facebook</button></div>
`
      }}
    />
  );
}
