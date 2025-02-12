

export default function PillButtonGroup() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col gap-4">
  <div class="inline-flex flex-row">
    <button class="inline-flex rounded-full border border-transparent bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      React
    </button>
    <button class="inline-flex rounded-full border border-transparent bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Vue
    </button>
    <button class="inline-flex rounded-full border border-transparent bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Svelte
    </button>
  </div>
  <div class="inline-flex flex-row">
    <button class="inline-flex rounded-full rounded-r-none border border-slate-800 bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-800 hover:text-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      React
    </button>
    <button class="inline-flex rounded-none border border-l-0 border-slate-800 bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-800 hover:text-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Vue
    </button>
    <button class="inline-flex rounded-full rounded-l-none border border-l-0 border-slate-800 bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-800 hover:text-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Svelte
    </button>
  </div>
  <div class="inline-flex flex-row">
    <button class="inline-flex rounded-full rounded-r-none border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      React
    </button>
    <button class="inline-flex rounded-none border border-l-0 border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Vue
    </button>
    <button class="inline-flex rounded-full rounded-l-none border border-l-0 border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Svelte
    </button>
  </div>
  <div class="inline-flex flex-row">
    <button class="inline-flex rounded-full rounded-r-none border border-slate-800 bg-gradient-to-tr from-slate-800 to-slate-700 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      React
    </button>
    <button class="inline-flex rounded-none border border-l-0 border-slate-800 bg-gradient-to-tr from-slate-800 to-slate-700 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Vue
    </button>
    <button class="inline-flex rounded-full rounded-l-none border border-l-0 border-slate-800 bg-gradient-to-tr from-slate-800 to-slate-700 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Svelte
    </button>
  </div>
</div>`
      }}
    />
  );
}
