

export default function AlertColors() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-2">
  <div role="alert" class="relative flex w-full items-start rounded-md border border-slate-800 bg-slate-800 p-2 text-slate-50">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message, with primary color</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-slate-200 bg-slate-200 p-2 text-slate-800">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message, with secondary color</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-blue-500 bg-blue-500 p-2 text-blue-50">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message, with info color</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-green-500 bg-green-500 p-2 text-green-50">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message, with success color</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-amber-500 bg-amber-500 p-2 text-amber-50">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message, with warning color</div>
  </div>
  <div role="alert" class="relative flex w-full items-start rounded-md border border-red-500 bg-red-500 p-2 text-red-50">
    <div class="m-1.5 w-full font-sans text-base leading-none">A simple alert for showing message, with error color</div>
  </div>
</div>

`
      }}
    />
  );
}
