

export default function ProgressDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="block h-4 w-full overflow-hidden rounded-full bg-slate-200">
  <div class="h-full rounded-none bg-slate-800" style="width:50%"></div>
</div>
`
      }}
    />
  );
}
