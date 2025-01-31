

export default function InputWithDropdown() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative flex w-full max-w-[24rem]"><button id=":rk:" class="group flex h-10 select-none items-center justify-center gap-2 rounded-md rounded-r-none border border-r-0 border-slate-200 bg-slate-200 px-3.5 py-2.5 pl-3 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 outline-none transition-all duration-300 ease-in hover:bg-slate-100 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"><img src="https://flagcdn.com/ke.svg" alt="Kenya" class="h-4 w-4 rounded-full object-cover" />+254</button>
  <div class="relative w-72 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed"><input placeholder="Mobile Number" class="peer h-full w-full select-none rounded-[inherit] rounded-l-none border border-slate-200 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white" type="text" /></div>
</div>
`
      }}
    />
  );
}
