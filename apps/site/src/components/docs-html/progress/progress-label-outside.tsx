

export default function ProgressLabelOutside() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-2">
    <p class="flex items-center justify-between font-sans text-base font-semibold text-slate-800 antialiased dark:text-white">
    <span>Completed</span>
    <span>50%</span></p>
    <div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
      <div class="h-full rounded-none bg-slate-800" style="width:50%"></div>
    </div>
</div>
`
      }}
    />
  );
}
