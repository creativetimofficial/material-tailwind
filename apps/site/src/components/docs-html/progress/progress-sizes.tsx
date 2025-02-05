

export default function ProgressSizes() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-6">
  <div class="block h-2 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-slate-800" style="width:50%"></div>
  </div>
  <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-slate-800" style="width:50%"></div>
  </div>
  <div class="block h-6 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-slate-800" style="width:50%"></div>
  </div>
</div>
`
      }}
    />
  );
}
