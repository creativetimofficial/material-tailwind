

export default function ButtonSizes() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-wrap items-end justify-center gap-4"><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Small</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Medium</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-lg border border-slate-800 bg-slate-800 px-5 py-3.5 text-center align-middle font-sans text-base font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Large</button></div>
`
      }}
    />
  );
}
