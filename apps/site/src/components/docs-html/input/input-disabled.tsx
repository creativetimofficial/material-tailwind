

export default function InputDisabled() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative w-72 rounded-md text-sm leading-none aria-disabled:cursor-not-allowed" aria-disabled="true"><input placeholder="Input" class="peer pointer-events-none h-full w-full select-none rounded-[inherit] border border-slate-200 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 opacity-50 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 dark:text-white" disabled="" type="text" /></div>
`
      }}
    />
  );
}
