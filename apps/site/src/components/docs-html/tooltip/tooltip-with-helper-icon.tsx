
export default function TooltipWithHelperIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center justify-center">
  <button data-toggle="tooltip" data-placement="top" data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/5 shadow-none hover:shadow-none">
    <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
        <path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
  <div data-tooltip-content class="hidden">
      <span class="text-base font-semibold">Material Tailwind</span>
      <p class="text-xs opacity-90">Material Tailwind is an easy to use components </br> library for TailwindCSS and Material Design.</p>
  </div>
</div>`
      }}
    />
  );
}
