

export default function AlertVariants() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-2">
  <div role="alert" class="relative flex w-full items-start rounded-md border border-transparent bg-slate-800/10 p-2 text-slate-800">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message, with variant=&quot;ghost&quot;</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-slate-800 bg-transparent p-2 text-slate-800">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message. with variant=&quot;outline&quot;</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-slate-800 bg-slate-800 p-2 text-slate-50">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message. with variant=&quot;solid&quot;</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-slate-800 bg-gradient-to-tr from-primary-dark to-primary-light p-2 text-slate-50">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message. with variant=&quot;gradient&quot;</div>
  </div>
</div>
`
      }}
    />
  );
}
