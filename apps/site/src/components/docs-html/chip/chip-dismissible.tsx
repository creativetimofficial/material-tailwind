

export default function ChipDismissible() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div id="chip" class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-50"><span class="grid h-4 w-4 shrink-0 translate-x-0.5 place-items-center rounded-full"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-full w-full"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Material Tailwind</span><button id="chip-dismiss-trigger" class="ms-1 grid h-[18px] w-[18px] shrink-0 -translate-x-0.5 place-items-center rounded-full stroke-2 p-px"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-full w-full">
      <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg></button></div>
`
      }}
    />
  );
}
