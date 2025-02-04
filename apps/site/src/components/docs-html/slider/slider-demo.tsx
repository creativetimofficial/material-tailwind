
export default function SliderDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-64">
  <div class="relative select-none rounded-full bg-slate-200 h-1">
    <div class="h-full rounded-full bg-slate-800" style="position:absolute;left:0%;width:0%"></div>
    <div class="h-full rounded-full bg-transparent" style="position:absolute;left:0%;width:100%"></div><button role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="rounded-full shadow shadow-slate-800/10 outline-none ring ring-transparent w-3.5 h-3.5 bg-slate-800 border-slate-800 focus:ring-slate-800/10 active:ring-slate-800/10" style="position:absolute;top:50%;left:0%;z-index:0;transform:translate(-50%, -50%)"></button>
  </div>
</div>
`
      }}
    />
  );
}
