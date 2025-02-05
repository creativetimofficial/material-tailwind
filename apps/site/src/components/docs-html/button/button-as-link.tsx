export default function ButtonAsLink() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-wrap gap-4">
  <a href="#" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/5 shadow-none hover:shadow-none">
    Ghost
  </a>
  <a href="#" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-300 text-slate-800 hover:bg-slate-800 hover:border-slate-700 hover:text-slate-50">
    Outline
  </a>
  <a href="#" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">
    Solid
  </a>
  <a href="#" class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-gradient-to-tr from-slate-800 to-slate-700 border-slate-800 text-slate-50 hover:brightness-105">
    Gradient
  </a>
</div>`
      }}
    />
  );
}
