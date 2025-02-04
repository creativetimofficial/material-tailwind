
export default function SliderColors() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex w-64 flex-col gap-8">
  <div class="relative select-none rounded-full bg-slate-200 h-1">
    <div class="h-full rounded-full bg-slate-800" style="position:absolute;left:0%;width:0%"></div>
    <div class="h-full rounded-full bg-transparent" style="position:absolute;left:0%;width:100%"></div><button role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="rounded-full shadow shadow-slate-800/10 outline-none ring ring-transparent w-3.5 h-3.5 bg-slate-800 border-slate-800 focus:ring-slate-800/10 active:ring-slate-800/10" style="position:absolute;top:50%;left:0%;z-index:0;transform:translate(-50%, -50%)"></button>
  </div>
  <div class="relative select-none rounded-full bg-slate-200 h-1">
    <div class="h-full rounded-full bg-slate-200" style="position:absolute;left:0%;width:0%"></div>
    <div class="h-full rounded-full bg-transparent" style="position:absolute;left:0%;width:100%"></div><button role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="rounded-full shadow shadow-slate-800/10 outline-none ring ring-transparent w-3.5 h-3.5 bg-slate-200 border-slate-200 focus:ring-secondary/10 active:ring-secondary/10" style="position:absolute;top:50%;left:0%;z-index:0;transform:translate(-50%, -50%)"></button>
  </div>
  <div class="relative select-none rounded-full bg-slate-200 h-1">
    <div class="h-full rounded-full bg-blue-500" style="position:absolute;left:0%;width:0%"></div>
    <div class="h-full rounded-full bg-transparent" style="position:absolute;left:0%;width:100%"></div><button role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="rounded-full shadow shadow-slate-800/10 outline-none ring ring-transparent w-3.5 h-3.5 bg-blue-500 border-blue-500 focus:ring-info/10 active:ring-info/10" style="position:absolute;top:50%;left:0%;z-index:0;transform:translate(-50%, -50%)"></button>
  </div>
  <div class="relative select-none rounded-full bg-slate-200 h-1">
    <div class="h-full rounded-full bg-green-500" style="position:absolute;left:0%;width:0%"></div>
    <div class="h-full rounded-full bg-transparent" style="position:absolute;left:0%;width:100%"></div><button role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="rounded-full shadow shadow-slate-800/10 outline-none ring ring-transparent w-3.5 h-3.5 bg-green-500 border-green-500 focus:ring-success/10 active:ring-success/10" style="position:absolute;top:50%;left:0%;z-index:0;transform:translate(-50%, -50%)"></button>
  </div>
  <div class="relative select-none rounded-full bg-slate-200 h-1">
    <div class="h-full rounded-full bg-amber-500" style="position:absolute;left:0%;width:0%"></div>
    <div class="h-full rounded-full bg-transparent" style="position:absolute;left:0%;width:100%"></div><button role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="rounded-full shadow shadow-slate-800/10 outline-none ring ring-transparent w-3.5 h-3.5 bg-amber-500 border-amber-500 focus:ring-warning/10 active:ring-warning/10" style="position:absolute;top:50%;left:0%;z-index:0;transform:translate(-50%, -50%)"></button>
  </div>
  <div class="relative select-none rounded-full bg-slate-200 h-1">
    <div class="h-full rounded-full bg-red-500" style="position:absolute;left:0%;width:0%"></div>
    <div class="h-full rounded-full bg-transparent" style="position:absolute;left:0%;width:100%"></div><button role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="rounded-full shadow shadow-slate-800/10 outline-none ring ring-transparent w-3.5 h-3.5 bg-red-500 border-red-500 focus:ring-error/10 active:ring-error/10" style="position:absolute;top:50%;left:0%;z-index:0;transform:translate(-50%, -50%)"></button>
  </div>
</div>
`
      }}
    />
  );
}
