
export default function ButtonVariants() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div class="item flex flex-wrap justify-center gap-4">
  <button class="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/5 shadow-none hover:shadow-none">
  Ghost
  </button>
  <button class="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-50">
  Outline
  </button>
  <button class="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">
  Solid
  </button>
  <button class="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-gradient-to-tr from-slate-800 to-slate-700 border-slate-800 text-slate-50 hover:brightness-105">
  Gradient
  </button>
</div>
        `
      }}
    />
  );
}
