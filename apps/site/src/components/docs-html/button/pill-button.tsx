

export default function PillButton() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-wrap justify-center gap-4"><button data-ripple-dark="true" class="inline-flex select-none items-center justify-center rounded-full border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Ghost</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-full border border-slate-800 bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Outline</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-full border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Solid</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-full border border-slate-800 bg-gradient-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Gradient</button></div>
`
      }}
    />
  );
}
