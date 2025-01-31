

export default function InputDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<input placeholder="Input" class="w-72 select-none rounded-md border border-slate-200 bg-transparent px-2.5 py-[8.5px] text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 dark:text-white" type="text" />
`
      }}
    />
  );
}
