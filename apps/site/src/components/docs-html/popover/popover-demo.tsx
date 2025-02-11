
export default function PopoverDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="min-h-28">
  <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" 
    data-toggle="popover" data-placement="bottom"
    data-popover-class="bg-white text-slate-600 border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-2.5 z-50">
    Open
  </button>
  <div data-popover-content class="hidden">This is a very beautiful popover, show some love.</div>
</div>

`
      }}
    />
  );
}
