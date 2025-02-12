
export default function ChipColors() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center gap-2">
    <div data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-slate-800 border-slate-800 text-slate-50">
        <span class="font-sans text-current leading-none my-1 mx-2.5">Primary</span>
    </div>
      <div data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-slate-200 border-slate-200 text-slate-800">
      <span class="font-sans text-current leading-none my-1 mx-2.5">Secondary</span>
    </div>
    <div data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-blue-500 border-blue-500 text-blue-50">
        <span class="font-sans text-current leading-none my-1 mx-2.5">Info</span>
    </div>
    <div data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-green-500 border-green-500 text-green-50">
        <span class="font-sans text-current leading-none my-1 mx-2.5">Success</span>
    </div>
    <div data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-amber-500 border-amber-500 text-amber-50">
        <span class="font-sans text-current leading-none my-1 mx-2.5">Warning</span>
    </div>
    <div data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-red-500 border-red-500 text-red-50">
        <span class="font-sans text-current leading-none my-1 mx-2.5">Error</span>
    </div>
</div>
`
      }}
    />
  );
}
