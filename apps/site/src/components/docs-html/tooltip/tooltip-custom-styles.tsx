
export default function TooltipCustomStyles() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center justify-center">
  <button type="button" data-toggle="tooltip" data-placement="bottom" data-tooltip-class="bg-white w-4/12 md:w-2/12 border border-slate-200 text-slate-800 text-xs rounded-md py-1 px-2 shadow-sm z-50" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"> Custom HTML Tooltip </button>
  <div data-tooltip-content class="hidden">
    <h3 class="font-semibold text-sm">Material Tailwind</h3>
    <p class="text-xs mt-1 text-slate-500">Material Tailwind is an easy to use components library for TailwindCSS</p>
  </div>                
</div>`
      }}
    />
  );
}
