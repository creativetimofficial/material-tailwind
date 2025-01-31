

export default function ButtonGroupDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="inline-flex flex-row"><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-md rounded-r-none border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">React</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-none border border-l-0 border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Vue</button><button data-ripple-light="true" class="inline-flex select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Svelte</button></div>
`
      }}
    />
  );
}
