

export default function InputWithButton() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<form action="#" class="flex w-full max-w-sm items-center justify-center gap-2">
  <div class="relative w-full rounded-md text-sm leading-none"><input placeholder="someone@example.com" class="peer h-full w-full select-none rounded-[inherit] border border-slate-200 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 dark:text-white" type="email" /></div><button type="submit" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700">Subscribe</button>
</form>
`
      }}
    />
  );
}
