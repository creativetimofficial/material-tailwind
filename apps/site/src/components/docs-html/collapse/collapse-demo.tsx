
export default function CollapseDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="text-center">
  <button data-toggle="collapse" data-target="#collapseButton" aria-expanded="false" aria-controls="collapseButton" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-base rounded-md py-2.5 px-5 shadow-sm hover:shadow-lg bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 shrink-0">Button with Collapse</button>
    <div class="overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0 mt-1" id="collapseButton">
      <div class="bg-white border border-slate-200 rounded-lg shadow-sm p-4 z-10">
        <p class="text-slate-500 text-sm">Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
      </div>
    </div>
</div>
`
      }}
    />
  );
}
