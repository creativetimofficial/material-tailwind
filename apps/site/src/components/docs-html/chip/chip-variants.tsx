

export default function ChipVariants() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center gap-2">
  <div class="relative inline-flex select-none items-center rounded-full border border-transparent bg-slate-800/10 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-800"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Ghost</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-transparent p-[3px] font-sans text-[13px] font-medium leading-none text-slate-800"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Outline</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Solid</span></div>
  <div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-gradient-to-tr from-primary-dark to-primary-light p-[3px] font-sans text-[13px] font-medium leading-none text-slate-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Gradient</span></div>
</div>
`
      }}
    />
  );
}
