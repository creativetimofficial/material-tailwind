

export default function ProgressLabelInside() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="block h-6 w-full overflow-hidden rounded-full bg-slate-200">
    <div class="grid h-full place-items-center rounded-none bg-slate-800" style="width:50%">
        <small class="font-sans text-sm text-slate-200 antialiased">50% Completed</small>
    </div>
</div>
`
      }}
    />
  );
}
