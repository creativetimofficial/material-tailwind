

export default function BlockLevelButton() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex w-full flex-col gap-4"><button data-ripple-dark="true" class="inline-flex w-full select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Ghost Block Level Button</button><button data-ripple-light="true" class="inline-flex w-full select-none items-center justify-center rounded-md border border-slate-800 bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Outline Block Level Button</button><button data-ripple-light="true" class="inline-flex w-full select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Solid Block Level Button</button><button data-ripple-light="true" class="inline-flex w-full select-none items-center justify-center rounded-md border border-slate-800 bg-gradient-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Gradient Block Level Button</button></div>
`
      }}
    />
  );
}
