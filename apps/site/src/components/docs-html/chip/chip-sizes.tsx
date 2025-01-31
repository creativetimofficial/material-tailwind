

export default function ChipSizes() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-end gap-2">
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-0.5 font-sans text-xs font-medium leading-none text-slate-50"><span class="font-sans mx-1.5 my-0.5 leading-none text-current">Small</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Medium</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-1 font-sans text-[15px] font-medium leading-none text-slate-50"><span class="font-sans mx-2.5 my-[4.5px] leading-none text-current">Large</span></div>
</div>
`
      }}
    />
  );
}
