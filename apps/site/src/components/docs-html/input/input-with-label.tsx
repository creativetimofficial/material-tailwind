

export default function InputWithLabel() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative w-72 space-y-1 rounded-md text-sm leading-none"><label for="email" class="font-sans text-sm font-semibold text-slate-800 antialiased dark:text-white">Email</label><input id="email" placeholder="someone@example.com" class="peer h-full w-full select-none rounded-[inherit] border border-slate-200 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 dark:text-white" type="email" /></div>
`
      }}
    />
  );
}
