

export default function ChipColors() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center gap-2">
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Primary</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-200 bg-slate-200 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-800"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Secondary</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-blue-500 bg-blue-500 p-[3px] font-sans text-[13px] font-medium leading-none text-blue-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Info</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-green-500 bg-green-500 p-[3px] font-sans text-[13px] font-medium leading-none text-green-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Success</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-amber-500 bg-amber-500 p-[3px] font-sans text-[13px] font-medium leading-none text-amber-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Warning</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-red-500 bg-red-500 p-[3px] font-sans text-[13px] font-medium leading-none text-red-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Error</span></div>
</div>
`
      }}
    />
  );
}
