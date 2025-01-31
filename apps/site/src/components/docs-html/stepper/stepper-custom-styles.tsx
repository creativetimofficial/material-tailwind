

export default function StepperCustomStyles() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="mx-auto w-full overflow-hidden rounded-full border border-slate-950 bg-slate-800 p-6 shadow-lg shadow-slate-950/25">
  <div class="flex w-full flex-row items-center">
    <div class="group block w-full">
      <div class="relative">
        <div class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-300 "></div><span class="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-white text-slate-50"></span>
      </div>
    </div>
    <div class="group block w-full">
      <div class="relative">
        <div class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-300 "></div><span class="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 text-surface-foreground"></span>
      </div>
    </div>
    <div class="group block w-full">
      <div class="relative">
        <div class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-300 "></div><span class="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 text-surface-foreground"></span>
      </div>
    </div>
    <div class="group block">
      <div class="relative"><span class="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-gray-300 text-surface-foreground"></span></div>
    </div>
  </div>
</div>
`
      }}
    />
  );
}
