

export default function ProgressColors() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-4">
  <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-slate-800" style="width:50%"></div>
  </div>
  <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-slate-400" style="width:50%"></div>
  </div>
  <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-blue-500" style="width:50%"></div>
  </div>
  <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-green-500" style="width:50%"></div>
  </div>
  <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-amber-500" style="width:50%"></div>
  </div>
  <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="h-full rounded-none bg-red-500" style="width:50%"></div>
  </div>
</div>
`
      }}
    />
  );
}
