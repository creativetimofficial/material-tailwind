
export default function PopoverPlacement() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="min-h-[400px] flex flex-col items-center justify-center gap-4">
  <div class="flex items-center gap-2">
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="top-start" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Top Start</button>
    <div data-popover-content class="hidden">This popover is placed at the top-start position</div>
    
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="top" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Top</button>
    <div data-popover-content class="hidden">This popover is placed at the top position</div>
    
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="top-end" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Top End</button>
    <div data-popover-content class="hidden">This popover is placed at the top-end position</div>
  </div>

  <div class="flex justify-between w-72">
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="left" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Left</button>
    <div data-popover-content class="hidden">This popover is placed at the left position</div>
    
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="right" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Right</button>
    <div data-popover-content class="hidden">This popover is placed at the right position</div>
  </div>

  <div class="flex items-center gap-2">
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="bottom-start" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Bottom Start</button>
    <div data-popover-content class="hidden">This popover is placed at the bottom-start position</div>
    
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="bottom" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Bottom</button>
    <div data-popover-content class="hidden">This popover is placed at the bottom position</div>
    
    <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="bottom-end" data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl  shadow-slate-950/[0.025] p-2.5 z-50">Bottom End</button>
    <div data-popover-content class="hidden">This popover is placed at the bottom-end position</div>
  </div>
</div>`
      }}
    />
  );
}
