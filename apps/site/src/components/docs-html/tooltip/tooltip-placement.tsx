
export default function TooltipPlacement() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col items-center gap-4">
  <!-- Top Row -->
  <div class="flex gap-4">
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="top" data-title="Top Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Top
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="top-start" data-title="Top Start Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Top Start
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="top-end" data-title="Top End Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Top End
    </button>
  </div>

  <!-- Right Row -->
  <div class="flex gap-4">
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="right" data-title="Right Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Right
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="right-start" data-title="Right Start Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Right Start
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="right-end" data-title="Right End Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Right End
    </button>
  </div>

  <!-- Bottom Row -->
  <div class="flex gap-4">
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="bottom" data-title="Bottom Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Bottom
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="bottom-start" data-title="Bottom Start Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Bottom Start
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="bottom-end" data-title="Bottom End Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Bottom End
    </button>
  </div>

  <!-- Left Row -->
  <div class="flex gap-4">
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="left" data-title="Left Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Left
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="left-start" data-title="Left Start Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Left Start
    </button>
    <button type="button"
            class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group"
            data-toggle="tooltip" data-placement="left-end" data-title="Left End Tooltip"
            data-tooltip-class="bg-slate-950 text-white text-xs rounded-md py-1 px-2 shadow-md z-50">
      Left End
    </button>
  </div>
</div>`
      }}
    />
  );
}
