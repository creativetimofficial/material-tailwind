

export default function ChipDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-50"><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Material Tailwind</span></div>
`
      }}
    />
  );
}
