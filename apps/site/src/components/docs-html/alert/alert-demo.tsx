

export default function AlertDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative flex w-full items-start rounded-md border border-slate-800 bg-slate-800 p-2 text-slate-50">
  <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message.</div>
</div>
`
      }}
    />
  );
}
