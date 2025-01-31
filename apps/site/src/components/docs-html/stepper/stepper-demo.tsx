

export default function StepperDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full">
  <div class="flex w-full flex-row items-center">
    <div class="group block w-full aria-disabled:pointer-events-none aria-disabled:select-none">
      <div class="relative">
        <div class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-slate-200"></div><span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-800 text-slate-50">1</span>
      </div>
    </div>
    <div aria-disabled="true" class="group block w-full aria-disabled:pointer-events-none aria-disabled:select-none">
      <div class="relative">
        <div class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-slate-200"></div><span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-surface-foreground">2</span>
      </div>
    </div>
    <div aria-disabled="true" class="group block aria-disabled:pointer-events-none aria-disabled:select-none">
      <div class="relative"><span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-surface-foreground">3</span></div>
    </div>
  </div>
</div>
`
      }}
    />
  );
}
