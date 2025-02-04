
export default function ChipVariants() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center gap-2">
  <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 bg-slate-800/10 border-transparent text-slate-800 shadow-none"><span class="font-sans text-current leading-none my-1 mx-2.5">Ghost</span></div>
  <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-transparent border-slate-800 text-slate-800"><span class="font-sans text-current leading-none my-1 mx-2.5">Outline</span></div>
  <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-slate-800 border-slate-800 text-slate-50"><span class="font-sans text-current leading-none my-1 mx-2.5">Solid</span></div>
  <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-gradient-to-tr from-primary-dark to-primary-light border-slate-800 text-slate-50"><span class="font-sans text-current leading-none my-1 mx-2.5">Gradient</span></div>
</div>
`
      }}
    />
  );
}
