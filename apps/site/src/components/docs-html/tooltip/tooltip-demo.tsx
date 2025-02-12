
export default function TooltipDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center justify-center">
  <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
    data-toggle="tooltip" data-placement="top" data-title="Material Tailwind" data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
    Hover
  </button>
</div>`
      }}
    />
  );
}
