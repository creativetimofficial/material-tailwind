
export default function ButtonColors() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div class="flex gap-4">
  <button class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">
    Primary
  </button>
  <button class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100">
    Secondary
  </button>
  <button class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-blue-500 border-blue-500 text-blue-50 hover:bg-blue-400 hover:border-blue-400">
    Info
  </button>
  <button class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-green-500 border-green-500 text-green-50 hover:bg-bg-green-400 hover:border-green-400">
    Success
  </button>
  <button class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-400 hover:border-amber-400">
    Warning
  </button>
  <button class="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-red-500 border-red-500 text-red-50 hover:bg-red-400 hover:border-red-400">
    Error
  </button>
</div>
`
      }}
    />
  );
}
