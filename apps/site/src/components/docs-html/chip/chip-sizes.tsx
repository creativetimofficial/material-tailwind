
export default function ChipSizes() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-end gap-2">
  <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-xs p-0.5 shadow-sm bg-slate-800 border-slate-800 text-slate-50"><span class="font-sans text-current leading-none my-0.5 mx-1.5">Small</span></div>
  <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-slate-800 border-slate-800 text-slate-50"><span class="font-sans text-current leading-none my-1 mx-2.5">Medium</span></div>
  <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-1 shadow-sm bg-slate-800 border-slate-800 text-slate-50"><span class="font-sans text-current leading-none my-1.5 mx-3">Large</span></div>
</div>
`
      }}
    />
  );
}
